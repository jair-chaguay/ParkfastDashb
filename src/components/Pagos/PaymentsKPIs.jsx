import usePagos from "../../hooks/usePagos";

const PaymentsKPIs = () => {
  const { kpis, loading } = usePagos();
  if (loading) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <KPI label="Ingresos Hoy" value={'$40'} />
      <KPI label="Ingresos del Mes" value={`$${kpis.totalRevenue.toFixed(2)}`} />
      <KPI label="Ticket Promedio" value={`$${kpis.avgTicket.toFixed(2)}`} />
      <KPI label="Pagos Fallidos" value={kpis.failed} />
    </div>
  );
};

const KPI = ({ label, value }) => (
  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6">
    <p className="text-sm text-slate-500">{label}</p>
    <h2 className="text-3xl font-black mt-2">{value}</h2>
  </div>
);

export default PaymentsKPIs;
