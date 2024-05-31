import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Examen UF4 M6</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/registro" className="hover:text-gray-400">Registro</Link></li>
            <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
            <li><Link to="/panel" className="hover:text-gray-400">Panel</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;