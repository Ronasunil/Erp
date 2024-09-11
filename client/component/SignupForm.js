"use client";
import { Input } from "@/component/Input";
import { Label } from "@/component/Label";
import { InputField } from "@/component/InputField";
import { useForm } from "react-hook-form";
import { AuthForm } from "@/component/AuthForm";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  console.log(errors);

  const password = watch("password");

  const validatePassword = (value) =>
    value === password || `Password doesn't match`;

  return (
    <AuthForm>
      <h2
        className="text-2xl font-bold mb-6 text-center"
        style={{ color: "#555" }}
      >
        Create an account
      </h2>
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

        <Input>
          <Label name="Confirm Password" />
          <InputField
            errors={errors}
            register={{
              ...register("confirmPassword", {
                required: "Confirm password is required",
                minLength: {
                  value: 6,
                  message: "Password needs at least 6 characters",
                },
                validate: validatePassword,
              }),
            }}
            name="confirmPassword"
          />
        </Input>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </AuthForm>
  );
}
