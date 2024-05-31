import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create.report.dto';
import { User } from 'src/user/user.entity';
import { Report } from './report.entity';

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(Report) private repo: Repository<Report>
    ){}

    create(createReportDto: CreateReportDto, user: User){
        const report = this.repo.create(createReportDto)
        report.user = user;
        return this.repo.save(report)
    }
}
