export function ModalInput({ labelName, register, errors, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {labelName}
      </label>
      <input
        {...register}
        type={type}
        className="mt-1 overlay focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      />
      {errors[labelName.toLowerCase()] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[labelName.toLowerCase()]?.message}
        </p>
      )}
    </div>
  );
}

export function EditProductInput({
  type = "text",
  labelName,
  value,
  setState,
  stateValue,
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {labelName}
      </label>
      <input
        type={type}
        defaultValue={value}
        onChange={(e) => setState(e.target.value)}
        value={stateValue}
        required
        className="mt-1 overlay focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
}
