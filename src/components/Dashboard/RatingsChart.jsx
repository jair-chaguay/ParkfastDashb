import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { rating: "5⭐", count: 120 },
  { rating: "4⭐", count: 80 },
  { rating: "3⭐", count: 25 },
  { rating: "2⭐", count: 10 },
  { rating: "1⭐", count: 5 },
];

const RatingsChart = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 h-full">
      <h3 className="font-semibold mb-4">Distribución de Calificaciones</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="rating" />
          <Tooltip />
          <Bar dataKey="count" fill="#22c55e" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <p className="text-xs text-slate-400 mt-3">
        Click en una barra para ver parqueaderos
      </p>
    </div>
  );
};

export default RatingsChart;
