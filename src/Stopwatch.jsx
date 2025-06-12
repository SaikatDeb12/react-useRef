import { useEffect, useState } from "react";

//using useState to implement this
const Stopwatch = () => {
  const [time, setTime] = useState(1);
  const [toggle, setToggle] = useState(true);
  //inside the useEffect, the setInternal get created and destroyed based on the value of toggle
  //the value of the 'time' persists because it is defined as a 'state'
  useEffect(() => {
    let interval;
    if (toggle) {
      interval = setInterval(() => {
        console.log("toggle: ", toggle);
        setTime((prevState) => prevState + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [toggle]);
  return (
    <div>
      {time}
      <br />
      <button onClick={() => setToggle(false)}>Stop</button>
      <button onClick={() => setToggle(true)}>Start</button>
    </div>
  );
};

export default Stopwatch;
