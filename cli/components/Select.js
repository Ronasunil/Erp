export function Select({ children, register = {}, defaultValue = "" }) {
  return (
    <select
      value={defaultValue}
      {...register}
      onChange
      className=" w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      {children}
    </select>
  );
}
