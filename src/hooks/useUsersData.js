import { useEffect, useState } from "react";

export default function useUsersData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../data//users.json") // TU JSON TAL CUAL
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return { users, loading };
}
