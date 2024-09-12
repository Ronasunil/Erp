"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const editSupplier = async function (id, data) {
  try {
    axios.patch(`${process.env.LOCAL_URL}/api/v1/suppliers/${id}`, data);
    revalidatePath("/suppliers");
    return { success: true };
  } catch (err) {
    console.error(err.message);
  }
};
