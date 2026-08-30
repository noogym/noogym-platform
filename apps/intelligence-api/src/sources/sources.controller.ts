import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { IngestionService } from "../ingestion/ingestion.service";
import { CreateSourceDto } from "./dto/create-source.dto";
import { SourcesService } from "./sources.service";

@Controller("sources")
export class SourcesController {
  constructor(
    private readonly sources: SourcesService,
    private readonly ingestion: IngestionService,
  ) {}

  @Get()
  list() {
    return this.sources.list();
  }

  @Post()
  create(@Body() dto: CreateSourceDto) {
    return this.sources.create(dto);
  }

  @Patch(":id/enable")
  enable(@Param("id") id: string) {
    return this.sources.setEnabled(id, true);
  }

  @Patch(":id/disable")
  disable(@Param("id") id: string) {
    return this.sources.setEnabled(id, false);
  }

  @Post(":id/test")
  test(@Param("id") id: string) {
    return this.ingestion.crawlSource(id);
  }

  @Post(":id/crawl")
  crawl(@Param("id") id: string) {
    return this.ingestion.crawlSource(id);
  }
}
