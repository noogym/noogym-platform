import { Controller, Get, Post } from "@nestjs/common";
import { JobsService } from "./jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobs: JobsService) {}

  @Get()
  list() {
    return this.jobs.list();
  }

  @Post("crawl-all-sources")
  crawlAllSources() {
    return this.jobs.crawlAllSources();
  }
}
