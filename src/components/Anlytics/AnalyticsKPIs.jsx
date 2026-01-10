import useAnalyticsKPIs from "../../hooks/useAnalyticsKPIs";

const AnalyticsKPIs = () => {
  const kpis = useAnalyticsKPIs();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {kpis.map((kpi, i) => {
        const Icon = kpi.icon;

        if (!Icon) return null; // 🛡️ defensa

        return (
          <div
            key={i}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-slate-500">{kpi.title}</p>
                <h2 className="text-3xl font-bold">{kpi.value}</h2>
              </div>

              <div className="p-3 bg-indigo-100 rounded-xl">
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>
            </div>

            <p
              className={`mt-4 text-sm ${
                kpi.positive
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {kpi.change} vs periodo anterior
            </p>
          </div>
        );
      })}
    </div>
  );
};


export default AnalyticsKPIs;
