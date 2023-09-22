/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  function flipCollapse() {
    setIsCollapse((prev) => !prev);
  }
  return (
    <Context.Provider value={{ isCollapse, flipCollapse }}>
      {children}
    </Context.Provider>
  );
};
