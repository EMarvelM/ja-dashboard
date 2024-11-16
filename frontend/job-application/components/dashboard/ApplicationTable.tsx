'use client';

import { FC } from 'react';
import { ApplicationStatus, JobApplication } from '@/types/job-application';

interface ApplicationTableProps {
  applications: JobApplication[];
  statusFilter: ApplicationStatus | 'all';
  sortOrder: 'asc' | 'desc';
  onFilterChange: (status: ApplicationStatus | 'all') => void;
  onSortOrderChange: () => void;
}

const ApplicationTable: FC<ApplicationTableProps> = ({
  applications,
  statusFilter,
  sortOrder,
  onFilterChange,
  onSortOrderChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Job Applications</h2>

      <div className="flex gap-4 mb-4">
        <select
          className="border rounded px-3 py-2"
          value={statusFilter}
          onChange={(e) => onFilterChange(e.target.value as ApplicationStatus | 'all')}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
        <button
          className="border rounded px-3 py-2 hover:bg-gray-50"
          onClick={onSortOrderChange}
        >
          Sort Date {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">Job Title</th>
              <th className="text-left p-3">Company</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Date Applied</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t hover:bg-blue-50 hover:cursor-pointer">
                <td className="p-3">{app.jobTitle}</td>
                <td className="p-3">{app.companyName}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      app.status === 'accepted'
                        ? 'bg-green-100 text-green-800'
                        : app.status === 'rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="p-3">
                  {new Date(app.dateApplied).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationTable;

