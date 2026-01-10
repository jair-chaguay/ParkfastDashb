import KPISection from "../Dashboard/KPISection";
import HeatmapCard from "../Dashboard/HeatmapCard";
import StatusCard from "../Dashboard/StatusCard";
import LatencyChart from "../Dashboard/LatencyChart";
import RatingsChart from "../Dashboard/RatingsChart";
import PaymentsTable from "../Dashboard/PaymentsTable";
import SupportPanel from "../Dashboard/SupportPanel";
import SearchTimeGauge from "../Dashboard/SearchTimeGauge";
import useParkingData from "../../hooks/useParkingData";

const Dashboard = () => {
  const {dashboard, loading} = useParkingData();
  if(loading){
    return <p className="p-6">Cargando datos...</p>;
  }

  return (
    <div className="space-y-6">

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
        <div className="col-span-12 lg:col-span-4">
          <SearchTimeGauge />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <PaymentsTable />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <SupportPanel />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
