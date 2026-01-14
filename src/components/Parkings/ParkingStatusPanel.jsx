import useParkings from "../../hooks/useParking";

const ParkingStatusPanel = () => {
  const { parkings, loading } = useParkings();
  if (loading) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 h-full">
      <h3 className="font-semibold mb-4">Estado en Tiempo Real</h3>

      <div className="space-y-4">
        {parkings.map(p => {
          const available = p.total - p.occupied;
          const percent = Math.round((p.occupied / p.total) * 100);

          return (
            <div key={p.id}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{p.name}</span>
                <span className="text-slate-500">{percent}%</span>
              </div>

              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParkingStatusPanel;
