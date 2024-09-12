import React, { useEffect, useState } from "react";
import { ModalInput } from "./ModalInput";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { notify } from "@/utils/helper";
import { createSupplier } from "@/app/actions/createSupplier";
import { editSupplier } from "@/app/actions/editSupplier";
import { useFormReset } from "@/hooks/useFormReset";

export function SupplierForm({ onClose, data = {}, action = "create" }) {
  const [initialLoad, setInitialLoad] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: data.name || "",
      contact_info: data.contact_info || "",
    },
  });

  useFormReset(data, reset);

  const onSubmit = async (formData) => {
    console.log(formData);

    if (action === "update") {
      const { success } = await editSupplier(data._id, formData);
      if (success) notify("Supplier updated");
      else notify("Something went wrong", "error");
    } else {
      const { success } = await createSupplier(formData);
      if (success) notify("Supplier created");
      else notify("Something went wrong", "error");
    }
    onClose();
  };

  return (
    <>
      <h2 className="text-lg font-bold">
        {action === "update" ? "Update Supplier" : "Create New Supplier"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalInput
          labelName="Name"
          register={register("name", { required: "This field is required" })}
          errors={errors}
        />
        <ModalInput
          labelName="Contact Info"
          register={register("contact_info", {
            required: "This field is required",
            minLength: {
              value: 10,
              message: "Contact number must be 10 characters",
            },
          })}
          errors={errors}
        />
        <Button type="modal">Submit</Button>
      </form>
    </>
  );
}
