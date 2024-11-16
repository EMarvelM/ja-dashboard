export type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface JobApplication {
    id: string;
    jobTitle: string;
    companyName: string;
    status: ApplicationStatus;
    dateApplied: string;
}

export interface StatusCount {
    status: ApplicationStatus;
    count: number;
}

export interface MonthlyCount {
    month: string;
    count: number;
}

export interface ApplicationStatistics {
    totalApplication: number;
    countsByStatus: StatusCount[];
    CountByMonth: MonthlyCount[];

}
