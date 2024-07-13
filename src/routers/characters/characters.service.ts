import { Injectable } from '@nestjs/common'

@Injectable()
export class CharactersService {
  create() {
    return 'This action adds a new character'
  }

  findAll() {
    return { message: 'Sucesso!' }
  }

  findOne(id: number) {
    return `This action returns a #${id} character`
  }

  update(id: number) {
    return `This action updates a #${id} character`
  }

  remove(id: number) {
    return `This action removes a #${id} character`
  }
}
