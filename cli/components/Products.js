import { serverFetch } from "@/utils/helper";
import { Table } from "./Table";

export async function Products() {
  const {
    data: { products },
  } = await serverFetch(`${process.env.LOCAL_URL}/api/v1/products`, "GET");

  const headers = ["Name", "Description", "Price", "Supplier", "Stock level"];

  const rows = products.map(
    ({
      _id,
      name,
      description,
      price,
      stock_level,
      supplier_id: { name: supplierName },
    }) => ({
      id: _id,
      data: [name, description, price, supplierName, stock_level],
    })
  );

  return (
    <Table
      headers={headers}
      rows={rows}
      btn={true}
      btnPlaceholder="create"
      modal={true}
    />
  );
}
