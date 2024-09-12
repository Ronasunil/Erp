"use server";

import { revalidatePath } from "next/cache";

import axios from "axios";

export const updateProduct = async function (id, data) {
  try {
    await axios.patch(`http://localhost:3001/api/v1/products/${id}`, data);
    revalidatePath("/products");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};
