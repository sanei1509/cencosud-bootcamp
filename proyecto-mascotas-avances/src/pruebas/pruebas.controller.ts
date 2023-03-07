import { Controller, Get } from '@nestjs/common';

@Controller('pruebas')
export class PruebasController {
    @Get()
    traerTodo(){
        return "Traigo todos los datos"
    }
}
