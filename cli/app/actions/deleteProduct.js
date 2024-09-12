"use server";

import { revalidatePath } from "next/cache";

import axios from "axios";

export const deleteProduct = async function (id) {
  try {
    await axios.delete(`http://localhost:3001/api/v1/products/${id}`);
    revalidatePath("/products");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};
