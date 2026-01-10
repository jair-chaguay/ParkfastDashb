import AnalyticsKPIs from "./AnalyticsKPIs";
import ParkingsTable from "./ParkingsTable";

const Analytics = () => {
  return (
    <div className="space-y-8">
      <AnalyticsKPIs />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6">
          📈 Gráfica ingresos
        </div>

        <div className="bg-white rounded-2xl p-6">
          ⏱️ Horas pico
        </div>
      </div>

      <ParkingsTable />
    </div>
  );
};

export default Analytics;
