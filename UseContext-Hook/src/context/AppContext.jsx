import { createContext } from "react";

export const AppContext = createContext();

const ContextProvoider = (props) => {
  const ph = "+91 8972418265";
  const name = "Sagar";

  return (
    <AppContext.Provider value={{ ph, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvoider;
