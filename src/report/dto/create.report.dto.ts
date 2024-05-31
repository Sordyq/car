import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateReportDto{

    @IsNumber()
    @Min(0)
    @Max(1000000)
    @IsNotEmpty()
    price: number

    @IsString()
    @IsNotEmpty()
    make: string

    @IsString()
    @IsNotEmpty()
    model: string

    @IsNumber()
    @IsNotEmpty()
    @Min(1930)
    @Max(2050)
    year: number

    @IsLongitude()
    @IsNotEmpty()
    lng: number

    @IsLatitude()
    @IsNotEmpty()
    lat: number

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    @Max(1000000)
    mileage: number
}