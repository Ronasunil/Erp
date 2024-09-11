export function Label({ name }) {
  return (
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      {name}
    </label>
  );
}
