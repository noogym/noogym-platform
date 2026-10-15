import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdminOrApiKeyGuard } from "../common/guards/admin-or-api-key.guard";
import { PrismaModule } from "../prisma/prisma.module";
import { PlacesController } from "./places.controller";
import { PlacesService } from "./places.service";

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [PlacesController],
  providers: [AdminOrApiKeyGuard, PlacesService],
})
export class PlacesModule {}
