import { Module } from '@nestjs/common';
import { Pruebas2Controller } from './pruebas-2.controller';
import { Pruebas2Service } from './pruebas-2.service';

@Module({
  controllers: [Pruebas2Controller],
  providers: [Pruebas2Service]
})
export class Pruebas2Module {}
