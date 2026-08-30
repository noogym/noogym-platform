import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { NormalizationService } from "./normalization.service";
import { IngestionService } from "./ingestion.service";

@Module({
  imports: [PrismaModule],
  providers: [IngestionService, NormalizationService],
  exports: [IngestionService, NormalizationService],
})
export class IngestionModule {}
