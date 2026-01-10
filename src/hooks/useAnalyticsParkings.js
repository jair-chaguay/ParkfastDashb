import { useEffect, useState } from "react";

const useAnalyticsParkings = () => {
  const [parkings, setParkings] = useState([]); // ✅ array

  useEffect(() => {
    fetch("../../data/analytics_parkings.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setParkings(data.slice(0, 5));
        } else {
          console.error("JSON no es un array:", data);
          setParkings([]);
        }
      })
      .catch((err) => {
        console.error("Error cargando parkings:", err);
        setParkings([]);
      });
  }, []);

  return parkings;
};

export default useAnalyticsParkings;
