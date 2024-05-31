import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('user')
@Serialize(UserDto)
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Get('/:userId')
    findOne(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.findById(userId)
    }

    @Get()
    findAll(){
        return this.userService.findAll()
    }

    @Patch('/:userId')
    update(@Param('userId', ParseIntPipe) userId: number, updateUserDto: UpdateUserDto){
        return this.userService.update(userId, updateUserDto)
    }

    @Delete('/:userId')
    delete(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.delete(userId)
    }
}
