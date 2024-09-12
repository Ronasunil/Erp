import { useState } from "react";

import { TableData } from "./TableData";
import { Button } from "./Button";
import { notify } from "@/utils/helper";

import { Modal } from "./Modal";

import { SupplierForm } from "./SupplierForm";
import { getSupplierSrv } from "@/libs/service";
import { deleteSupplier } from "@/app/actions/deleteSupplier";

export function SupplierTableRow({ row }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [supplierData, setSupplierData] = useState({});

  const toggleModal = () => setIsModalOpen((value) => !value);
  const handleEdit = async (id) => {
    setIsModalOpen(true);
    const supplier = await getSupplierSrv(id);
    setSupplierData(supplier);
  };

  const handleDelete = async (id) => {
    const { success } = await deleteSupplier(id);

    if (success) notify("Supplier deleted");
    else notify("Something went wrong", "error");
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      {row.data.map((item, i) => (
        <TableData key={i} item={item} />
      ))}
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <Button onClick={() => handleEdit(row.id)} type="edit">
          Edit
        </Button>

        <Button onClick={() => handleDelete(row.id)} type="del">
          Delete
        </Button>
      </td>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <SupplierForm
          onClose={toggleModal}
          action="update"
          data={supplierData}
        />
      </Modal>
    </tr>
  );
}
