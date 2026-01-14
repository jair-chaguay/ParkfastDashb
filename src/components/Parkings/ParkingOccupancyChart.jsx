import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import useParkings from "../../hooks/useParking";

const ParkingOccupancyChart = () => {
  const { occupancyByParking, loading } = useParkings();
  if (loading) return null;

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={occupancyByParking}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ParkingOccupancyChart;
