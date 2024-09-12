import axios from "axios";

export async function getSupplierSrv(id) {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/api/v1/suppliers/${id}`
    );

    const supplier = data.supplier;
    return supplier;
  } catch (err) {
    console.error(err);
  }
}
