import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class UserDto{
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    fullname: string;

    //characteres requeridos en el username

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    username: string;
}