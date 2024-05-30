import React from 'react';
import {useJsonFetch} from '../hooks/useJsonFetch';

function Loading() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', {});

  return <div>Загрузка...</div>;
}

export default Loading;
