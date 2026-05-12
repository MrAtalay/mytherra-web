import { useEffect, useState } from "react";

export function useApi(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}${path}`)
      .then((r) => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [path]);

  return { data, loading };
}
