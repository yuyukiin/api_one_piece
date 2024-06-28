import { Module } from "@nestjs/common"
import { AkumaNoMiController } from "./akuma-no-mi.controller"
import { AkumaNoMiService } from "./akuma-no-mi.service"
import { PrismaService } from "nestjs-prisma"

@Module({
  imports: [],
  controllers: [AkumaNoMiController],
  providers: [AkumaNoMiService, PrismaService],
})
export class AkumaNoMiModule { }
