import { Module } from "@nestjs/common";
import { ClassificationModule } from "../classification/classification.module";
import { DeduplicationModule } from "../deduplication/deduplication.module";
import { EntitiesModule } from "../entities/entities.module";
import { IngestionModule } from "../ingestion/ingestion.module";
import { PrismaModule } from "../prisma/prisma.module";
import { ContentController } from "./content.controller";
import { ContentService } from "./content.service";

@Module({
  imports: [PrismaModule, IngestionModule, ClassificationModule, EntitiesModule, DeduplicationModule],
  controllers: [ContentController],
  providers: [ContentService],
  exports: [ContentService],
})
export class ContentModule {}
