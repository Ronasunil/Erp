import { useForm } from "react-hook-form";
import { notify } from "@/utils/helper";
import { createSupplier } from "@/app/actions/createSupplier";
import { ModalInput } from "./ModalInput";
import { Button } from "./Button";
import { useSupplier } from "@/hooks/useSuppliers";
import { useEffect } from "react";
import { editSupplier } from "@/app/actions/editSupplier";

export function SupplierEditForm({ onClose, id }) {
  const { isLoading, supplier } = useSupplier(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (supplier) {
      reset({
        name: supplier.name,
        contact_info: supplier.contact_info,
      });
    }
  }, [supplier, reset]);

  const onSubmit = async (formData) => {
    const { success } = await editSupplier(id, formData);
    if (success) notify("Supplier Edited");
    else notify("Something went wrong", "error");

    onClose();
  };

  return (
    <>
      <h2 className="text-lg font-bold">Create new Supplier</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalInput
          labelName="Name"
          register={register("name", { required: "This field is required" })}
          errors={errors}
        />
        <ModalInput
          labelName="Contact_Info"
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
