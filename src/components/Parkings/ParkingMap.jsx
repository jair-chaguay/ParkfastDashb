import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import useParkings from "../../hooks/useParking";

// ICONOS dinámicos
const getIcon = (status) =>
  new L.Icon({
    iconUrl:
      status === "Disponible"
        ? "https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png"
        : status === "Crítico"
        ? "https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png"
        : "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
    iconSize: [32, 32],
  });

const ParkingMap = () => {
  const { parkings, loading } = useParkings();
  if (loading) return null;

  return (
    <div className="h-[420px] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[-0.180653, -78.467834]}
        zoom={13}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {parkings.map((p) => {
          const available = p.total - p.occupied;
          const status =
            available === 0 ? "Lleno" : available < 10 ? "Crítico" : "Disponible";

          return (
            <Marker
              key={p.id}
              position={[p.lat, p.lng]}
              icon={getIcon(status)}
            >
              <Popup>
                <div className="space-y-1">
                  <h4 className="font-bold">{p.name}</h4>
                  <p>Capacidad: {p.total}</p>
                  <p>Disponibles: {available}</p>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-semibold
                      ${
                        status === "Disponible"
                          ? "bg-green-100 text-green-700"
                          : status === "Crítico"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {status}
                  </span>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default ParkingMap;
