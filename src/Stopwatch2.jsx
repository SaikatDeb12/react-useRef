import { useRef, useState } from "react";

const Stopwatch2 = () => {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  const startClock = () => {
    let value = setInterval(() => {
      setCurrentCount((val) => val + 1);
    }, 1000);

    //just like useState the value of the timer is persistent across at re-rendering
    // and the change of this value does not trigger any re-render
    timer.current = value;
  };

  const stopClock = () => {
    clearInterval(timer.current);
  };

  return (
    <div>
      {currentCount}
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  );
};

export default Stopwatch2;
