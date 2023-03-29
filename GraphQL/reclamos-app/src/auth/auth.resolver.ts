import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { RegistroUsuarioInput } from './dto/inputs/registro.input';
import { LoginUsuarioInput } from './dto/inputs/login.input';
import { AuthResponse } from './types/auth.response';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // Vamos a gestionar 2 cosas desde aqui: Login y Register
  @Mutation(() => AuthResponse, {name: "Register", description: "Registro de Usuario en la base de datos, Generar Auth Token"})
  async register(/*Input*/ @Args('registroUsuarioInput') registroUsuarioInput: RegistroUsuarioInput): Promise<AuthResponse> {
    return this.authService.register(registroUsuarioInput);
  }

  
  @Mutation(() => AuthResponse, {name: "Login", description: "Inicio de sesión de Usuario, Incluir Auth Token"})
  async login(/*Input*/@Args('loginUsuarioInput') loginUsuarioInput: LoginUsuarioInput ): Promise<AuthResponse> {
    return this.authService.login(loginUsuarioInput);
  }

  // Validación de Token
  @Query(() => AuthResponse, {name: "ValidoToken", description: "Validar Token de Usuario, Devuelve datos del usuario"})
  async revalidarToken(/*inputUser*/){
    return this.authService.revalidarToken();
  }


  // @Mutation(() => Auth)
  // createAuth(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
  //   return this.authService.create(createAuthInput);
  // }

  // @Query(() => [Auth], { name: 'auth' })
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Query(() => Auth, { name: 'auth' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.authService.findOne(id);
  // }

  // @Mutation(() => Auth)
  // updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
  //   return this.authService.update(updateAuthInput.id, updateAuthInput);
  // }

  // @Mutation(() => Auth)
  // removeAuth(@Args('id', { type: () => Int }) id: number) {
  //   return this.authService.remove(id);
  // }
}
