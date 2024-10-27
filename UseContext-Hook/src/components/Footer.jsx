import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { ph } = useContext(AppContext);
  return (
    <div>
      <h2>Footer</h2>
      <h3>Ph no : {ph}</h3>
    </div>
  );
};

export default Footer;
