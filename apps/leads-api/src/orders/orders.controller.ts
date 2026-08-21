import { Body, Controller, Post, Req } from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { Throttle } from "@nestjs/throttler";
import type { Request } from "express";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrdersService } from "./orders.service";

@ApiTags("orders")
@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @Throttle({ default: { limit: 12, ttl: 60_000 } })
  @ApiCreatedResponse({ description: "Pedido criado com sucesso." })
  create(@Body() dto: CreateOrderDto, @Req() request: Request) {
    return this.ordersService.create(dto, getBearerToken(request));
  }
}

function getBearerToken(request: Request) {
  const authorization = request.header("authorization");
  const [scheme, token] = authorization?.split(" ") ?? [];

  if (scheme?.toLowerCase() !== "bearer" || !token) {
    return null;
  }

  return token;
}
