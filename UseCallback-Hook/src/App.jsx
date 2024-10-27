import React, { useCallback } from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [count, setCount] = useState(0);
  const newFun = useCallback(() => {}, []);

  return (
    <>
      <Header newFun={newFun} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
    </>
  );
};

export default App;
