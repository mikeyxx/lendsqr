import React from "react";
import { createContext, useState, useContext } from "react";

interface ApplicationContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  filtering: boolean;
  setFiltering: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<ApplicationContext>({
  setMenu: () => {},
  menu: false,
  setFiltering: () => {},
  filtering: false,
});

// Hook to provide access to context object
export const UseDataContext = () => {
  return useContext(DataContext);
};

const AppContext = ({ children }: any) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [filtering, setFiltering] = useState<boolean>(false);

  return (
    <DataContext.Provider value={{ menu, setMenu, filtering, setFiltering }}>
      {children}
    </DataContext.Provider>
  );
};

export default AppContext;
