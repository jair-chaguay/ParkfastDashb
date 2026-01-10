import { useEffect, useState } from "react";

// Singleton para compartir estado entre todas las instancias del hook
let sharedState = {
  dashboard: null,
  loading: true,
  subscribers: new Set(),
};

let fetchPromise = null;

// Función para notificar a todos los suscriptores
function notifySubscribers() {
  sharedState.subscribers.forEach((setState) => {
    setState({
      dashboard: sharedState.dashboard,
      loading: sharedState.loading,
    });
  });
}

// Función para cargar los datos (solo una vez)
function loadDashboardData() {
  if (fetchPromise) {
    return fetchPromise;
  }

  fetchPromise = fetch("/ParkfastDashb/data/dashboardData.json")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      sharedState.dashboard = data;
      sharedState.loading = false;
      notifySubscribers();
    })
    .catch((err) => {
      console.error("Error cargando dashboardData:", err);
      sharedState.loading = false;
      notifySubscribers();
    });

  return fetchPromise;
}

export default function useParkingData() {
  const [state, setState] = useState({
    dashboard: sharedState.dashboard,
    loading: sharedState.loading,
  });

  useEffect(() => {
    // Suscribirse a las actualizaciones
    sharedState.subscribers.add(setState);

    // Si ya hay datos cargados, actualizar el estado inmediatamente
    if (sharedState.dashboard !== null || !sharedState.loading) {
      setState({
        dashboard: sharedState.dashboard,
        loading: sharedState.loading,
      });
    }

    // Cargar datos si aún no se han cargado
    if (sharedState.loading && fetchPromise === null) {
      loadDashboardData();
    }

    // Limpiar suscripción al desmontar
    return () => {
      sharedState.subscribers.delete(setState);
    };
  }, []);

  return { dashboard: state.dashboard, loading: state.loading };
}
