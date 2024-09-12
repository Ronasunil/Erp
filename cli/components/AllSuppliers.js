import { serverFetch } from "@/utils/helper";
import { Table } from "./Table";
import { SupplierTable } from "./SupllierTable";

export async function AllSuppliers() {
  const {
    data: { suppliers },
  } = await serverFetch(`${process.env.LOCAL_URL}/api/v1/suppliers`, "GET");

  const headers = ["Name", "Contact info"];

  const rows = suppliers.map(({ _id, name, contact_info }) => ({
    id: _id,
    data: [name, contact_info],
  }));

  return (
    <SupplierTable
      headers={headers}
      rows={rows}
      btn={true}
      btnPlaceholder="create"
    />
  );
}
