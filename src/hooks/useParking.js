import { useEffect, useState } from "react";

const useParking = () => {
  const [loading, setLoading] = useState(true);

  const [kpis, setKpis] = useState({});
  const [parkings, setParkings] = useState([]);
  const [occupancyByParking, setOccupancyByParking] = useState([]);
  const [availabilityStatus, setAvailabilityStatus] = useState([]);
  const [flowByHour, setFlowByHour] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setKpis({
        totalParkings: 6,
        totalSpots: 420,
        availableSpots: 96,
        occupancyRate: 77,
      });

      setParkings([
        {
          id: "PK-01",
          name: "Centro",
          lat: -0.220164,   
          lng: -78.512327,  
          total: 120,
          occupied: 110,
        },
        {
          id: "PK-02",
          name: "Mall Norte",
          lat: -0.165258,
          lng: -78.483245,
          total: 80,
          occupied: 60,
        },
        {
          id: "PK-03",
          name: "Aeropuerto",
          lat: -0.129166,
          lng: -78.357500,
          total: 150,
          occupied: 140,
        },
        {
          id: "PK-04",
          name: "Hospital",
          lat: -0.180653,
          lng: -78.467834,
          total: 70,
          occupied: 14,
        },
      ]);

      setOccupancyByParking([
        { name: "Centro", value: 110 },
        { name: "Mall Norte", value: 60 },
        { name: "Aeropuerto", value: 140 },
        { name: "Hospital", value: 14 },
      ]);

      setAvailabilityStatus([
        { name: "Disponibles", value: 96 },
        { name: "Ocupados", value: 324 },
      ]);

      setFlowByHour([
        { hour: "08:00", entries: 45 },
        { hour: "10:00", entries: 72 },
        { hour: "12:00", entries: 60 },
        { hour: "14:00", entries: 90 },
        { hour: "16:00", entries: 75 },
      ]);

      setLoading(false);
    }, 800);
  }, []);

  return {
    loading,
    kpis,
    parkings,
    occupancyByParking,
    availabilityStatus,
    flowByHour,
  };
};

export default useParking;
