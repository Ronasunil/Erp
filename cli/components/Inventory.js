"use client";

import Heading from "@/components/Heading";
import { Label } from "@/components/Label";
import { InventorySelect } from "@/components/InventorySelect";
import { Input } from "@/components/Input";
import { ServerInput } from "@/components/ServerInput";
import { Button } from "@/components/Button";
import { notify } from "@/utils/helper";
import { addStock } from "@/app/actions/addStock";

export default function Inventory({ children }) {
  const handleSubmit = async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { success } = await addStock(data);
    if (success === "fail") return notify("insufficient stock", "error");
    if (success) return notify("Stock added");
    else return notify("Something went wrong", "error");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <Heading>Inventory</Heading>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input>
            <Label name="Stocks" />
            {children}
          </Input>

          <Input>
            <Label name="Add stock" />
            <ServerInput
              name="quantity"
              type="number"
              placeholder="Enter stock count"
            />
          </Input>

          <Input>
            <Label name="Type" />
            <InventorySelect name="transaction_type">
              <option value="sale">Sale</option>
              <option value="purchase">Purchase</option>
            </InventorySelect>
          </Input>

          <div className="flex justify-end">
            <Button type="create">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
