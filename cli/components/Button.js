export function Button({ children, type, onClick }) {
  const types = {
    create:
      "pt-3 pb-3 pr-4 pl-4 bg-blue-600 mt-5  text-white hover:bg-blue-700 rounded-md duration-150 ring-1 ",
    modal: "mt-4 bg-blue-500 text-white px-4 py-2 rounded-md",
    close: "absolute top-2 right-2 text-gray-500",
    edit: "text-blue-500 mr-4",
    del: "text-red-500 mr-4",
  };

  return (
    <button type="submit" onClick={onClick} className={types[type]}>
      {children}
    </button>
  );
}
