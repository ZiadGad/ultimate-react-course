import { useState } from "react";

import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleDecCount() {
    setCount((c) => c - step);
  }
  function handleIncCount() {
    setCount((c) => c + step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <div className="container" style={{ marginLeft: "50px" }}>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label htmlFor="">Step: {step}</label>
        <div className="counter" style={{ marginTop: "10px" }}>
          <button style={{ marginRight: "5px" }} onClick={handleDecCount}>
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button style={{ marginLeft: "5px" }} onClick={handleIncCount}>
            +
          </button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </>
  );
}

export default App;
