import { useEffect, useState } from "react";
import axios from "axios";
import { ProductResponse } from "@src/api/product/product.response";

const apiHost = process.env.NEXT_PUBLIC_API_HOST;

export function useProductApi(url?: string, ai?: boolean) {
  const [data, setData] = useState<ProductResponse | undefined>(undefined);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">("idle");

  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!url) return;

    setStatus("loading");
    setError(undefined);
    setData(undefined);

    console.log(apiHost);

    axios
      .get(`${apiHost}/product`, {
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

    return () => {
      setStatus("idle");
      setData(undefined);
      setError(undefined);
    };
  }, [url, ai]);

  return { data, status, error };
}
