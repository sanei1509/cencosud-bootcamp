//modulo de perros
import { Module } from '@nestjs/common';
import { GatosController } from './gatos.controller';
import { GatoRepository } from './repository/gatos.repository';
import { GatosService } from './gatos.service';

@Module({
    imports: [],
    controllers: [ GatosController],
    //incluimos el repositorio en los providers
    providers: [GatosService, GatoRepository],
})

export class GatosModule {}
