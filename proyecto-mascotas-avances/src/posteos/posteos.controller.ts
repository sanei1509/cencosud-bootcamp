//Controlador de posteos

import { Controller, Get } from "@nestjs/common";
import { PostDto } from "./dto/posteo.dto";
import { PosteosService } from "./posteos.service";

// Controlador de posteos
@Controller('posteos')
export class PosteosController {   
    //le damos accesos controlador al servicio
    constructor(
        private servicio: PosteosService
    ){}


    @Get()
    traerTodo(): PostDto[] {
        return this.servicio.getAll();
    }
}