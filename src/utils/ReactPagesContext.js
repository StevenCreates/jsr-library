import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);
  const value = {
    links,
    setLinks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
