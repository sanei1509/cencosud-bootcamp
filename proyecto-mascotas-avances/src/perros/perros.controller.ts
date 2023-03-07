//importacion de decoradores / verbos a utilizar
import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post} from '@nestjs/common';
import { PerrosService } from './perros.service';
import { PerroDto } from './dto/perro.dto';

//controlador de perros
@Controller('perros')
export class PerrosController {
  //inyeccion del servicio de los perros
  constructor(
    private servicio: PerrosService
  ){}

    @Get()
    traerTodo(){
      return this.servicio.getAll();
    }

    @Get(':id')
    findOne(@Param("id", ParseIntPipe)id: number) {
      return this.servicio.findOne(id);
    }

    @Post()
    create(@Body() perro: PerroDto){
      return this.servicio.crearPerro(perro) 
    }
}