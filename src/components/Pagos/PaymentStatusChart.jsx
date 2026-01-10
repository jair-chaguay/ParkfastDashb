import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import usePagos from "../../hooks/usePagos";

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

const PaymentStatusChart = () => {
  const { paymentStatus, loading } = usePagos();
  if (loading) return null;

  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={paymentStatus} dataKey="value" innerRadius={70} outerRadius={100}>
          {paymentStatus.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PaymentStatusChart;
