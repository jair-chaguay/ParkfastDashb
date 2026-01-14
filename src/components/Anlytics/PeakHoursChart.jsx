import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { hour: "06:00", cars: 20 },
  { hour: "08:00", cars: 75 },
  { hour: "10:00", cars: 60 },
  { hour: "12:00", cars: 90 },
  { hour: "14:00", cars: 65 },
  { hour: "16:00", cars: 110 },
  { hour: "18:00", cars: 140 },
  { hour: "20:00", cars: 80 },
];

const PeakHoursChart = () => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cars" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PeakHoursChart;
