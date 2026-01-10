import useAnalyticsParkings from "../../hooks/useAnalyticsParkings";

const ParkingsTable = () => {
  const parkings = useAnalyticsParkings();

  if (!Array.isArray(parkings)) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6">
      <h3 className="font-semibold mb-4">
        Rendimiento por Parqueadero
      </h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-slate-500">
            <th>Parqueadero</th>
            <th>Ingresos</th>
            <th>Ocupación</th>
            <th>Tendencia</th>
          </tr>
        </thead>
        <tbody>
          {parkings.map((p, i) => (
            <tr key={i} className="border-t">
              <td className="py-2 font-medium">{p.name}</td>
              <td>${p.revenue}</td>
              <td>{p.occupancy}%</td>
              <td>{p.trend === "up" ? "▲" : "▼"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ParkingsTable;
