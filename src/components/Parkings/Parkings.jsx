import ParkingsKPIs from "./ParkingsKPIs";
import ParkingMap from "./ParkingMap";
import ParkingStatusPanel from "./ParkingStatusPanel";
import ParkingsTable from "./ParkingsTable";

const Parkings = () => {
  return (
    <div className="space-y-6">
      <ParkingsKPIs />

      {/* MAPA + PANEL */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <ParkingMap />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <ParkingStatusPanel />
        </div>
      </div>

      <ParkingsTable />
    </div>
  );
};

export default Parkings;
