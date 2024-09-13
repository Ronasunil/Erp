import { useForm } from "react-hook-form";
import { notify } from "@/utils/helper";
import { createSupplier } from "@/app/actions/createSupplier";
import { ModalInput } from "./ModalInput";
import { Button } from "./Button";

export function SupplierForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
    const { success } = await createSupplier(formData);
    if (success) notify("Supplier created");
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
          labelName="Contact_info"
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
