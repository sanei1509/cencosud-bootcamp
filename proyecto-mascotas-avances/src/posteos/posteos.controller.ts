//Controlador de posteos

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
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

    @Get(':id')
    findOne(@Param("id", ParseIntPipe) id: number){
        return this.servicio.findOne(id);
    }

    @Post()
    crearGato(@Body() gato: PostDto){
        return this.servicio.crearPosteo(gato)
    }

    // tarea, crear update y delete
    @Patch(':id')
    update(@Param("id", ParseIntPipe) id: number, @Body() gato: PostDto){
        return this.servicio.update(id, gato)
    }

    @Delete(':id')
    deleteOne(@Param("id", ParseIntPipe) id: number){
        return this.servicio.deleteOne(id)
    }
}