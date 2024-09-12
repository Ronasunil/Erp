"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const createSupplier = async function (data) {
  try {
    axios.post(`${process.env.LOCAL_URL}/api/v1/suppliers`, data);
    revalidatePath("/suppliers");
    return { success: true };
  } catch (err) {
    console.error(err.message);
  }
};
