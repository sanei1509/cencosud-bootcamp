import { Module } from '@nestjs/common';
import { ReclamosResolver } from './reclamos.resolver';

@Module({
  providers: [ReclamosResolver]
})
export class ReclamosModule {}
