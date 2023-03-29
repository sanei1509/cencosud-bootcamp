import { Injectable } from '@nestjs/common';
import { RegistroUsuarioInput } from './dto/inputs/registro.input';
import { LoginUsuarioInput } from './dto/inputs/login.input';
import { AuthResponse } from './types/auth.response';
import { ServicioUsuarios } from 'src/users/users.service';

@Injectable()
export class AuthService {
  // Inyecto mi servicio de usuarios
  constructor(
    private readonly servicioUsuarios: ServicioUsuarios
  ){}

  async register(registroUsuarioInput: RegistroUsuarioInput): Promise<AuthResponse>{
    console.log({registroUsuarioInput});
    // Crear usuario
    const usuario = await this.servicioUsuarios.create(registroUsuarioInput);
    // Generar Token
    const token = "ABC123"
    // Devolver token y usuario creado, devuelto en el metodo de creacion de usuario
    return {token, usuario}
  }

  async login(loginUsuarioInput: LoginUsuarioInput): Promise<AuthResponse> {
    console.log({loginUsuarioInput});
    throw new Error("Method not implemented.");
  }

  //revalidacion de token
  async revalidarToken(): Promise<string>{
    return "Validando Token de usuario..."
  }
}
