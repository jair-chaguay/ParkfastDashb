import { useState } from "react";
import useUsersData from "../../hooks/useUsersData";

const ITEMS_PER_PAGE = 10;

const TablaUser = () => {
  const { users, loading } = useUsersData();
  const [page, setPage] = useState(1);

  if (loading) return null;

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const visibleUsers = users.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Usuarios</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500 border-b">
            <th className="pb-3">Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Último Login</th>
          </tr>
        </thead>

        <tbody>
          {visibleUsers.map(u => (
            <tr
              key={u.id}
              className="border-b last:border-none hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <td className="py-3 font-medium">{u.name}</td>
              <td>{u.email}</td>
              <td className="capitalize">{u.role}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium
                    ${
                      u.status === "active"
                        ? "bg-green-100 text-green-700"
                        : u.status === "inactive"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {u.status}
                </span>
              </td>
              <td className="text-xs text-slate-500">
                {new Date(u.lastLogin).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <span className="text-slate-500">
          Página {page} de {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="px-3 py-1 rounded-lg border disabled:opacity-40"
          >
            Anterior
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="px-3 py-1 rounded-lg border disabled:opacity-40"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablaUser;
