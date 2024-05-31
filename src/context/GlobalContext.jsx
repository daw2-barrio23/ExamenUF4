// GlobalContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import bd from '../bd/bd.json';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [dades, setDades] = useState({
    ticketsPendientes: [],
    ticketsResueltos: []
  });

  useEffect(() => {
    setDades(bd);
  }, []);

  return (
    <GlobalContext.Provider value={{ dades }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
export default GlobalProvider;
