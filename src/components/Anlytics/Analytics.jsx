import AnalyticsKPIs from "./AnalyticsKPIs";
import RevenueCard from "./RevenueCard";
import PeakHoursCard from "./PeakHoursCard";
import ParkingsTable from "./ParkingsTable";

const Analytics = () => {
  return (
    <div className="space-y-8">
      <AnalyticsKPIs />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueCard />
        <PeakHoursCard />
      </div>

      <ParkingsTable />
    </div>
  );
};

export default Analytics;
