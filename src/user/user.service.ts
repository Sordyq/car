import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    // async create(createUserDto: CreateUserDto): Promise<User>{
    //     await this.userRepository.save(createUserDto);
    //     return (createUserDto)
    // }
    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(createUserDto);
        await this.userRepository.save(newUser);
        return newUser;
    }

    async findByEmail(email: string): Promise<User>{
        return this.userRepository.findOne({where: {email}});
    }

    async findById(id: number){
        return this.userRepository.findOne({where: {id}});
    }

    async findAll(): Promise<User[]>{
        return this.userRepository.find()
    }

    async update(id: number, updatedUser: Partial<User>): Promise<User>{
        await this.userRepository.update(id, updatedUser);
        return this.userRepository.findOne({where: {id}})
    }

    async delete(id: number): Promise<void>{
        await this.userRepository.delete(id)
    }
}
