"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const deleteSupplier = async function (id) {
  try {
    axios.delete(`${process.env.LOCAL_URL}/api/v1/suppliers/${id}`);
    revalidatePath("/suppliers");
    return { success: true };
  } catch (err) {
    console.error(err.message);
  }
};
