import { useState, useEffect } from "react";

export function useFormReset(data, reset) {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    } else {
      reset({
        name: data.name || "",
        contact_info: data.contact_info || "",
      });
    }
  }, [data, reset, initialLoad]);

  return;
}
