import { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h3>Data:</h3>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
};

export default DataFetcher;
