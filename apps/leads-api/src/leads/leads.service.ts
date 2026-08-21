import { Injectable, NotFoundException } from "@nestjs/common";
import { LeadStatus as PrismaLeadStatus, Prisma } from "@prisma/client";
import { MailService } from "../mail/mail.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateDemoRequestDto } from "./dto/create-demo-request.dto";
import { CreateFitlandiaLeadDto } from "./dto/create-fitlandia-lead.dto";
import { ListLeadsQueryDto } from "./dto/list-leads-query.dto";
import { UpdateLeadStatusDto } from "./dto/update-lead-status.dto";
import { TurnstileService } from "./turnstile.service";

type RequestMetadata = {
  ipAddress: string | null;
  userAgent: string | null;
};

@Injectable()
export class LeadsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly turnstileService: TurnstileService,
  ) {}

  async createDemoRequest(dto: CreateDemoRequestDto, metadata: RequestMetadata) {
    if (dto.turnstileToken || process.env.LEADS_TURNSTILE_REQUIRED === "true") {
      await this.turnstileService.verify(dto.turnstileToken ?? "", metadata.ipAddress);
    }

    const normalizedWhatsapp = dto.whatsapp.replace(/\s+/g, "");
    const normalizedGymName = dto.gymName.trim();
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const duplicate = await this.prisma.demoRequestLead.findFirst({
      where: {
        whatsapp: normalizedWhatsapp,
        gymName: caseInsensitiveStringFilter("equals", normalizedGymName),
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (duplicate) {
      return {
        success: true,
        duplicated: true,
        leadId: duplicate.id,
        message: "O seu pedido já foi recebido. A equipa Noogym entrará em contacto consigo em breve.",
      };
    }

    const lead = await this.prisma.demoRequestLead.create({
      data: {
        fullName: dto.fullName,
        gymName: normalizedGymName,
        whatsapp: normalizedWhatsapp,
        email: dto.email ?? null,
        city: dto.city,
        currentStudentsRange: dto.currentStudentsRange,
        unitsRange: dto.unitsRange ?? null,
        mainChallenge: dto.mainChallenge,
        message: dto.message ?? null,
        status: PrismaLeadStatus.NEW,
        source: dto.source ?? null,
        campaign: dto.campaign ?? null,
        utmSource: dto.utmSource ?? null,
        utmMedium: dto.utmMedium ?? null,
        utmCampaign: dto.utmCampaign ?? null,
        utmContent: dto.utmContent ?? null,
        utmTerm: dto.utmTerm ?? null,
        ipAddress: metadata.ipAddress,
        userAgent: metadata.userAgent,
      },
    });

    void this.mailService.sendDemoRequestEmails(lead);

    return {
      success: true,
      duplicated: false,
      leadId: lead.id,
      message: "Pedido enviado com sucesso. A equipa Noogym entrará em contacto consigo em breve.",
    };
  }

  async createFitlandiaLead(dto: CreateFitlandiaLeadDto, metadata: RequestMetadata) {
    const normalizedWhatsapp = dto.whatsapp.replace(/\s+/g, "");
    const campaign = dto.campaign ?? "fitlandia-2026";
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const duplicate = await this.prisma.fitlandiaLead.findFirst({
      where: {
        whatsapp: normalizedWhatsapp,
        profile: dto.profile,
        campaign,
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (duplicate) {
      return {
        success: true,
        duplicated: true,
        leadId: duplicate.id,
        message: "O seu contacto já foi registado para a campanha FitLândia.",
      };
    }

    const lead = await this.prisma.fitlandiaLead.create({
      data: {
        profile: dto.profile,
        fullName: dto.fullName,
        whatsapp: normalizedWhatsapp,
        email: dto.email ?? null,
        city: dto.city ?? null,
        business: dto.business ?? null,
        objective: dto.objective ?? null,
        extra: dto.extra ?? undefined,
        source: dto.source ?? "fitlandia-modal",
        campaign,
        ipAddress: metadata.ipAddress,
        userAgent: metadata.userAgent,
      },
    });

    return {
      success: true,
      duplicated: false,
      leadId: lead.id,
      message: "Contacto registado. A equipa Noogym entrará em contacto consigo.",
    };
  }

  async list(query: ListLeadsQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const where: Prisma.DemoRequestLeadWhereInput = {
      ...(query.status ? { status: query.status } : {}),
      ...(query.city
        ? {
            city: {
              ...caseInsensitiveStringFilter("contains", query.city),
            },
          }
        : {}),
      ...(query.mainChallenge ? { mainChallenge: query.mainChallenge } : {}),
      ...buildCreatedAtFilter(query.from, query.to),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.demoRequestLead.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.demoRequestLead.count({ where }),
    ]);

    return {
      items,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const lead = await this.prisma.demoRequestLead.findUnique({
      where: { id },
    });

    if (!lead) {
      throw new NotFoundException("Lead não encontrado.");
    }

    return lead;
  }

  async updateStatus(id: string, dto: UpdateLeadStatusDto) {
    await this.findOne(id);

    return this.prisma.demoRequestLead.update({
      where: { id },
      data: {
        status: dto.status,
      },
    });
  }
}

function caseInsensitiveStringFilter(
  operation: "contains" | "equals",
  value: string,
): Prisma.StringFilter<"DemoRequestLead"> {
  return {
    [operation]: value,
    mode: "insensitive",
  };
}

function buildCreatedAtFilter(from?: string, to?: string) {
  if (!from && !to) {
    return {};
  }

  return {
    createdAt: {
      ...(from ? { gte: new Date(from) } : {}),
      ...(to ? { lte: new Date(to) } : {}),
    },
  };
}
