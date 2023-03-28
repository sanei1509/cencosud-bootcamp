import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ServicioUsuarios } from './users.service';
import { Usuario } from './entities/user.entity';
import { CrearUsuarioInput } from './dto/create-user.input';
import { ActualizarUsuarioInput } from './dto/update-user.input';

@Resolver(() => Usuario)
export class UsuariosResolver {
  constructor(private readonly servicioUsuarios: ServicioUsuarios) {}

  @Query(() => [Usuario], { name: 'users' })
  async findAll(): Promise<Usuario[]> {
    return this.servicioUsuarios.findAll();
  }

  @Query(() => Usuario, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number)
  : string {
    return this.servicioUsuarios.findOne(id);
  }

  @Mutation(() => Usuario)
  updateUsuario(@Args('updateUsuarioInput') updateUsuarioInput: ActualizarUsuarioInput) {
    return this.servicioUsuarios.update(updateUsuarioInput.id, updateUsuarioInput);
  }

  @Mutation(() => Usuario)
  removeUsuario(@Args('id', { type: () => Int }) id: number) {
    return this.servicioUsuarios.remove(id);
  }
}
