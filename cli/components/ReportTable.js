import { ReportTableRow } from "./ReportTableRow";

export default function ReporterTable({ headers, rows }) {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg p-16">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header, index) => (
              <th className="px-6 py-3" scope="col" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <ReportTableRow row={row} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
