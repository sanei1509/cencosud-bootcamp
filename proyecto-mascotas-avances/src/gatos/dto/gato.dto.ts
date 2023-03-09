// Validacions al moment de crear un gato

import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class GatoDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    id: number;

    @IsString()
    name: string;

    // @IsOptional()
    // @IsNumber()
    // usuario: number;
}