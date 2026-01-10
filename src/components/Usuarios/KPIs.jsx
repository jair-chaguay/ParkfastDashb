import useUsersData from "../../hooks/useUsersData";

const KPIs = () => {
  const { users, loading } = useUsersData();
  if (loading) return null;

  const total = users.length;
  const active = users.filter(u => u.status === "active").length;
  const blocked = users.filter(u => u.status === "blocked").length;
  const inactive = users.filter(u => u.status === "inactive").length;

  const stats = [
    { label: "Usuarios Totales", value: total },
    { label: "Activos", value: active },
    { label: "Inactivos", value: inactive },
    { label: "Bloqueados", value: blocked }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map(s => (
        <div key={s.label} className="bg-white dark:bg-slate-900 rounded-2xl p-6">
          <p className="text-sm text-slate-500">{s.label}</p>
          <h2 className="text-3xl font-black mt-2">{s.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default KPIs;
