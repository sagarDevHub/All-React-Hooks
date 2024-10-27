import React from "react";
import "./App.css";
import Profile from "./context/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
