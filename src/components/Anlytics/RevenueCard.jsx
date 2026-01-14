import { TrendingUp } from "lucide-react";
import RevenueAnalyticsChart from "./RevenueAnalyticsChart";

const RevenueCard = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">Ingresos</h3>
          <p className="text-sm text-slate-500">
            Últimos 7 días
          </p>
        </div>

        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-green-600" />
        </div>
      </div>

      <RevenueAnalyticsChart />
    </div>
  );
};

export default RevenueCard;
