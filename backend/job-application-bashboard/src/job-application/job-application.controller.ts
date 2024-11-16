import { Controller, Get } from '@nestjs/common';
import { JobApplication, ApplicationStatistics } from './models/job-application.model';
import { JobApplicationService } from './job-application.service';

@Controller('applications')
export class JobApplicationController {
    constructor(private readonly jobApplicationService: JobApplicationService) {}

    @Get()
    jobApplications(): JobApplication[]{
        return this.jobApplicationService.allApplications();
    }

    @Get('/stats')
    statisticsApplications(): ApplicationStatistics {
        return this.jobApplicationService.statisticsApplications();
    }
}
