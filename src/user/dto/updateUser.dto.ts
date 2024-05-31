import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserDto{
    @IsString()
    @IsOptional()
    readonly fullName?: string

    @IsEmail()
    @IsOptional()
    readonly email?: string

    @IsString()
    @IsOptional()
    readonly username?: string

    @IsString()
    @IsOptional()
    readonly password?: string
}