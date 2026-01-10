import { ArrowUpRight } from "lucide-react";

const KpiCard = ({ title, value, subtitle, icon, accent }) => {
  return (
    <div className="
      relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900
      border border-slate-200 dark:border-slate-800
      p-6 shadow-sm hover:shadow-md transition
    ">
      <div className={`absolute top-0 right-0 w-24 h-24 opacity-10 ${accent}`} />

      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">{title}</span>
        <div className={`p-2 rounded-lg ${accent} text-white`}>
          {icon}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-3xl font-bold tracking-tight dark:text-white">
          {value}
        </p>
        <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
          <ArrowUpRight size={14} className="text-green-500" />
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default KpiCard;
