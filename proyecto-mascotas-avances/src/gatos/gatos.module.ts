//modulo de perros
import { Module } from '@nestjs/common';
import { GatosController } from './gatos.controller';
import { GatoRepository } from './repository/gatos.repository';
import { GatosService } from './gatos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gato } from './entity/gato.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Gato])],
    controllers: [ GatosController],
    //incluimos el repositorio en los providers
    providers: [GatosService, GatoRepository],
})

export class GatosModule {}
