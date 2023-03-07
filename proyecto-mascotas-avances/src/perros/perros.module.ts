//modulo de perros
import { Module } from '@nestjs/common';
import { PerrosController } from './perros.controller';
import { PerrosService } from './perros.service';
import { PerroRepository } from './repository/perros.repository';

@Module({
    imports: [],
    controllers: [PerrosController],
    providers: [PerrosService, PerroRepository],
})

export class PerrosModule {}
