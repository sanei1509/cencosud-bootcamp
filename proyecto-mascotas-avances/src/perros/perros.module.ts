//modulo de perros
import { Module } from '@nestjs/common';
import { PerrosController } from './perros.controller';
import { PerrosService } from './perros.service';

@Module({
    imports: [],
    controllers: [PerrosController],
    providers: [PerrosService],
})

export class PerrosModule {}
