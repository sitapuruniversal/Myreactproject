import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 1;
  let [counter, setCounter] = useState(1);
  const addValue = () => {
    if (Number(counter > 20)) {
      setCounter(Number(""));
    } else {
      setCounter(counter + 1);
    }
  };
  const lessValue = () => {
    if (counter < 1) {
      setCounter(Number(""));
    } else {
      setCounter(Number(counter - 1));
    }
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="container">
        <h1>Counter Value : {counter}</h1>
        <div className="btn">
          <button onClick={addValue}>Increment</button>
          <button onClick={lessValue}>Decrement</button>
          <button onClick={resetCounter}>Reset Value</button>
        </div>
      </div>
    </>
  );
}

export default App;
