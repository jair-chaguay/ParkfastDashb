import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const activeUsersData = [
  { day: "Lun", users: 120 },
  { day: "Mar", users: 180 },
  { day: "Mié", users: 160 },
  { day: "Jue", users: 210 },
  { day: "Vie", users: 280 },
  { day: "Sáb", users: 320 },
  { day: "Dom", users: 260 },
];

const Activos = () => (
  <ResponsiveContainer width="100%" height={260}>
    <LineChart data={activeUsersData}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="users"
        strokeWidth={3}
        dot={{ r: 4 }}
        isAnimationActive
        animationDuration={1200}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Activos;
