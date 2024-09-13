"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const createProduct = async function (data) {
  try {
    axios.post(`${process.env.LOCAL_URL}/api/v1/products`, data);
    revalidatePath("/products");
    return { success: true };
  } catch (err) {
    return { success: false };
  }
};
