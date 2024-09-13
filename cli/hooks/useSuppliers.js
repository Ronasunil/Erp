"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSuppliers = async () => {
      try {
        setIsLoading(true);

        const res = await axios.get("http://localhost:3001/api/v1/suppliers");

        console.log("Suppliers data fetched:", res.data.suppliers); // Debug log
        setSuppliers(res.data.suppliers);
      } catch (err) {
        console.error("Error fetching suppliers:", err.message); // Ensure the error message is logged correctly
      } finally {
        setIsLoading(false);
        console.log("Loading set to false");
      }
    };

    getSuppliers();
  }, []);

  return { suppliers, isLoading };
}

export function useSupplier(id) {
  const [isLoading, setIsLoading] = useState(true); // Initially loading
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    const getSupplier = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/api/v1/suppliers/${id}`
        );
        setSupplier(data.supplier);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false); // Set loading to false after fetching data
      }
    };

    if (id) getSupplier();
  }, [id]); // Trigger fetching when `id` changes

  return { isLoading, supplier };
}
