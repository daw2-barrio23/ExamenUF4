import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-400 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Examen UF4 M6</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/registro" className="hover:text-gray-400 bg-slate-900 px-3 pb-2 pt-2 mx-2 rounded">Registro</Link></li>
            <li><Link to="/login" className="hover:text-gray-400 bg-slate-900 px-3 pb-2 pt-2 mx-2 rounded">Login</Link></li>
            <li><Link to="/panel" className="hover:text-gray-400 bg-slate-900 px-3 pb-2 pt-2 mx-2 rounded">Panel</Link></li>
            <li><Link to="/nuevo" className="hover:text-gray-400 bg-slate-900 px-3 pb-2 pt-2 mx-2 rounded">Nuevo Ticket</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;