import React, { useState } from "react";
import { Button, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@nextui-org/react";
import TablaPendientes from "../components/TablaPendientes";
import TablaResueltos from "../components/TablaResueltos";

const Panel = () => {
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  return (
    <>
      <main className="container mt-5">
        <h1>Administración de incidencias</h1>
        <h2 className="mt-5">Tickets pendientes</h2>
        <TablaPendientes />
        <h2 className="mt-5">Tickets resueltos</h2>
        <TablaResueltos />
      </main>
    </>
  );
};

export default Panel;
