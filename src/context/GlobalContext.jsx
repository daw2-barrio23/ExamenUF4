import React, { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [dades, setDades] = useState({
    ticketsPendientes: [],
    ticketsResueltos: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePendientes = await fetch('https://json-server-examen-uf-4-eta.vercel.app/ticketsPendientes');
        const responseResueltos = await fetch('https://json-server-examen-uf-4-eta.vercel.app/ticketsResueltos');

        if (!responsePendientes.ok || !responseResueltos.ok) {
          throw new Error('No responde');
        }

        const ticketsPendientes = await responsePendientes.json();
        const ticketsResueltos = await responseResueltos.json();

        ticketsPendientes.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        ticketsResueltos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

        setDades({
          ticketsPendientes,
          ticketsResueltos
        });
      } catch (error) {
        console.error('Error en el fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ dades, setDades }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext };
export default GlobalProvider;
