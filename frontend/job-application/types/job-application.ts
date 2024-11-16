export type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface JobApplication {
  id: string;
  jobTitle: string;
  companyName: string;
  status: ApplicationStatus;
  dateApplied: string;
}

export interface ApplicationStatistics {
  totalApplication: number;
  countsByStatus: {
    status: ApplicationStatus;
    count: number;
  }[];
  CountByMonth: {
    month: string;
    count: number;
  }[];
}