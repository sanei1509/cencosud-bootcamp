import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

@InputType() // Le decimos a GRAPHQL que tipo de datos vamos a recibir y VALIDAMOS
export class CrearReclamoInput{
    @Field(() => String, {description: 'titulo del reclamo', nullable: false})
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @MinLength(5)
    titulo: string;

    @Field(() => String, {description: 'detalle de compra del reclamo', nullable: false})
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(5)
    detalleDeCompra: string;

    @Field(() => String, {description: 'problema del reclamo', nullable: false})
    @IsNotEmpty()
    @IsString()
    @MaxLength(70)
    @MinLength(5)
    problema: string;

}