"use client";

import { cx } from "@src/lib/utils";
import { useSearchParams } from "next/navigation";
import { useProductApi } from "@src/api/product/product.api";
import NotFoundPage from "@src/app/not-found";
import Image from "next/image";

export default function ProductPage() {
  const params = useSearchParams();
  const url = params.get("url") ?? undefined;
  const ai = !!params.get("ai");
  const { data, status } = useProductApi(url, ai);
  const isLoading = status === "loading" || status === "idle";

  if (status === "error" || (status === "loaded" && !data)) {
    return <NotFoundPage />;
  }

  return (
    <div
      className={cx({
        "flex flex-col md:flex-row md:py-10": true,
        "animate-pulse": isLoading,
      })}
    >
      <div
        className={cx({
          "m-6 md:m-0 md:mx-6 md:w-1/2 md:p-0 rounded-lg": true,
          "bg-gray-300 [&_*]:invisible": isLoading,
        })}
      >
        {!!data && <Image src={data.image} alt={data.name} className="w-full h-full aspect-video rounded-lg" />}
      </div>
      <div className="px-6 pt-2 flex flex-col gap-6 md:w-1/2 md:py-2">
        <h1
          className={cx({
            "text-2xl font-bold text-blue-900 uppercase": true,
            "bg-gray-300 h-16 rounded-full [&_*]:invisible": isLoading,
          })}
        >
          {data?.name}
        </h1>
        <p className="text-gray-500 text-md line">
          {isLoading ? (
            <span className="flex flex-col gap-1">
              <span className="h-4 w-1/1 bg-gray-300 rounded-full" />
              <span className="h-4 w-2/4 bg-gray-300 rounded-full" />
              <span className="h-4 w-3/4 bg-gray-300 rounded-full" />
            </span>
          ) : (
            data?.description
          )}
        </p>
        <h2
          className={cx({
            "text-2xl font-bold text-blue-900 uppercase": true,
            "bg-gray-300 h-10 rounded-full [&_*]:invisible": isLoading,
          })}
        >
          <small className="text-blue-900/20 mr-2">Código:</small> {data?.barcode}
        </h2>
        <h2
          className={cx({
            "text-4xl font-bold text-blue-900 uppercase": true,
            "bg-gray-300 h-12 rounded-full [&_*]:invisible": isLoading,
          })}
        >
          <small>R$</small> {data?.price}
        </h2>
      </div>
    </div>
  );
}
