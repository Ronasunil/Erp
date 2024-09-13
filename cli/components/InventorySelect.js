export function InventorySelect({ children, name }) {
  return (
    <select
      name={name}
      id="select1"
      className="block w-full p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      {children}
    </select>
  );
}
