import { Report } from "src/report/report.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(() => Report, (report) => report.user)
    reports: Report[]

}