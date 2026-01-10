import {
  Bell,
  ChevronDown,
  Menu,
  Plus,
  Search,
  Settings,
  Sun,
  Moon,
} from "lucide-react";

function Header({ onToggleSidebar, darkMode, setDarkMode, page }) {
  return (
    <header className="
      bg-white/80 dark:bg-slate-900/80
      backdrop-blur-xl
      border-b border-slate-200/50 dark:border-slate-700/50
      px-6 py-4
    ">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-black capitalize">
              {page}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Bienvenido de vuelta, Admin
            </p>
          </div>
        </div>

        <div className="hidden md:block flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Buscar..."
              className="
                w-full pl-10 pr-4 py-2.5 rounded-xl
                bg-slate-100 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                focus:ring-2 focus:ring-indigo-500
              "
            />
          </div>
        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>

          <button className="relative p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
            <Bell />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <button className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
            <Settings />
          </button>

          <div className="flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-slate-700">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              className="w-8 h-8 rounded-full ring-2 ring-indigo-500"
            />
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
