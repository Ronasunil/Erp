import { serverFetch } from "@/utils/helper";
import { InventorySelect } from "./InventorySelect";

export default async function Stocks() {
  const {
    data: { products },
  } = await serverFetch("http://localhost:3001/api/v1/product/name", "GET");

  return (
    <InventorySelect name="productId">
      {products.map((stock) => (
        <option key={stock._id} value={stock._id}>
          {stock.name}
        </option>
      ))}
    </InventorySelect>
  );
}
