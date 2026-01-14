import { Car, ParkingCircle } from "lucide-react";
import useParking from "../../hooks/useParking";

const ParkingsTable = () => {
  const { parkings, loading } = useParking();
  if (loading) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Estado de Parqueaderos</h3>
          <p className="text-sm text-slate-500">
            Disponibilidad en tiempo real
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <ParkingCircle className="w-4 h-4" />
          {parkings.length} activos
        </div>
      </div>

      {/* TABLA */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3 text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="text-left px-4">Parqueadero</th>
              <th className="text-center">Capacidad</th>
              <th className="text-center">Disponibles</th>
              <th className="text-left">Ocupación</th>
              <th className="text-center">Estado</th>
            </tr>
          </thead>

          <tbody>
            {parkings.map((p) => {
              const available = p.total - p.occupied;
              const percent = Math.round((p.occupied / p.total) * 100);

              const status =
                available === 0
                  ? "Lleno"
                  : available < 10
                  ? "Crítico"
                  : "Disponible";

              return (
                <tr
                  key={p.id}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl
                             hover:scale-[1.01] hover:shadow-md transition-all"
                >
                  {/* PARQUEADERO */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-500/20
                                      flex items-center justify-center">
                        <Car className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-xs text-slate-400">
                          ID {p.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* CAPACIDAD */}
                  <td className="text-center font-semibold">
                    {p.total}
                  </td>

                  {/* DISPONIBLES */}
                  <td className="text-center font-semibold">
                    {available}
                  </td>

                  {/* BARRA OCUPACIÓN */}
                  <td className="pr-6">
                    <div className="flex items-center gap-3">
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all
                            ${
                              percent > 85
                                ? "bg-red-500"
                                : percent > 65
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500 w-10">
                        {percent}%
                      </span>
                    </div>
                  </td>

                  {/* ESTADO */}
                  <td className="text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          status === "Disponible"
                            ? "bg-green-100 text-green-700"
                            : status === "Crítico"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParkingsTable;
