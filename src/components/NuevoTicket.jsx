import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const NuevoTicket = () => {
  const { dades, setDades } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    codigo: '',
    fecha: '',
    aula: '',
    grupo: '',
    ordenador: '',
    descripcion: '',
    alumno: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://json-server-examen-uf-4-eta.vercel.app/ticketsPendientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('No funciona');
      }

      const newTicket = await response.json();
      setDades({
        ...dades,
        ticketsPendientes: [...dades.ticketsPendientes, newTicket]
      });
    } catch (error) {
      console.error('Error al crear el ticket:', error);
    }
  };

  return (
    <div className=" container mt-4 justify-content-center border rounded solid border-black pb-4">
      <h2 className='ml-2 mb-2'>Create a New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="ml-2 form-group mb-2">
          <label>Código</label>
          <input type="text" name="codigo" value={formData.codigo} onChange={handleChange} className="form-control ml-3 border solid " required />
        </div>
        <div className="ml-2 form-group mb-2">
          <label>Fecha</label>
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} className="form-control ml-3 border solid" required />
        </div>
        <div className="ml-2 form-group mb-2">
          <label>Aula</label>
          <input type="text" name="aula" value={formData.aula} onChange={handleChange} className="form-control ml-3 border solid" required />
        </div>
        <div className="ml-2 form-group mb-2">
          <label>Grupo</label>
          <input type="text" name="grupo" value={formData.grupo} onChange={handleChange} className="form-control ml-3 border solid" required />
        </div>
        <div className="ml-2 form-group mb-2">
          <label>Ordenador</label>
          <input type="text" name="ordenador" value={formData.ordenador} onChange={handleChange} className="form-control ml-3 border solid" required />
        </div>
        <div className="ml-2 form-group mb-2">
          <label>Descripción</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} className="form-control ml-3 border solid" required></textarea>
        </div>
        <div className="ml-2 form-group mb-2">
          <label>Alumno</label>
          <input type="text" name="alumno" value={formData.alumno} onChange={handleChange} className="form-control ml-3 border solid" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3 ml-3 border solid bg-green-600 rounded px-3">Create Ticket</button>
      </form>
    </div>
  );
};

export default NuevoTicket;
