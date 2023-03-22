import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

@InputType()
export class CrearReclamoInput{
    @Field(() => String, {description: 'titulo del reclamo', nullable: false})
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(5)
    titulo: string;

    @Field(() => String, {description: 'detalle de compra del reclamo', nullable: false})
    @MaxLength(50)
    @MinLength(5)
    detalleDeCompra: string;

    @Field(() => String, {description: 'problema del reclamo', nullable: false})
    @MaxLength(50)
    @MinLength(5)
    problema: string;

}