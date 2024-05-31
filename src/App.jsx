import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
//import { GlobalProvider } from './context/GlobalContext';
import Login from './vistas/Login';
import Panel from './vistas/Panel';
import Registro from './vistas/Login';

const App = () => {
  return (
   
      <Router>
        <div className="flex flex-col min-h-screen relative pt-16 pb-16">
          <Header />
          <div className="container mx-auto mt-4 flex-grow">
            <Routes>
              
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/panel" element={<Panel />} />
            </Routes>
          </div>
        </div>
      </Router>
  
  );
};

export default App;