import { Body, Controller, Get, Param, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { Throttle } from "@nestjs/throttler";
import type { Request } from "express";
import { ApiKeyGuard } from "../common/guards/api-key.guard";
import { CreateDemoRequestDto } from "./dto/create-demo-request.dto";
import { CreateFitlandiaLeadDto } from "./dto/create-fitlandia-lead.dto";
import { ListLeadsQueryDto } from "./dto/list-leads-query.dto";
import { UpdateLeadStatusDto } from "./dto/update-lead-status.dto";
import { LeadsService } from "./leads.service";

@ApiTags("leads")
@Controller("leads")
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post("demo-request")
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @ApiCreatedResponse({ description: "Pedido de demonstração recebido." })
  createDemoRequest(@Body() dto: CreateDemoRequestDto, @Req() request: Request) {
    return this.leadsService.createDemoRequest(dto, {
      ipAddress: getIpAddress(request),
      userAgent: request.header("user-agent") ?? null,
    });
  }

  @Post("fitlandia")
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @ApiCreatedResponse({ description: "Contacto da campanha FitLândia recebido." })
  createFitlandiaLead(@Body() dto: CreateFitlandiaLeadDto, @Req() request: Request) {
    return this.leadsService.createFitlandiaLead(dto, {
      ipAddress: getIpAddress(request),
      userAgent: request.header("user-agent") ?? null,
    });
  }

  @Get()
  @UseGuards(ApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Lista paginada de leads." })
  list(@Query() query: ListLeadsQueryDto) {
    return this.leadsService.list(query);
  }

  @Get(":id")
  @UseGuards(ApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Detalhes do lead." })
  findOne(@Param("id") id: string) {
    return this.leadsService.findOne(id);
  }

  @Patch(":id/status")
  @UseGuards(ApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Status do lead atualizado." })
  updateStatus(@Param("id") id: string, @Body() dto: UpdateLeadStatusDto) {
    return this.leadsService.updateStatus(id, dto);
  }
}

function getIpAddress(request: Request) {
  const forwardedFor = request.header("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? null;
  }

  return request.ip ?? null;
}
