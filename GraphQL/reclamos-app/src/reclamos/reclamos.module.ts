import { Module } from '@nestjs/common';
import { ReclamosResolver } from './reclamos.resolver';
import { ReclamosService } from './reclamos.service';

@Module({
  providers: [ReclamosResolver, ReclamosService]
})
export class ReclamosModule {}
