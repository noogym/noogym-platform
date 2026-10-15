import { Controller, Param, Post } from "@nestjs/common";
import { PublishingService } from "./publishing.service";

@Controller("publishing")
export class PublishingController {
  constructor(private readonly publishing: PublishingService) {}

  @Post("blog/:contentId/prepare")
  prepareBlog(@Param("contentId") contentId: string) {
    return this.publishing.prepareBlog(contentId);
  }

  @Post("events/:eventCandidateId/prepare")
  prepareEvent(@Param("eventCandidateId") eventCandidateId: string) {
    return this.publishing.prepareEvent(eventCandidateId);
  }

  @Post("website/export")
  exportWebsiteData() {
    return this.publishing.exportWebsiteData();
  }
}
