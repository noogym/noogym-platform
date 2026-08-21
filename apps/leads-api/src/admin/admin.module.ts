import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdminOrApiKeyGuard } from "../common/guards/admin-or-api-key.guard";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";

@Module({
  imports: [AuthModule],
  controllers: [AdminController],
  providers: [AdminOrApiKeyGuard, AdminService],
})
export class AdminModule {}
