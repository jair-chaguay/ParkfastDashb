import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import useUsersData from "../../hooks/useUsersData";

const COLORS = ["#6366f1", "#22c55e", "#f58021ff"];

const UserType = () => {
  const { users, loading } = useUsersData();
  if (loading) return null;

  const data = [
    { name: "Admins", value: users.filter(u => u.role === "admin").length },
    { name: "Operadores", value: users.filter(u => u.role === "operator").length },
    { name: "Conductores", value: users.filter(u => u.role === "driver").length }
  ];

  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={data} dataKey="value" innerRadius={70} outerRadius={100}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default UserType;
