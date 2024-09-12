"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { ProductForm } from "./ProductForm";

import { TableRow } from "./TableRow";

export function Table({ headers, rows, btn = false, btnPlaceholder = "" }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg p-16">
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
            <TableRow row={row} key={index} />
          ))}
        </tbody>
      </table>

      {btn && (
        <Button onClick={toggleModal} type="create">
          {btnPlaceholder}
        </Button>
      )}

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ProductForm onClose={toggleModal} />
      </Modal>
    </div>
  );
}
