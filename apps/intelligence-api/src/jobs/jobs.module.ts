import { Module } from "@nestjs/common";
import { ContentModule } from "../content/content.module";
import { EventsModule } from "../events/events.module";
import { IngestionModule } from "../ingestion/ingestion.module";
import { PrismaModule } from "../prisma/prisma.module";
import { JobsController } from "./jobs.controller";
import { JobsService } from "./jobs.service";

@Module({
  imports: [PrismaModule, IngestionModule, ContentModule, EventsModule],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
