import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsEmail, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("usuarios")
@ObjectType()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  @IsUUID()
  id: string;

  // email
  @Field(() => String)
  @Column({unique: true})
  @IsEmail()
  email: string;

  // password
  // @Field(() => String) // no se debe devolver el password
  @Column()
  password: string;

  // roles // USER, ADMIN , arreglo de strings
  @Field(() => [String])
  @Column({
    type: 'text',
    array: true,
    default: ['USER']
  })
  roles: string[];

  // estado // ACTIVE
  @Field(() => String)
  @Column({
    type: 'boolean',
    default: true
  })
  active: boolean;

  // relacion con sus tickets de reclamos
  // @Field(() => [Reclamo])
  // @OneToMany(() => Reclamo, (reclamo) => reclamo.usuario)
}
