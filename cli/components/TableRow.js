import { TableData } from "./TableData";
import { Button } from "./Button";
import { notify } from "@/utils/helper";
import { deleteProduct } from "@/app/actions/deleteProduct";
import { Modal } from "./Modal";
import { useState } from "react";

import { ProductEditForm } from "./ProductEditForm";
import axios from "axios";

export function TableRow({ row }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productData, setProductData] = useState({});

  const toggleModal = () => setIsModalOpen((value) => !value);
  const handleEdit = async (id) => {
    setIsModalOpen(true);
    try {
      const {
        data: { product },
      } = await axios.get(`http://localhost:3001/api/v1/products/${id}`);
      setProductData(product);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const { success } = await deleteProduct(id);
    if (success) return notify("Product deleted");
    else return notify("something wen wrong", "error");
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
        <ProductEditForm id={row.id} onClose={toggleModal} data={productData} />
      </Modal>
    </tr>
  );
}
