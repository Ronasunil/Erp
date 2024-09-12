import React from "react";

import { ModalInput } from "./ModalInput";
import { Button } from "./Button";
import { createProduct } from "@/app/actions/createProduct";
import { useForm } from "react-hook-form";
import { Suppliers } from "./Suppliers";
import { notify } from "@/utils/helper";

export function ProductForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { success } = await createProduct(data);

    onClose();
    if (success) return notify("Product created");
  };

  console.log(errors);
  return (
    <>
      <h2 className="text-lg font-bold">Create New Item</h2>
      <form>
        <ModalInput
          register={{
            ...register("name", { required: "This field is required" }),
          }}
          labelName="Name"
          errors={errors}
        />
        <ModalInput
          register={{
            ...register("description", { required: "This field is required" }),
          }}
          labelName="Description"
          errors={errors}
        />
        <ModalInput
          register={{
            ...register("stock", { required: "This field is required" }),
          }}
          labelName="Stock"
          errors={errors}
          type="number"
        />
        <ModalInput
          register={{
            ...register("price", { required: "This field is required" }),
          }}
          labelName="Price"
          errors={errors}
          type="number"
        />
        <Suppliers
          register={{
            ...register("supplier_id"),
          }}
        />
        <Button onClick={handleSubmit(onSubmit)} type="modal">
          Submit
        </Button>
      </form>
    </>
  );
}
