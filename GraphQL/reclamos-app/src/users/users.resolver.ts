import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ServicioUsuarios } from './users.service';
import { Usuario } from './entities/user.entity';
import { CrearUsuarioInput } from './dto/create-user.input';
import { ActualizarUsuarioInput } from './dto/update-user.input';
import { ParseUUIDPipe } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { RolesValidos } from 'src/auth/enums/roles-validos.enum';

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

  // Actualizacion/modificacion de usuario
  @Mutation(() => Usuario, { name: 'ActualizarUsuario'})
  async updateUser(@Args('infoActualizar') actualizarUsuarioInput: ActualizarUsuarioInput) {
    return this.servicioUsuarios.update(actualizarUsuarioInput.id, actualizarUsuarioInput);
  }

  // Eliminado permanente
  @Mutation(() => Usuario, {name: "EliminarUsuario"})
  removeUsuario(@Args('id', { type: () => ID }) id: string) {
    return this.servicioUsuarios.remove(id);
  }

  // Baja logica de usuario
  @Mutation(() => Usuario, {name: 'BajaDeUsuario'})
  async BlockUser(
    @Args('id', { type: () => ID }, ParseUUIDPipe) id: string,
    @CurrentUser([RolesValidos.admin]) usuario : Usuario
    ): Promise<Usuario> {
    return this.servicioUsuarios.bloqueoDeUsuarios(id, usuario);
  }

}
