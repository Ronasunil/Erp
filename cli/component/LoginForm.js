"use client";
import { Input } from "@/component/Input";
import { Label } from "@/component/Label";
import { InputField } from "@/component/InputField";
import { useForm } from "react-hook-form";
import { AuthForm } from "@/component/AuthForm";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  console.log(errors);

  return (
    <AuthForm>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <Label name="Email" />
          <InputField
            errors={errors}
            register={{
              ...register("email", { required: "Email is required" }),
            }}
            name="email"
          />
        </Input>
        <Input>
          <Label name="Password" />
          <InputField
            errors={errors}
            register={{
              ...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password needs at least 6 characters",
                },
              }),
            }}
            name="password"
          />
        </Input>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </AuthForm>
  );
}
