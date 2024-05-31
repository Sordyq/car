import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { CreateReportDto } from './dto/create.report.dto';
import { User } from 'src/user/user.entity';

@Controller('report')
export class ReportController {
    constructor(private reportService: ReportService){}

    @Post()
    @UseGuards(JwtAuthGuard)
    createPost(@Body() createReportDto: CreateReportDto, user: User){
        return this.reportService.create(createReportDto, user)
    }
}
