import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvoider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvoider>
    <App />
  </ContextProvoider>
);
