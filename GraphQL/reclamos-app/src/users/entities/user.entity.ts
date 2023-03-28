import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity("Usuarios")
@ObjectType()
export class Usuario {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  // id

  // email

  // password

  // name

  // createdAt

  // updatedAt

  // relacion con sus tickets de reclamos
}
