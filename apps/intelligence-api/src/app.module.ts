import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { AuditModule } from "./audit/audit.module";
import { ClassificationModule } from "./classification/classification.module";
import { ApiKeyGuard } from "./common/guards/api-key.guard";
import { validateEnv } from "./config/env.schema";
import { ContentModule } from "./content/content.module";
import { DeduplicationModule } from "./deduplication/deduplication.module";
import { EditorialModule } from "./editorial/editorial.module";
import { EntitiesModule } from "./entities/entities.module";
import { EventsModule } from "./events/events.module";
import { HealthModule } from "./health/health.module";
import { IngestionModule } from "./ingestion/ingestion.module";
import { JobsModule } from "./jobs/jobs.module";
import { PrismaModule } from "./prisma/prisma.module";
import { PublishingModule } from "./publishing/publishing.module";
import { SourcesModule } from "./sources/sources.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnv }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 90 }]),
    PrismaModule,
    SourcesModule,
    IngestionModule,
    ContentModule,
    EventsModule,
    ClassificationModule,
    EntitiesModule,
    DeduplicationModule,
    EditorialModule,
    PublishingModule,
    JobsModule,
    AuditModule,
    HealthModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: ApiKeyGuard },
  ],
})
export class AppModule {}
