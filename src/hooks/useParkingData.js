import { useEffect, useState } from "react";

export default function useParkingData() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/dashboardData.json`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then(json => {
        setDashboard(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando dashboardData:", err);
        setLoading(false);
      });
  }, []);

  return { dashboard, loading };
}
