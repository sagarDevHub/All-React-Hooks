import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // useEffect without any dependency Array. It will change the values when the page reloads
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  });

  // useEffect with dependency array but no variables. It will run only one time when the component is loaded.
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // }, []);

  // useEffect with dependency and with variables. It runs when the value of the variable changes.
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // }, [count]);

  return (
    <>
      <h1>I've render {count} times!</h1>
    </>
  );
}

export default App;
