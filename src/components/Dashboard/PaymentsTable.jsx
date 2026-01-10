import useParkingData from "../../hooks/useParkingData";

const PaymentsTable = () => {
  const { dashboard, loading } = useParkingData();
  if (loading || !dashboard) return null;

  return (
    <div className="
      bg-white dark:bg-slate-900
      border border-slate-200 dark:border-slate-800
      rounded-2xl p-6
    ">
      <h3 className="font-semibold mb-4">Ingresos por Método de Pago</h3>

      <table className="w-full text-sm">
        <tbody className="divide-y dark:divide-slate-800">
          {dashboard.charts.paymentMethods.map((p, i) => (
            <tr key={i} className="h-10">
              <td className="text-slate-600 dark:text-slate-300">
                {p.method}
              </td>
              <td className="text-right font-semibold text-indigo-600">
                ${p.value.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
