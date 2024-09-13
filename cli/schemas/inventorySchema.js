import z from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Name is required"),
  stock: z.string().min(1, "Stock count is required"),
  type: z.enum(
    ["sale", "purchase"],
    "Type must be either 'sale' or 'purchase'"
  ),
});
