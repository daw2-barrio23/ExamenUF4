import React, { useState } from "react";
import { Button, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@nextui-org/react";

const Panel = () => {
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  return (
    <>
      <main className="container mx-auto mt-5 p-5 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Administración de incidencias</h1>
        <h2 className="mt-5 text-xl font-semibold text-gray-700">Tickets pendientes</h2>
        <table className="table-auto w-full mt-4 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Código</th>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Aula</th>
              <th className="px-4 py-2">Grupo</th>
              <th className="px-4 py-2">Ordenador</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Alumno</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">123459</td>
              <td className="border px-4 py-2">18/04/2023</td>
              <td className="border px-4 py-2">T6</td>
              <td className="border px-4 py-2">DAW1</td>
              <td className="border px-4 py-2">PC3</td>
              <td className="border px-4 py-2">Error de impresora</td>
              <td className="border px-4 py-2">Ana Martínez</td>
              <td className="border px-4 py-2">
                <div className="flex space-x-2">
                  <Tooltip content="Resolver">
                    <Button color="success" auto>Resolver</Button>
                  </Tooltip>
                  <Tooltip content="Editar">
                    <Button color="warning" auto>Editar</Button>
                  </Tooltip>
                  <Tooltip content="Ver comentarios">
                    <Button color="success" auto>Ver comentarios</Button>
                  </Tooltip>
                  <Tooltip content="Eliminar">
                    <Button color="error" auto>Borrar</Button>
                  </Tooltip>
                </div>
              </td>
            </tr>
            {/* Repetir filas según sea necesario */}
          </tbody>
        </table>

        <h2 className="mt-5 text-xl font-semibold text-gray-700">Tickets resueltos</h2>
        <table className="table-auto w-full mt-4 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Código</th>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Fecha Resuelto</th>
              <th className="px-4 py-2">Aula</th>
              <th className="px-4 py-2">Grupo</th>
              <th className="px-4 py-2">Ordenador</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Alumno</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">123457</td>
              <td className="border px-4 py-2">16/04/2023</td>
              <td className="border px-4 py-2">15/05/2023</td>
              <td className="border px-4 py-2">T7</td>
              <td className="border px-4 py-2">DAW2</td>
              <td className="border px-4 py-2">PC1</td>
              <td className="border px-4 py-2">Problema de conexión a Internet</td>
              <td className="border px-4 py-2">Maria López</td>
            </tr>
            {/* Repetir filas según sea necesario */}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Panel;
