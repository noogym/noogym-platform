import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { EditorialController } from "./editorial.controller";
import { EditorialService } from "./editorial.service";

@Module({
  imports: [PrismaModule],
  controllers: [EditorialController],
  providers: [EditorialService],
  exports: [EditorialService],
})
export class EditorialModule {}
