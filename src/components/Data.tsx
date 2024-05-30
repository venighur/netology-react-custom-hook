import React from 'react';
import { useJsonFetch } from '../hooks/useJsonFetch';

function Data() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', {});

  return (
    <div className="fetch">
      <h2>Fetching to http://localhost:7070/data</h2>
      <div>{loading ? 'Загрузка...' : data}</div>
    </div>
  );
}

export default Data;
