import { Clock } from "lucide-react";
import PeakHoursChart from "./PeakHoursChart";


const PeakHoursCard = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">Horas Pico</h3>
          <p className="text-sm text-slate-500">
            Flujo vehicular diario
          </p>
        </div>

        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
          <Clock className="w-5 h-5 text-indigo-600" />
        </div>
      </div>

      <PeakHoursChart />
    </div>
  );
};

export default PeakHoursCard;
