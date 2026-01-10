import { Search, X } from "lucide-react";
import { useState } from "react";

const FloatingSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-xl z-50"
      >
        <Search />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl w-full max-w-lg">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Búsqueda Global</h3>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <input
              className="w-full p-3 border rounded-xl"
              placeholder="Buscar parqueadero, usuario, zona..."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingSearch;
