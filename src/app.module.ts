import { Module } from '@nestjs/common'
import { AkumaNoMiModule } from './routers/akuma-no-mi/akuma-no-mi.module'
import { PrismaModule } from 'nestjs-prisma'
import { CharactersModule } from './routers/characters/characters.module';

@Module({
  imports: [AkumaNoMiModule, PrismaModule.forRoot(), CharactersModule],
})
export class AppModule { }
