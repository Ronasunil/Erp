import { useSuppliers } from "@/hooks/useSuppliers";
import { Select } from "./Select";
import SpinnerMini from "./SpinnerMini";

export function Suppliers({ register }) {
  const { isLoading, suppliers } = useSuppliers();

  console.log(isLoading, suppliers);

  const supplierData = suppliers.map((supplier) => ({
    name: supplier.name,
    id: supplier._id,
  }));

  if (supplierData.length === 0) return <p>No suppliers available</p>;

  return (
    <Select register={register} defaultValue={supplierData[0]?.id || ""}>
      {supplierData.map((supplier) => (
        <option key={supplier.id} value={supplier.id}>
          {supplier.name}
        </option>
      ))}
    </Select>
  );
}

export function EditSuppliers({ defaultValue, setSupplier }) {
  const { isLoading, suppliers } = useSuppliers();

  if (isLoading) return <SpinnerMini />;

  const supplierData = suppliers.map((supplier) => ({
    name: supplier.name,
    id: supplier._id,
  }));

  const handleChange = (e) => {
    setSupplier(e.target.value);
  };

  return (
    <Select defaultValue={defaultValue} onChange={handleChange}>
      {supplierData.map((supplier) => (
        <option key={supplier.id} value={supplier.id}>
          {supplier.name}
        </option>
      ))}
    </Select>
  );
}
