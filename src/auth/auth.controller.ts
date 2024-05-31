import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
@Serialize(AuthDto)
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('/register')
    async register(@Body() registerUserDto: RegisterUserDto){
        return this.authService.register(registerUserDto)
    }

    @Post('/login')
    async login(@Body() loginUserDto: LoginUserDto){
        return this.authService.login(loginUserDto)
    }
}
