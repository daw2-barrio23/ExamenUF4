import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Pencil, Trash2, Plus } from 'lucide-react';

const ItemsList = () => {
  const { items } = useContext(GlobalContext);

  console.log(items); // Verifica los datos en la consola

  if (!items || items.length === 0) return <p>Loading...</p>;

  const handleAddClick = () => {
    console.log('Add button clicked');
    // Lógica para agregar un nuevo elemento
  };

  return (
    <div className="relative p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map(item => (
        <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full h-48 object-cover" src={item.imagen} alt={item.titulo} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.titulo}</div>
            <p className="text-gray-700 text-base">{item.fecha}</p>
            <p className="text-gray-700 text-base">{item.experiencia}</p>
            <p className="text-gray-700 text-base">{item.comentario}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Pencil />
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <Trash2 />
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handleAddClick}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded-full shadow-lg"
      >
        <Plus />
      </button>
    </div>
  );
};

export default ItemsList;
