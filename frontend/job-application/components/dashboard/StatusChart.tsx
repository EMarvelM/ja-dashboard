'use client';

import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ApplicationStatistics } from '@/types/job-application';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface StatusChartProps {
  statistics: ApplicationStatistics | null;
}

const StatusChart: FC<StatusChartProps> = ({ statistics }) => {
  const chartData = {
    labels: statistics?.countsByStatus.map((s) => s.status) || [],
    datasets: [
      {
        label: 'Applications by Status',
        data: statistics?.countsByStatus.map((s) => s.count) || [],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Application Statistics</h2>
      <div className="h-[300px]">
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => `Count: ${context.raw}`,
                },
              },
            },
          }}
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-2xl font-bold">
          Total Applications: {statistics?.totalApplication || 0}
        </p>
      </div>
    </div>
  );
};

export default StatusChart;
