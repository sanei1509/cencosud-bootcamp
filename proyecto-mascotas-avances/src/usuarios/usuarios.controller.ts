//importacion de decoradores / verbos a utilizar
import { Controller, Get} from '@nestjs/common';
import { UserDto } from './dto.usuario';
import { UsuariosService } from './usuarios.service';

//controlador de usuarios
@Controller('usuarios')
export class UsuariosController {
    //le damos accesos controlador al servicio
    constructor(
        private servicio: UsuariosService
    ){}

    @Get()
    traerTodo(): UserDto[] {
        return this.servicio.getAll();
    }

    
}