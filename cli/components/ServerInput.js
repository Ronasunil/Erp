export function ServerInput({ type, placeholder, name }) {
  return (
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className="block w-full p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    />
  );
}
