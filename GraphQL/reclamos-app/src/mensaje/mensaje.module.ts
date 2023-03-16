import { Module } from '@nestjs/common';
import { MensajeResolver } from './mensaje.resolver';

@Module({
  // Resolver va a ser como nuestro controlador de graphql
  providers: [MensajeResolver]
})
export class MensajeModule {}
