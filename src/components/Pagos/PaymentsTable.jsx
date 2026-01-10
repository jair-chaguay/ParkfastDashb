import { useState } from "react";
import usePagos from "../../hooks/usePagos";

const PAGE_SIZE = 6;

const PaymentsTable = () => {
  const { payments, loading } = usePagos();
  const [page, setPage] = useState(1);

  if (loading) return null;

  const totalPages = Math.ceil(payments.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const currentPayments = payments.slice(start, start + PAGE_SIZE);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Transacciones</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-slate-500 border-b">
            <th>ID</th>
            <th>Usuario</th>
            <th>Monto</th>
            <th>Método</th>
            <th>Estado</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          {currentPayments.map((p) => (
            <tr
              key={p.id}
              className="border-b last:border-none hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <td className="py-3 font-mono">{p.id}</td>
              <td>{p.user}</td>
              <td className="font-semibold">
                ${p.amount.toFixed(2)}
              </td>
              <td>{p.method}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium
                    ${
                      p.status === "Completado"
                        ? "bg-green-100 text-green-700"
                        : p.status === "Pendiente"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {p.status}
                </span>
              </td>
              <td>{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINACIÓN */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-slate-500">
          Página {page} de {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 disabled:opacity-40"
          >
            Anterior
          </button>

          <button
            onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 disabled:opacity-40"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTable;
