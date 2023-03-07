//importacion de decoradores / verbos a utilizar
import { Controller, Get} from '@nestjs/common';

//controlador de usuarios
@Controller('usuarios')
export class UsuariosController {
    @Get()
    traerTodo(): string {
        return "Hola traje todos los usuarios";
    }
}