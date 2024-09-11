export function InputField({ errors, register, name }) {
  return (
    <div className="flex  flex-col gap-2">
      <input
        type={name}
        {...register}
        className={`mt-1 p-2 w-full border  ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-md`}
      />

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}
