import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import useParkings from "../../hooks/useParking";

const COLORS = ["#22c55e", "#ef4444"];

const ParkingAvailabilityChart = () => {
  const { availabilityStatus, loading } = useParkings();
  if (loading) return null;

  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={availabilityStatus} dataKey="value" innerRadius={70} outerRadius={100}>
          {availabilityStatus.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ParkingAvailabilityChart;
