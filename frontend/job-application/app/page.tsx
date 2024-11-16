'use client';

import { useEffect, useState } from 'react';
import { ApplicationStatus, JobApplication, ApplicationStatistics } from '@/types/job-application';
import StatusChart from '@/components/dashboard/StatusChart';
import ApplicationTable from '@/components/dashboard/ApplicationTable';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export default function Home() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [statistics, setStatistics] = useState<ApplicationStatistics | null>(null);
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [appsRes, statsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/applications`),
          fetch(`${API_BASE_URL}/applications/stats`),
        ]);

        const [apps, stats] = await Promise.all([appsRes.json(), statsRes.json()]);
        setApplications(apps);
        setStatistics(stats);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  const filteredApplications = applications
    .filter((app) => statusFilter === 'all' || app.status === statusFilter)
    .sort((a, b) => {
      const dateA = new Date(a.dateApplied).getTime();
      const dateB = new Date(b.dateApplied).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Job Application Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <StatusChart statistics={statistics} />
        <ApplicationTable
          applications={filteredApplications}
          statusFilter={statusFilter}
          sortOrder={sortOrder}
          onFilterChange={setStatusFilter}
          onSortOrderChange={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        />
      </div>
    </main>
  );
}
