import { Module } from '@nestjs/common'
import { AkumaNoMiModule } from './routers/akuma-no-mi/akuma-no-mi.module'
import { PrismaModule } from 'nestjs-prisma'

@Module({
  imports: [AkumaNoMiModule, PrismaModule.forRoot()],
})
export class AppModule { }
