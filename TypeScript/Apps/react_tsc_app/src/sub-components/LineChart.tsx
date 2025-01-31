// components/LineChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

interface LineChartProps {
  data: ChartData[];
  color?: string;
}

const CustomLineChart: React.FC<LineChartProps> = ({ 
  data = [],
  color = '#6366f1' // Default to Tailwind's indigo-500
}) => {
  // If no data, show loading state
  if (!data.length) {
    return (
      <div className="h-80 flex items-center justify-center text-gray-500">
        Loading chart data...
      </div>
    );
  }

  return (
    <div className="h-80">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold dark:text-white">Revenue Overview</h3>
        {/* <Tooltip
          content={
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
              <p className="text-sm dark:text-white">Monthly revenue trends</p>
            </div>
          }
        >
          <InformationCircleIcon className="h-5 w-5 text-gray-400 cursor-help" />
        </Tooltip> */}
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#e2e8f0" 
            className="dark:stroke-gray-600"
          />
          <XAxis
            dataKey="name"
            stroke="#64748b"
            className="dark:stroke-gray-400"
            tick={{ fill: '#64748b' }}
            tickLine={{ stroke: '#64748b' }}
          />
          <YAxis
            stroke="#64748b"
            className="dark:stroke-gray-400"
            tick={{ fill: '#64748b' }}
            tickLine={{ stroke: '#64748b' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              color: '#1e293b',
            }}
            itemStyle={{ color: '#1e293b' }}
            labelStyle={{ fontWeight: '600' }}
            // className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2 }}
            activeDot={{ r: 8, fill: color }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;