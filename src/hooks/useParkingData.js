import { useEffect, useState } from "react";

export default function useParkingData() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);


    useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}data/dashboardData.json`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      setDashboard(data);
      setLoading(false);
    })
    .catch(err => console.error("Error cargando dashboardData:", err));
}, []);


  return { dashboard, loading };
}
