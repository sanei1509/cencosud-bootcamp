import { IsNotEmpty, IsNumber } from "class-validator";

export class PostDto{
    @IsNumber()
    @IsNotEmpty()
    id: number;

    author: string;
    description: string;
    image: string;
}