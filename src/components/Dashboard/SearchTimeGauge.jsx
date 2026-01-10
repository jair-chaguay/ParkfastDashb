import { PieChart, Pie, Cell } from "recharts";

const value = 8;
const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const SearchTimeGauge = () => {
  const data = [
    { value: Math.min(value, 5) },
    { value: value > 5 ? Math.min(value - 5, 5) : 0 },
    { value: value > 10 ? value - 10 : 0 },
  ];

  return (
    <div className="
      bg-white dark:bg-slate-900
      border border-slate-200 dark:border-slate-800
      rounded-2xl p-6
      flex flex-col items-center
    ">
      <h3 className="font-semibold mb-4">
        Tiempo Promedio de Búsqueda
      </h3>

      <PieChart width={220} height={140}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={90}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
      </PieChart>

      <p className={`text-2xl font-bold mt-2 ${
        value > 10 ? "text-red-500" : "text-green-500"
      }`}>
        {value} min
      </p>
    </div>
  );
};

export default SearchTimeGauge;
