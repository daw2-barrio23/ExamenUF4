import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TablaResueltos = () => {
  const { dades } = useContext(GlobalContext);
  const { ticketsResueltos } = dades;

  return (
    <table className="table mt-4 border solid border-black">
      <thead className='border solid border-black'>
        <tr className='border solid border-black'>
          <th className='border solid border-black'>Código</th>
          <th className='border solid border-black'>Fecha</th>
          <th className='border solid border-black'>Fecha resuelto</th>
          <th className='border solid border-black'>Aula</th>
          <th className='border solid border-black'>Grupo</th>
          <th className='border solid border-black'>Ordenador</th>
          <th className='border solid border-black'>Descripción</th>
          <th className='border solid border-black'>Alumno</th>
          <th className='border solid border-black'>Acciones</th>
        </tr>
      </thead>
      <tbody className='border solid border-black'>
        {ticketsResueltos.map(ticket => (
          <tr key={ticket.codigo}>
            <td className='border solid border-black'>{ticket.codigo}</td>
            <td className='border solid border-black'>{ticket.fecha}</td>
            <td className='border solid border-black'>{ticket.fecha_resuelto}</td>
            <td className='border solid border-black'>{ticket.aula}</td>
            <td className='border solid border-black'>{ticket.grupo}</td>
            <td className='border solid border-black'>{ticket.ordenador}</td>
            <td className='border solid border-black'>{ticket.descripcion}</td>
            <td className='border solid border-black'>{ticket.alumno}</td>
            <td>
              <div className="d-flex space-x-2 ">
                <button className="btn btn-info bg-sky-600 rounded mx-1 px-1" title="Ver comentarios">Ver comentarios</button>
                <button className="btn btn-danger bg-red-600 rounded mx-1 px-1" title="Eliminar ticket">Eliminar</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaResueltos;
