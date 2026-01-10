import { useEffect, useState } from "react";
import DashboardLayout from "./components/Layout/DashboardLayout";
import Dashboard from "./components/pages/Dashboard";
import FloatingSearch from "./components/Layout/FloatingSearch";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <DashboardLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Dashboard />
      </DashboardLayout>

      <FloatingSearch />
    </>
  );
}

export default App;
