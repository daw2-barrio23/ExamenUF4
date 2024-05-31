import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://json-server-examen.vercel.app/historias')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <GlobalContext.Provider value={{ items, setItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
