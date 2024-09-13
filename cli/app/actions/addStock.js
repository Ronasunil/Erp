"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export const addStock = async function (stock) {
  try {
    const { data } = await axios.post(
      `${process.env.LOCAL_URL}/api/v1/stock`,
      stock
    );

    if (data.status === "fail") return { success: "fail" };

    revalidatePath("/products");

    return { success: true };
  } catch (err) {
    return { success: false };
  }
};
