import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class RegistroUsuarioInput {
  // Que necesito del usuario para registrarlo ?
  @Field( () => String, {nullable: false})
  @IsNotEmpty()
  username: string;

  @Field()
  @IsNotEmpty()
  email: string;

  @Field(() => String, {nullable: false})
  @IsNotEmpty()
  @MinLength(6)
  password: string;

}
