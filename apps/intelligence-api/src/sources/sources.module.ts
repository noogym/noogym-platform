import { Module } from "@nestjs/common";
import { IngestionModule } from "../ingestion/ingestion.module";
import { PrismaModule } from "../prisma/prisma.module";
import { SourcesController } from "./sources.controller";
import { SourcesService } from "./sources.service";

@Module({
  imports: [PrismaModule, IngestionModule],
  controllers: [SourcesController],
  providers: [SourcesService],
  exports: [SourcesService],
})
export class SourcesModule {}
