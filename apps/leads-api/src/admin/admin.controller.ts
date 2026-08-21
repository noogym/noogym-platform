import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { AdminOrApiKeyGuard } from "../common/guards/admin-or-api-key.guard";
import { AdminService } from "./admin.service";
import { ListAdminResourcesQueryDto } from "./dto/list-admin-resources-query.dto";
import { UpsertAdminUserDto } from "./dto/upsert-admin-user.dto";

@ApiTags("admin")
@Controller("admin")
@UseGuards(AdminOrApiKeyGuard)
@ApiSecurity("api-key")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get("users")
  @ApiOkResponse({ description: "Lista usuarios com permissao administrativa." })
  listAdminUsers() {
    return this.adminService.listAdminUsers();
  }

  @Get("accounts")
  @ApiOkResponse({ description: "Lista todas as contas criadas na plataforma." })
  listAccounts(@Query() query: ListAdminResourcesQueryDto) {
    return this.adminService.listAccounts(query);
  }

  @Get("gyms")
  @ApiOkResponse({ description: "Lista todos os ginasios cadastrados na base Noogym." })
  listGyms(@Query() query: ListAdminResourcesQueryDto) {
    return this.adminService.listGyms(query);
  }

  @Post("users")
  @ApiCreatedResponse({ description: "Cria ou promove um usuario com permissao admin." })
  upsertAdminUser(@Body() dto: UpsertAdminUserDto) {
    return this.adminService.upsertAdminUser(dto);
  }
}
