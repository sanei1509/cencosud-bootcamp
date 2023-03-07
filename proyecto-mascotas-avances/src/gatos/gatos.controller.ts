//importacion de decoradores / verbos a utilizar
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { filter } from 'rxjs';
import { GatoDto } from './dto/gato.dto';
import { GatosService } from './gatos.service';


//controlador de perros
@Controller('gatos')
export class GatosController {
    //inyecto el servicio de pruebas
    constructor(
        // Quiero acceder solo desde mi controlador al servicio
        private servicio: GatosService
        ) {}

    @Get()
    traerTodo(){
        return this.servicio.getAll();
    }

    @Get(':id')
    findOne(@Param("id", ParseIntPipe) id: number){
        return this.servicio.findOne(id);
    }

    @Post()
    crearGato(@Body() gato: GatoDto){
        return this.servicio.crearGato(gato)
    }

    // tarea, crear update y delete
    
}

