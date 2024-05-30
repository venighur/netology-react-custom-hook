import { useEffect, useState } from 'react';

export function useJsonFetch(url: string, opts: {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url, opts)
      .then(response => {
        if (!response.ok) {
          setError(response.statusText);
        }
        return response.json();
      })
      .then(json => setData(json))
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
}