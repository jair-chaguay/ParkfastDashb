import KPISection from "../Dashboard/KPISection";
import HeatmapCard from "../Dashboard/HeatmapCard";
import StatusCard from "../Dashboard/StatusCard";
import LatencyChart from "../Dashboard/LatencyChart";
import RatingsChart from "../Dashboard/RatingsChart";
import PaymentsTable from "../Dashboard/PaymentsTable";
import SupportPanel from "../Dashboard/SupportPanel";
import userParkingData from "../../hooks/useParkingData";

const Dashboard = () => {
  const {data, loading} = userParkingData();
  if(loading){
    return <p className="p-6">Cargando datos...</p>;
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">

      <KPISection />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <HeatmapCard />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <StatusCard />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <LatencyChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <RatingsChart />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <PaymentsTable />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <SupportPanel />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
