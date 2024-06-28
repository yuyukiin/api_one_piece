import { Controller, Get, Param } from "@nestjs/common"
import { AkumaNoMiService } from "./akuma-no-mi.service"

@Controller('akuma-no-mi')
export class AkumaNoMiController {
  constructor(private readonly akumaNoMiService: AkumaNoMiService) {}

  @Get()
  async getAll() {
    return await this.akumaNoMiService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const idNumber = parseInt(id)
    
    return await this.akumaNoMiService.getOne(idNumber)
  }
}