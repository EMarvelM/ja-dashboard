import { Injectable } from '@nestjs/common';
import { JobApplication, ApplicationStatus, StatusCount, MonthlyCount } from './models/job-application.model'

@Injectable()
export class JobApplicationService {
    private applications: JobApplication[] = [
        {
            id: "1",
            jobTitle: "Frontend Developer",
            companyName: "TechCorp",
            status: "accepted",
            dateApplied: "2024-10-12"
        },
        {
            id: "2",
            jobTitle: "Backend Developer",
            companyName: "SLX",
            status: "pending",
            dateApplied: "2024-10-10"
        },
        {
            id: "3",
            jobTitle: "Devops Developer",
            companyName: "Bits",
            status: "accepted",
            dateApplied: "2024-10-09"
        },
        {
            id: "4",
            jobTitle: "FullStack Developer",
            companyName: "Unknown",
            status: "rejected",
            dateApplied: "2024-02-10"
        },
    ]

    allApplications() {
        return this.applications
    }


    statisticsApplications() {
        const totalApplications: number = this.applications.length;

        // Get each count per status
        const statusCounts: StatusCount[] = ['accepted', 'pending', 'rejected'].map(status => ({
            status: status as any,
            count: this.applications.filter(application => application.status === status).length
        }))

        // Calculate counts by month
        const monthlyCount: MonthlyCount[] = Array.from(
            this.applications.reduce((acc, app) => {
            const month = app.dateApplied.substring(0, 7);
            acc.set(month, (acc.get(month) || 0) + 1);
            return acc;
            }, new Map<string, number>())
        ).map(([month, count]) => ({ month, count }));
  
        return {
            totalApplication: totalApplications,
            countsByStatus: statusCounts,
            CountByMonth: monthlyCount,
        };
    }
}
