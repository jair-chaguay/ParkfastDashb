import PaymentsKPIs from "./PaymentsKPIs";
import RevenueChart from "./RevenueChart";
import PaymentMethodsChart from "./PaymentMethodsChart ";
import PaymentStatusChart from "./PaymentStatusChart";
import PaymentsTable from "./PaymentsTable";

const Pagos = () => {
  return (
    <div className="space-y-6">
      <PaymentsKPIs />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Ingresos</h3>
          <RevenueChart />
        </div>

        <div className="col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Estado de Pagos</h3>
          <PaymentStatusChart />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Métodos de Pago</h3>
          <PaymentMethodsChart />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <PaymentsTable />
        </div>
      </div>
    </div>
  );
};

export default Pagos;
