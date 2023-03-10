import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  private readonly servicio: AppService;
  @Get()
  saludo() {
    return this.servicio.getHello();
  }
}
