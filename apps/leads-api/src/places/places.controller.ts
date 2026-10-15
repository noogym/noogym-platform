import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { ApiOkResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { AdminOrApiKeyGuard } from "../common/guards/admin-or-api-key.guard";
import { CreatePartnerFromDiscoveredGymDto } from "./dto/create-partner-from-discovered-gym.dto";
import { DiscoverLuandaGymsQueryDto } from "./dto/discover-luanda-gyms-query.dto";
import { LinkDiscoveredGymDto } from "./dto/link-discovered-gym.dto";
import { ListDiscoveredLuandaGymsQueryDto } from "./dto/list-discovered-luanda-gyms-query.dto";
import { ListNearbyGymsQueryDto } from "./dto/list-nearby-gyms-query.dto";
import { PlacesService } from "./places.service";

@ApiTags("places")
@Controller("places")
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get("gyms")
  @ApiOkResponse({ description: "Ginásios próximos encontrados no Google Places." })
  listNearbyGyms(@Query() query: ListNearbyGymsQueryDto) {
    return this.placesService.listNearbyGyms(query);
  }

  @Get("gyms/discovered-luanda")
  @ApiOkResponse({ description: "Ginásios de Luanda já descobertos e guardados a partir do Google Places." })
  listDiscoveredLuandaGyms(@Query() query: ListDiscoveredLuandaGymsQueryDto) {
    return this.placesService.listDiscoveredLuandaGyms(query);
  }

  @Post("gyms/discover-luanda")
  @UseGuards(AdminOrApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Descoberta em lote de ginásios em zonas de Luanda usando Google Places." })
  discoverLuandaGyms(@Query() query: DiscoverLuandaGymsQueryDto) {
    return this.placesService.discoverLuandaGyms(query);
  }

  @Get("gyms/discovered/admin")
  @UseGuards(AdminOrApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Lista administrativa de ginásios descobertos, incluindo vinculados e ocultos." })
  listDiscoveredAdmin(@Query() query: ListDiscoveredLuandaGymsQueryDto) {
    return this.placesService.listDiscoveredAdmin(query);
  }

  @Patch("gyms/discovered/:id/link")
  @UseGuards(AdminOrApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Vincula um local descoberto a um parceiro Noogym existente." })
  linkDiscoveredGym(@Param("id") id: string, @Body() dto: LinkDiscoveredGymDto) {
    return this.placesService.linkDiscoveredGym(id, dto);
  }

  @Post("gyms/discovered/:id/create-partner")
  @UseGuards(AdminOrApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Cria um parceiro Noogym a partir de um local descoberto no Google Maps." })
  createPartnerFromDiscoveredGym(@Param("id") id: string, @Body() dto: CreatePartnerFromDiscoveredGymDto) {
    return this.placesService.createPartnerFromDiscoveredGym(id, dto);
  }

  @Patch("gyms/discovered/:id/hide")
  @UseGuards(AdminOrApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Oculta um local descoberto da listagem pública." })
  hideDiscoveredGym(@Param("id") id: string) {
    return this.placesService.updateDiscoveredStatus(id, "HIDDEN");
  }

  @Patch("gyms/discovered/:id/duplicate")
  @UseGuards(AdminOrApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Marca um local descoberto como duplicado e remove da listagem pública." })
  markDiscoveredGymDuplicate(@Param("id") id: string) {
    return this.placesService.updateDiscoveredStatus(id, "DUPLICATE");
  }

  @Patch("gyms/discovered/:id/claim")
  @UseGuards(AdminOrApiKeyGuard)
  @ApiSecurity("api-key")
  @ApiOkResponse({ description: "Marca um local descoberto como reivindicado por um ginásio." })
  claimDiscoveredGym(@Param("id") id: string) {
    return this.placesService.updateDiscoveredStatus(id, "CLAIMED");
  }
}
