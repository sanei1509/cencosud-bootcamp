import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ServicioUsuarios } from './users.service';
import { Usuario } from './entities/user.entity';
import { CrearUsuarioInput } from './dto/create-user.input';
import { ActualizarUsuarioInput } from './dto/update-user.input';

@Resolver(() => Usuario)
export class UsuariosResolver {
  constructor(private readonly servicioUsuarios: ServicioUsuarios) {}

  @Query(() => [Usuario], { name: 'ListarUsuarios' })
  async findAll(): Promise<Usuario[]> {
    return this.servicioUsuarios.findAll();
  }

  @Query(() => Usuario, { name: 'BuscarUsuarioByID' })
  async findOne(@Args('id', { type: () => ID }) id: string)
  : Promise<Usuario> {
    return this.servicioUsuarios.findOneById(id);
  }

  // Eliminado permanente
  @Mutation(() => Usuario)
  removeUsuario(@Args('id', { type: () => ID }) id: string) {
    return this.servicioUsuarios.remove(id);
  }
  // Baja logica de usuario
  @Mutation(() => Usuario)
  async BlockUser(@Args('id', { type: () => ID }) id: number): Promise<Usuario> {
    return this.servicioUsuarios.block(id);
  }

}
