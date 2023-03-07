import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PostDto{
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    image: string;
}