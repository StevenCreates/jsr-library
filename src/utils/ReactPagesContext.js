import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  const value = {
    links,
    setLinks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
