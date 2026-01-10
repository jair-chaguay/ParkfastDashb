import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  MessageSquare,
  Zap
} from "lucide-react";

const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Overview" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "users", icon: Users, label: "Usuarios" },
  { id: "payments", icon: CreditCard, label: "Pagos" },
];

const Sidebar = ({ collapsed, currentPage, onPageChange }) => {
  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-72"}
        transition-all duration-300
        bg-white dark:bg-slate-900
        border-r border-slate-200 dark:border-slate-800
        flex flex-col
      `}
    >
      <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
          <Zap className="text-white w-5 h-5" />
        </div>

        {!collapsed && (
          <div>
            <h1 className="font-bold text-lg leading-none">PARKFAST</h1>
            <span className="text-xs text-slate-400">Analytics</span>
          </div>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const active = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`
                group w-full flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all
                ${active
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }
              `}
            >
              <item.icon
                className={`w-5 h-5 ${
                  active ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                }`}
              />
              {!collapsed && (
                <span className="font-medium text-sm">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            className="w-9 h-9 rounded-full ring-2 ring-indigo-500"
          />
          {!collapsed && (
            <div className="leading-tight">
              <p className="text-sm font-medium">Administrador</p>
              <p className="text-xs text-slate-400">admin@parkfast</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
