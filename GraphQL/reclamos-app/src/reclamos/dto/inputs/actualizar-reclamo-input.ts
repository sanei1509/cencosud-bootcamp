import {Field ,InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, MinLength } from "class-validator";

@InputType()
export class ActualizarReclamoInput{
    // Que es lo que requiere tener el input para actualizar un reclamo?
    @Field(() => Number, {description: 'id del reclamo', nullable: false})
    @IsInt()
    id: number;


    @Field(() => String, {description: 'titulo del reclamo', nullable: true})
    @IsString()
    @MinLength(5)
    @MaxLength(30)
    @IsNotEmpty()
    @IsOptional()
    titulo: string;

    @Field(() => String, {description: 'detalle de compra del reclamo', nullable: true})
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    @IsNotEmpty()
    @IsOptional()
    detalleDeCompra: string;

    
    @Field(() => String, {description: 'problema del reclamo', nullable: true})
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    @IsOptional()
    problema: string;
}