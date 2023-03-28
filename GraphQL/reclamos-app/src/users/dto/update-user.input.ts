import { CrearUsuarioInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class ActualizarUsuarioInput extends PartialType(CrearUsuarioInput) {
  @Field(() => Int)
  id: number;
}
