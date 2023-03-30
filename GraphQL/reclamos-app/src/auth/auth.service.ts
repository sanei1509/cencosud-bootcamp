import { BadRequestException, Injectable } from '@nestjs/common';
import { RegistroUsuarioInput } from './dto/inputs/registro.input';
import { LoginUsuarioInput } from './dto/inputs/login.input';
import { AuthResponse } from './types/auth.response';
import { ServicioUsuarios } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

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

    // Validar usuario
    const {email, password} = loginUsuarioInput;
    const usuario = await this.servicioUsuarios.findOneByEmail(email);

    console.log(usuario);
    console.log(bcrypt.compareSync(password, usuario.password));
    
    // En caso de coincidencia en contraseñas
    if(bcrypt.compareSync(password, usuario.password)) {
      // Genero token
      const token = `ABC123`

      
      return {usuario, token}
    }

    throw new BadRequestException("Contraseña invalida, Intente de nuevo")
  }
  

  //revalidacion de token
  async revalidarToken(): Promise<string>{
    return "Validando Token de usuario..."
  }
}
