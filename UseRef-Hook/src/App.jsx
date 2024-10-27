import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const inputElem = useRef();

  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>

      <h1>{value}</h1>

      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>

      <h1>Render count: {count.current} </h1>

      {/* Accessing DOM elements using useRef */}

      <input type="text" ref={inputElem} />
      <button
        onClick={() => {
          console.log(inputElem.current);
          inputElem.current.style.background = "black";
          inputElem.current.style.color = "white";
        }}
      >
        Click Here
      </button>
    </>
  );
}

export default App;
