import { Injectable } from '@nestjs/common';
import { CrearUsuarioInput } from './dto/create-user.input';
import { ActualizarUsuarioInput } from './dto/update-user.input';
import { Usuario } from './entities/user.entity';

@Injectable()
export class ServicioUsuarios {
  create(createUserInput: CrearUsuarioInput) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<Usuario[]> {
    return [];
  }

  findOne(id: number): string {
     throw new Error("Method not implemented.");
     return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: ActualizarUsuarioInput): string {
    return `This action updates a #${id} user`;
  }

  remove(id: number): string {
    throw new Error("Metodo no implementado aun")
    return `This action removes a #${id} user`;
  }
}
