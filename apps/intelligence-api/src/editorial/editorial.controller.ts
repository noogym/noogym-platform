import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ReviewActionDto } from "./dto/review-action.dto";
import { EditorialService } from "./editorial.service";

@Controller("editorial")
export class EditorialController {
  constructor(private readonly editorial: EditorialService) {}

  @Get("review")
  queue() {
    return this.editorial.queue();
  }

  @Get("review/events")
  eventQueue() {
    return this.editorial.eventQueue();
  }

  @Post("content/:id/approve")
  approveContent(@Param("id") id: string, @Body() dto: ReviewActionDto) {
    return this.editorial.approveContent(id, dto);
  }

  @Post("content/:id/reject")
  rejectContent(@Param("id") id: string, @Body() dto: ReviewActionDto) {
    return this.editorial.rejectContent(id, dto);
  }

  @Post("events/:id/approve")
  approveEvent(@Param("id") id: string, @Body() dto: ReviewActionDto) {
    return this.editorial.approveEvent(id, dto);
  }

  @Post("events/:id/reject")
  rejectEvent(@Param("id") id: string, @Body() dto: ReviewActionDto) {
    return this.editorial.rejectEvent(id, dto);
  }

  @Post("content/:id/schedule")
  scheduleContent(@Param("id") id: string, @Body() dto: ReviewActionDto) {
    return this.editorial.scheduleContent(id, dto);
  }

  @Post("content/:id/publish")
  markContentPublished(@Param("id") id: string, @Body() dto: ReviewActionDto) {
    return this.editorial.markContentPublished(id, dto);
  }

  @Post("events/:id/schedule")
  scheduleEvent(@Param("id") id: string, @Body() dto: ReviewActionDto) {
    return this.editorial.scheduleEvent(id, dto);
  }

  @Post("events/:id/publish")
  markEventPublished(@Param("id") id: string, @Body() dto: ReviewActionDto) {
    return this.editorial.markEventPublished(id, dto);
  }
}
