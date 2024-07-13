import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common"
import { AkumaNoMiService } from "./akuma-no-mi.service"
import { akuma_no_mi } from "@prisma/client"

@Controller('akuma-no-mi')
export class AkumaNoMiController {
  constructor(private readonly akumaNoMiService: AkumaNoMiService) { }

  @Get()
  async getAll() {
    return await this.akumaNoMiService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const idNumber = parseInt(id)

    return await this.akumaNoMiService.getOne(idNumber)
  }

  @Post()
  async create(@Body() akumaNoMi: akuma_no_mi) {
    return await this.akumaNoMiService.create(akumaNoMi)
  }

  @Delete(':id')
  async remove(@Param('id') id: string){
    const idNumber = parseInt(id)

    return await this.akumaNoMiService.remove(idNumber)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() akumaNoMi: akuma_no_mi){
    const idNumber = parseInt(id)

    return await this.akumaNoMiService.update(idNumber, akumaNoMi)
  }

}