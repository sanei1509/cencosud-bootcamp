import { Module } from '@nestjs/common';
import { ReclamosResolver } from './reclamos.resolver';
import { ReclamosService } from './reclamos.service';

import { Reclamo } from './entity/reclamo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ReclamosResolver, ReclamosService],
  imports: [
    TypeOrmModule.forFeature([Reclamo])
  ]
})
export class ReclamosModule {}
