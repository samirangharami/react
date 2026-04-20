import { useEffect, useState } from "react";

const TimeBomb = ({ duration }: { duration: number }) => {
  const [ticks, setTicks] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTicks((prev) => prev + 1),
      duration,
    );
    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div>
      <p>Ticks: {ticks}</p>
    </div>
  );
};

const App = () => {
  const [duration, setDuration] = useState(1000);

  return (
    <div>
      <TimeBomb duration={duration} />
      <button onClick={() => setDuration((prev) => prev - 100)}>Turbo</button>
    </div>
  );
};

export default App;
