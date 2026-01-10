const ProgressBar = ({ label, value, color }) => {
  const COLORS = {
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-semibold">{value}</span>
      </div>

      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
        <div
          className={`h-2 rounded-full ${COLORS[color]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
