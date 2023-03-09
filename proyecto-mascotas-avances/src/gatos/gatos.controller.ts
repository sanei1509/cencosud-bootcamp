//importacion de decoradores / verbos a utilizar
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { filter } from 'rxjs';
import { GatoDto } from './dto/gato.dto';
import { UpdateGatoDto } from './dto/updateGato.dto';
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
    traerTodo(): Promise<GatoDto[]>{
        return this.servicio.getAll();
    }

    @Get(':id')
    findOne(@Param("id", ParseIntPipe) id: number): Promise<GatoDto>{
        return this.servicio.findOne(id);
    }

    @Post()
    crearGato(@Body() gato: GatoDto){
        return this.servicio.crearGato(gato)
    }

    // tarea, crear update y delete
    @Patch(':id')
    update(@Param("id", ParseIntPipe) id: number, @Body() gato: GatoDto){
        return this.servicio.update(id, gato)
    }

    @Delete(':id')
    deleteOne(@Param("id", ParseIntPipe) id: number){
        return this.servicio.deleteOne(id)
    }

}

