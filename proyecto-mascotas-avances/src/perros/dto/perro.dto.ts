// Validacions al moment de crear un gato

import { IsNumber, IsPositive, IsString } from "class-validator";

export class PerroDto {
    @IsNumber()
    @IsPositive()
    id: number;

    @IsString()
    name: string;
}