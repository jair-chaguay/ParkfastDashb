const StatusRow = ({ label, value, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm font-medium">
      <span className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${color}`} />
        {label}
      </span>
      <span>{value}</span>
    </div>

    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const StatusCard = () => (
  <div className="
    bg-white dark:bg-slate-900
    rounded-2xl p-6
    border border-slate-200 dark:border-slate-800
  ">
    <h3 className="font-semibold mb-6">Estado de Información</h3>

    <div className="space-y-5">
      <StatusRow label="Actualizados" value={85} color="bg-green-500" />
      <StatusRow label="Desactualizados" value={10} color="bg-yellow-500" />
      <StatusRow label="Sin conexión" value={5} color="bg-red-500" />
    </div>
  </div>
);

export default StatusCard;
