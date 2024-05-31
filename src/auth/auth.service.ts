import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs'
import { LoginUserDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private configService: ConfigService
    ){}

    async register(registerUserDto: RegisterUserDto): Promise<any>{
        const existingUser = await this.userService.findByEmail(registerUserDto.email);
        if(existingUser){
            throw new BadRequestException("User already exist")
        }
        const hashPassword = await bcrypt.hash(registerUserDto.password, 10);
        const user = await this.userService.create({...registerUserDto, password: hashPassword})
        const token = this.generateToken(user);
        return user;
    }

    async login(loginUserDto: LoginUserDto): Promise<any>{
        const user = await this.userService.findByEmail(loginUserDto.email)
        if(!user){
            throw new BadRequestException("Invalid email or password")
        }
        const matchPassword = await bcrypt.compare(loginUserDto.password, user.password)
        if(!matchPassword){
            throw new BadRequestException("Invalid email or password")
        }
        const token = this.generateToken(user)
        const payload ={ email: user.email, sub: user.id}
        return {
            user,
            token: this.jwtService.sign(payload)
        }
    }

    private generateToken(user: any): string{
        const payload = {email: user.email, sub: user.id}
        return this.jwtService.sign(payload, {secret: this.configService.get<string>('jwt_secret')})
    }
}
