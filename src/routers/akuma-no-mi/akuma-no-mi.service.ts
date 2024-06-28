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
}