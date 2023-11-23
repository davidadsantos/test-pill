import { useState } from "react";
import axios from "axios";
import { ProductResponse } from "@src/api/product/product.response";
import { useOnMount } from "@src/hooks/useOnMount";

const apiHost = process.env.NEXT_PUBLIC_API_HOST;

export function useProductApi(url?: string, ai?: boolean) {
  const [data, setData] = useState<ProductResponse | undefined>(undefined);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">("idle");

  const [error, setError] = useState<string | undefined>(undefined);

  useOnMount(() => {
    if (!url || status !== "idle") {
      return;
    }

    setStatus("loading");
    setError(undefined);
    setData(undefined);

    axios
      .get(`${apiHost}/api/product`, {
        params: {
          url,
          ai: ai ? "true" : "",
        },
      })
      .then((response) => {
        setData(response.data);
        setStatus("loaded");
      })
      .catch((error) => {
        setError(error.message);
        setStatus("error");
      });
  });

  return { data, status, error };
}
