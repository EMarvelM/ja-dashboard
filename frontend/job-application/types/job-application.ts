export type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface JobApplication {
  id: string;
  jobTitle: string;
  companyName: string;
  status: ApplicationStatus;
  dateApplied: string;
}

export interface ApplicationStatistics {
  totalApplications: number;
  statusCounts: {
    status: ApplicationStatus;
    count: number;
  }[];
  monthlyCount: {
    month: string;
    count: number;
  }[];
}