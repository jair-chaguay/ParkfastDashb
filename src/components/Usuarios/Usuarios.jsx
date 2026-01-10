import UserKPIs from "./KPIs";
import ActiveUsersChart from "./Activos";
import UserTypeChart from "./UserType";
import UsersTable from "./TablaUser";

const Usuarios = () => {
  return (
    <div className="space-y-6">
      <UserKPIs />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Usuarios Activos</h3>
          <ActiveUsersChart />
        </div>

        <div className="col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Tipos de Usuario</h3>
          <UserTypeChart />
        </div>
      </div>

      <UsersTable />
    </div>
  );
};

export default Usuarios;
