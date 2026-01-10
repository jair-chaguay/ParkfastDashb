import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import usePagos from "../../hooks/usePagos";

const RevenueChart = () => {
  const { revenueByDay, loading } = usePagos();
  if (loading) return null;

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={revenueByDay}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Area dataKey="revenue" strokeWidth={3} fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
