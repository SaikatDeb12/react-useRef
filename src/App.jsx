import { useEffect, useRef, useState } from "react";

const App = () => {
  //another usecase of the useRef
  const value = useRef();

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
