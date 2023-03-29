import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroUsuarioInput } from 'src/auth/dto/inputs/registro.input';
import { Repository } from 'typeorm';
import { CrearUsuarioInput } from './dto/create-user.input';
import { ActualizarUsuarioInput } from './dto/update-user.input';
import { Usuario } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ServicioUsuarios {
  //El logger es un servicio que nos permite registrar eventos en la consola
  private readonly logger: Logger = new Logger('UsuariosService')

  // inyectamos nuestro repositorio
  constructor(
    @InjectRepository(Usuario)
    private readonly repositorioUsuarios: Repository<Usuario>
  ){}

  // Creacion / Registro de usuario
  async create(registroUsuarioInput: RegistroUsuarioInput) {
    try{
      // create crea una instancia de la entidad pero no la guarda en la base de datos
      // save guarda la instancia en la base de datos
      registroUsuarioInput.password = await bcrypt.hash(registroUsuarioInput.password, 10)
      const nuevoUsuario = this.repositorioUsuarios.create(registroUsuarioInput)

      // persistimos el nuevo usuario en la base de datos y retornamos el usuario creado
     return await this.repositorioUsuarios.save(nuevoUsuario)
    }
    catch(error){
      this.manejarErrores(error)
    }
  }

  async findAll(): Promise<Usuario[]> {
    return [];
  }

  async findOne(id: string): Promise<Usuario> {
     throw new Error("Method not implemented.");
  }

  update(id: string, updateUserInput: ActualizarUsuarioInput): string {
    return `This action updates a #${id} user`;
  }

  remove(id: string): string {
    throw new Error("Metodo no implementado aun")
    return `This action removes a #${id} user`;
  }

  async block(id): Promise<Usuario> {
    throw new Error("Metodo no implementado aun")
  }

  // Manejador de errores de la base de datos
  private manejarErrores(error: any): never{
    this.logger.error(error);

    if (error.code === '23505') {
      throw new BadRequestException('Ya existe un usuario con este correo en la aplicación')
    }

    throw new InternalServerErrorException('Error en la base de datos, revisa los logs');
  }
}
