import KPICard from "./KPICard";
import useParkingData from "../../hooks/useParkingData";

const KPISection = () => {
  const { dashboard, loading } = useParkingData();
  if (loading || !dashboard) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" />
        ))}
      </section>
    );
  }

  const { totalRevenue, avgDuration, transactions } = dashboard.kpis;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <KPICard
        title="Ingresos Totales"
        value={`$ ${totalRevenue.toLocaleString()}`}
        subtitle="Acumulado"
      />
      <KPICard
        title="Duración Promedio"
        value={`${avgDuration} min`}
        subtitle="Por sesión"
      />
      <KPICard
        title="Transacciones"
        value={transactions.toLocaleString()}
        subtitle="Histórico"
      />
      <KPICard
        title="Parqueaderos Activos"
        value="85 / 100"
        subtitle="Cobertura"
      />
    </section>
  );
};

export default KPISection;
