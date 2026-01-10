import { useEffect, useState } from "react";

export default function useParkingData() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../data/dashboardData.json")
      .then(res => res.json())
      .then(json => {
        setDashboard(json);
        setLoading(false);
      });
  }, []);

  return { dashboard, loading };
}