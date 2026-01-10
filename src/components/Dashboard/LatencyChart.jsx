import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import useParkingData from "../../hooks/useParkingData";

const LatencyChart = () => {
  const { dashboard, loading } = useParkingData();
  if (loading || !dashboard) return null;

  return (
    <div className="
      bg-white dark:bg-slate-900
      border border-slate-200 dark:border-slate-800
      rounded-2xl p-6 h-full
    ">
      <h3 className="font-semibold mb-4">Ingresos por Hora</h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={dashboard.charts.revenueByHour}>
          <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LatencyChart;
