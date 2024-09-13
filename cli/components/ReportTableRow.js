import { TableData } from "./TableData";

export function ReportTableRow({ row }) {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      {row.map((item, i) => (
        <TableData key={i} item={item} />
      ))}
    </tr>
  );
}
