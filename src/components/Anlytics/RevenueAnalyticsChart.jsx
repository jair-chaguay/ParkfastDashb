import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Lun", revenue: 120 },
  { day: "Mar", revenue: 180 },
  { day: "Mié", revenue: 150 },
  { day: "Jue", revenue: 220 },
  { day: "Vie", revenue: 310 },
  { day: "Sáb", revenue: 260 },
  { day: "Dom", revenue: 190 },
];

const RevenueAnalyticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Area
          dataKey="revenue"
          strokeWidth={3}
          fillOpacity={0.25}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueAnalyticsChart;
