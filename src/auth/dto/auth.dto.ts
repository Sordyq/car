import { Expose } from "class-transformer"

export class AuthDto {
    @Expose()
    id: number

    @Expose()
    fullName: string

    @Expose()
    email: string

    @Expose()
    username: string

}