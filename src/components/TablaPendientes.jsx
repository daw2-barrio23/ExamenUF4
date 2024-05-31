import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TablaPendientes = () => {
  const { dades } = useContext(GlobalContext);
  const { ticketsPendientes } = dades;

  return (
    <table className="table mt-4 border solid border-black">
      <thead className='border solid border-black'>
        <tr className='border solid border-black'>
          <th className='border solid border-black'>Código</th>
          <th className='border solid border-black'>Fecha</th>
          <th className='border solid border-black'>Aula</th>
          <th className='border solid border-black'>Grupo</th>
          <th className='border solid border-black'>Ordenador</th>
          <th className='border solid border-black'>Descripción</th>
          <th className='border solid border-black'>Alumno</th>
          <th className='border solid border-black'>Acciones</th>
        </tr>
      </thead>
      <tbody className='border solid border-black'>
        {ticketsPendientes.map(ticket => (
          <tr className='border solid border-black' key={ticket.codigo}>
            <td className='border solid border-black'>{ticket.codigo}</td>
            <td className='border solid border-black'>{ticket.fecha}</td>
            <td className='border solid border-black'>{ticket.aula}</td>
            <td className='border solid border-black'>{ticket.grupo}</td>
            <td className='border solid border-black'>{ticket.ordenador}</td>
            <td className='border solid border-black'>{ticket.descripcion}</td>
            <td className='border solid border-black'>{ticket.alumno}</td>
            <td className='border solid border-black'>
              <div className="d-flex space-x-2 ">
                <button className="btn btn-success bg-green-500 mx-1 px-1 rounded" title="Resolver ticket">Resolver</button>
                <button className="btn btn-warning bg-green-500 mx-1 px-1 rounded" title="Añadir comentario">Añadir comentario</button>
                <button className="btn btn-info bg-sky-600 mx-1 px-1 rounded" title="Ver comentarios">Ver comentarios</button>
                <button className="btn btn-danger bg-red-600 mx-1 px-1 rounded" title="Eliminar ticket">Eliminar</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaPendientes;
