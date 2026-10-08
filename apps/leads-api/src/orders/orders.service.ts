import { BadRequestException, Injectable } from "@nestjs/common";
import { PaymentStatus, Prisma } from "@prisma/client";
import { AuthService } from "../auth/auth.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateOrderDto } from "./dto/create-order.dto";

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async create(dto: CreateOrderDto, token: string | null) {
    const userId = this.authService.getSessionUserId(token);
    const normalizedItems = dto.items.map((item) => ({
      productId: item.productId ?? null,
      name: item.name,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalPrice: item.quantity * item.unitPrice,
    }));
    const subtotal = normalizedItems.reduce((sum, item) => sum + item.totalPrice, 0);

    if (subtotal <= 0) {
      throw new BadRequestException("O pedido precisa ter pelo menos um item com valor valido.");
    }

    const discount = dto.couponCode ? Math.round(subtotal * 0.1) : 0;
    const deliveryFee = deliveryFeeByMethod[dto.deliveryMethod];
    const totalAmount = Math.max(subtotal - discount + deliveryFee, 0);

    const order = await this.prisma.order.create({
      data: {
        userId,
        customerName: dto.customerName ?? null,
        customerEmail: dto.customerEmail ?? null,
        customerPhone: dto.customerPhone ?? null,
        subtotal,
        totalAmount,
        items: {
          create: normalizedItems.map((item) => ({
            productId: undefined,
            name: item.name,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
          })),
        },
        payments: {
          create: {
            amount: totalAmount,
            method: dto.paymentMethod,
            provider: paymentProviderByMethod[dto.paymentMethod],
            status: PaymentStatus.PENDING,
            providerRef: buildProviderRef(),
          },
        },
      },
      include: {
        items: true,
        payments: true,
      },
    });

    return {
      success: true,
      order,
      message: "Pedido recebido com sucesso. A equipa Noogym vai acompanhar a confirmacao.",
    };
  }
}

const deliveryFeeByMethod = {
  rapida: 1500,
  expressa: 2500,
} satisfies Record<CreateOrderDto["deliveryMethod"], number>;

const paymentProviderByMethod = {
  delivery: "cash-on-delivery",
  multicaixa: "multicaixa-express",
  card: "card",
} satisfies Record<CreateOrderDto["paymentMethod"], string>;

function buildProviderRef() {
  return `NOO-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}
