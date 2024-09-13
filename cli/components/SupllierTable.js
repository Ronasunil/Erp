"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

import { SupplierForm } from "./SupplierForm";
import { SupplierTableRow } from "./SupplierTableRow";

export function SupplierTable({
  headers,
  rows,
  btn = false,
  btnPlaceholder = "",
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg p-16">
      {rows.length ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => (
                <th className="px-6 py-3" scope="col" key={index}>
                  {header}
                </th>
              ))}
              <th className="px-6 py-3" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <SupplierTableRow row={row} key={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-xl">Create Suppliers</h2>
      )}

      {btn && (
        <Button onClick={toggleModal} type="create">
          {btnPlaceholder}
        </Button>
      )}

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <SupplierForm onClose={toggleModal} />
      </Modal>
    </div>
  );
}
