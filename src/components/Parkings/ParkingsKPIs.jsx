import useParkings from "../../hooks/useParking";

const ParkingsKPIs = () => {
  const { kpis, loading } = useParkings();
  if (loading) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <KPI label="Parqueaderos" value={kpis.totalParkings} />
      <KPI label="Espacios Totales" value={kpis.totalSpots} />
      <KPI label="Disponibles" value={kpis.availableSpots} />
      <KPI label="Ocupación" value={`${kpis.occupancyRate}%`} />
    </div>
  );
};

const KPI = ({ label, value }) => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6">
    <p className="text-sm text-slate-500">{label}</p>
    <h2 className="text-3xl font-black mt-2">{value}</h2>
  </div>
);

export default ParkingsKPIs;
