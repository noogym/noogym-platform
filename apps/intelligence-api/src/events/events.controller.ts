import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreateEventSubmissionDto } from "./dto/create-event-submission.dto";
import { EventsService } from "./events.service";

@Controller()
export class EventsController {
  constructor(private readonly events: EventsService) {}

  @Get("events")
  list(
    @Query("status") status?: string,
    @Query("province") province?: string,
    @Query("city") city?: string,
    @Query("origin") origin?: string,
    @Query("q") q?: string,
  ) {
    return this.events.list({ status, province, city, origin, q });
  }

  @Post("events/detect/:contentId")
  detectFromContent(@Param("contentId") contentId: string) {
    return this.events.detectFromContent(contentId);
  }

  @Post("events/:id/detect-duplicates")
  detectDuplicates(@Param("id") id: string) {
    return this.events.detectDuplicates(id);
  }

  @Post("submissions/events")
  createSubmission(@Body() dto: CreateEventSubmissionDto) {
    return this.events.createSubmission(dto);
  }
}
