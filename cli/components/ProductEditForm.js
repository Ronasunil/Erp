import React, { useEffect, useState } from "react";
import { EditProductInput } from "./ModalInput";
import { Button } from "./Button";
import { EditSuppliers } from "./Suppliers";
import { notify } from "@/utils/helper";
import { updateProduct } from "@/app/actions/updateProduct";

export function ProductEditForm({ onClose, data, id }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock_level, setStockLevel] = useState(0);
  const [price, setPrice] = useState(0);
  const [supplier, setSupplier] = useState("");

  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setDescription(data.description || "");
      setStockLevel(data.stock_level || 0);
      setPrice(data.price || 0);
      setSupplier(data?.supplier_id?._id || "");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      name,
      description,
      stock_level,
      price,
      supplier_id: supplier,
    };

    console.log(updatedProduct);

    const { success } = await updateProduct(id, updatedProduct);
    if (!success) return notify("Something went wrong", "error");

    notify("Product updated");
    onClose();
  };

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h2 className="text-lg font-bold">Edit</h2>
      <form onSubmit={handleSubmit}>
        <EditProductInput
          labelName="Name"
          setState={setName}
          stateValue={name}
          value={name}
        />
        <EditProductInput
          labelName="Description"
          setState={setDescription}
          stateValue={description}
          value={description}
        />
        <EditProductInput
          labelName="Stock"
          type="number"
          setState={setStockLevel}
          stateValue={stock_level}
          value={stock_level}
        />
        <EditProductInput
          labelName="Price"
          type="number"
          setState={setPrice}
          stateValue={price}
          value={price}
        />

        <EditSuppliers defaultValue={supplier} setSupplier={setSupplier} />
        <Button type="modal">Submit</Button>
      </form>
    </>
  );
}
