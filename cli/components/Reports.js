import { serverFetch } from "@/utils/helper";
import ReporterTable from "./ReportTable";

export default async function Reports() {
  const { data } = await serverFetch(
    `${process.env.LOCAL_URL}/api/v1/products/lowQuantity`,
    "GET"
  );

  const headers = ["Name", "Description", "Price", "Stock level"];

  const rows = data.products.map(({ name, description, price, stock_level }) =>
    Object.values({ name, description, price, stock_level })
  );

  return <ReporterTable rows={rows} headers={headers} />;
}
