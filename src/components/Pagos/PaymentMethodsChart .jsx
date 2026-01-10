import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import usePagos from "../../hooks/usePagos";

const PaymentMethodsChart = () => {
  const { paymentMethods, loading } = usePagos();
  if (loading) return null;

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={paymentMethods}>
        <XAxis dataKey="method" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PaymentMethodsChart;
