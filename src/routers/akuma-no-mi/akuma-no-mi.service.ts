import { Injectable } from "@nestjs/common"
import { PrismaService } from "nestjs-prisma"
import { akuma_no_mi } from "@prisma/client"

@Injectable()
export class AkumaNoMiService {
  constructor(private prisma: PrismaService) { }

  async getAll(): Promise<akuma_no_mi[]> {
    return await this.prisma.akuma_no_mi.findMany()
  }

  async getOne(id: number): Promise<akuma_no_mi> {
    return await this.prisma.akuma_no_mi.findUnique({
      where: { id_akuma_no_mi: id }
    })
  }

  async create(akumaNoMi: akuma_no_mi) {
    await this.prisma.akuma_no_mi.create({ data: akumaNoMi })

    return { message: "Criado com Sucesso!" }
  }

  async remove(id: number) {
    await this.prisma.akuma_no_mi.delete({
      where: { id_akuma_no_mi: id }
    })

    return { message: "Deletado com Sucesso!" }
  }

  async update(id: number, akumaNoMi: akuma_no_mi) {
    await this.prisma.akuma_no_mi.update({
      data: akumaNoMi,
      where: { id_akuma_no_mi: id }
    })
  }
}