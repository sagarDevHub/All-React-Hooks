import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function cubeNum(num) {
    console.log("Caluculation done");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of the number is : {result}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter++
      </button>
      <h1>Counter : {count}</h1>
    </>
  );
}

export default App;
