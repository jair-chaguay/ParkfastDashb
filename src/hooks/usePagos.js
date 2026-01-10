import { useEffect, useMemo, useState } from "react";

const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export default function usePagos() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/ParkfastDashb/data/payments.json")
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
        setLoading(false);
      });
  }, []);

  /* ================= KPIs ================= */

  const kpis = useMemo(() => {
    const completed = payments.filter(p => p.status === "Completado");

    const totalRevenue = completed.reduce((s, p) => s + p.amount, 0);
    const avgTicket = completed.length
      ? totalRevenue / completed.length
      : 0;

    const today = new Date().toISOString().slice(0, 10);
    const todayRevenue = completed
      .filter(p => p.date === today)
      .reduce((s, p) => s + p.amount, 0);

    const failed = payments.filter(p => p.status === "Fallido").length;

    return {
      todayRevenue,
      totalRevenue,
      avgTicket,
      failed,
    };
  }, [payments]);

  /* ============ Revenue por día ============ */

  const revenueByDay = useMemo(() => {
    const map = {
      Lun: 0, Mar: 0, Mié: 0, Jue: 0,
      Vie: 0, Sáb: 0, Dom: 0,
    };

    payments.forEach(p => {
      if (p.status !== "Completado") return;
      const day = DAYS[new Date(p.date).getDay()];
      map[day] += p.amount;
    });

    return Object.entries(map).map(([day, revenue]) => ({
      day,
      revenue: Number(revenue.toFixed(2)),
    }));
  }, [payments]);

  /* ========== Métodos de pago ========== */

  const paymentMethods = useMemo(() => {
    const map = {};
    payments.forEach(p => {
      if (p.status !== "Completado") return;
      map[p.method] = (map[p.method] || 0) + p.amount;
    });

    return Object.entries(map).map(([method, value]) => ({
      method,
      value,
    }));
  }, [payments]);

  /* ========== Estado de pagos ========== */

  const paymentStatus = useMemo(() => {
    const map = { Completado: 0, Pendiente: 0, Fallido: 0 };

    payments.forEach(p => map[p.status]++);
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [payments]);

  return {
    loading,
    payments,
    kpis,
    revenueByDay,
    paymentMethods,
    paymentStatus,
  };
}
