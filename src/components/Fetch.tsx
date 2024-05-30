import React from 'react';
import { useJsonFetch } from '../hooks/useJsonFetch';

type FetchProps = {
  url: string,
  opts: {},
}

function Fetch({ url, opts }: FetchProps) {
  const [data, loading, error] = useJsonFetch(url, opts);

  const renderResult = () => {
    console.log(loading)
    if (error) {
      return <p>Произошла ошибка: {error}</p>;
    }
    return <p>{loading ? 'Загрузка...' : JSON.stringify(data)}</p>;
  }

  return (
    <div className="fetch">
      <h2>Fetching to {url}</h2>
      {renderResult()}
    </div>
  );
}

export default Fetch;