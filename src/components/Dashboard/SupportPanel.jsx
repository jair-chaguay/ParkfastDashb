import useParkingData from "../../hooks/useParkingData";

const SupportPanel = () => {
  const { dashboard, loading } = useParkingData();
  if (loading || !dashboard) return null;

  return (
    <div className="
      bg-white dark:bg-slate-900
      border border-slate-200 dark:border-slate-800
      rounded-2xl p-6
    ">
      <h3 className="font-semibold mb-4">Resumen del Sistema</h3>

      <ul className="space-y-3 text-sm">
        <li className="flex justify-between">
          <span>📊 Transacciones</span>
          <strong>{dashboard.kpis.transactions.toLocaleString()}</strong>
        </li>
        <li className="flex justify-between">
          <span>💰 Ingresos</span>
          <strong>${dashboard.kpis.totalRevenue.toLocaleString()}</strong>
        </li>
        <li className="flex justify-between">
          <span>⏱ Duración Promedio</span>
          <strong>{dashboard.kpis.avgDuration} min</strong>
        </li>
      </ul>
    </div>
  );
};

export default SupportPanel;
