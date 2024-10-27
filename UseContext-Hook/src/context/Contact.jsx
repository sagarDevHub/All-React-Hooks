import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Contact = () => {
  const { ph, name } = useContext(AppContext);
  return (
    <div>
      <h2>Contact</h2>
      <h3>Ph no: {ph}</h3>
      <h3>Name: {name}</h3>
    </div>
  );
};

export default Contact;
