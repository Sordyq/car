import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterUserDto{
    @IsString()
    @IsNotEmpty()
    readonly fullName: string

    @IsEmail()
    @IsNotEmpty()
    readonly email: string

    @IsString()
    @IsNotEmpty()
    readonly username: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string


}