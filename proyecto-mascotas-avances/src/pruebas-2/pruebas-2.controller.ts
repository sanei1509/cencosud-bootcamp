import { Controller, Get } from '@nestjs/common';

@Controller('pruebas-2')
export class Pruebas2Controller {
    @Get()
    getHello(): string {
        return 'Hello World!';
    }

}
