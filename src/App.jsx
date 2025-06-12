import { useEffect, useRef, useState } from "react";

const App = () => {
  const inputRef = useRef();

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  // useEffect(() => {
  //   focusOnInput();
  // }, []);

  return (
    <div>
      SignUp
      <br />
      <input ref={inputRef} type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
};

export default App;
