'use client';

import { cn, cx } from "@src/lib/utils";
import { Icons } from "@src/components/icons";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { showLoading } from "@src/store/loading";
import { useRouter } from "next/navigation";

interface Props {
  ai?: boolean;
}

const Page = ({ai}: Props) => {
  const dispatch = useDispatch();
  const {push} = useRouter();
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const IconSearch = ai ? Icons.searchAi : Icons.search;

  function onClickButton() {
    if (url?.match(/^(http|https):\/\/[^ "]+$/)) {
      dispatch(showLoading());

      void push(`/product?url=${url}&ai=${ai ? 'true' : ''}`);
      return;
    }

    setError("URL inválida");
  }

  function handleUrlChange(event: ChangeEvent<HTMLInputElement>) {
    setError(undefined);

    setUrl(event.target.value);
  }

  function onClickButtonAiSearch() {
    dispatch(showLoading());

    if (ai) {
      void push(`/`);
      return;
    }

    void push(`/ai`);
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {ai && (
        <h1 className="w-full md:w-9/12 px-2 pb-10 text-4xl font-bold text-center text-blue-900/20 uppercase">
          Busca com inteligência artificial
        </h1>
      )}
      <div className="w-full md:w-9/12 flex flex-col justify-center items-center gap-2 md:items-start md:flex-row">
        <div className="w-11/12 md:w-10/12 flex flex-col">
          <input
            className={cx({
              "h-16 p-4 flex justify-center items-center rounded-lg": true,
              "border-gray-200 shadow-lg border-2 focus:outline-none focus:border-gray-300 focus:shadow-md transition-all": true,
              "text-lg": true,
              "text-red-500 border-red-500 focus:border-red-500 focus:shadow-red-md": !!error,
            })}
            type="url"
            placeholder="Insira a url do produto"
            required
            onChange={handleUrlChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onClickButton();
              }
            }}
          />
          {error && (
            <span className="text-red-500 text-sm py-2">{error}</span>
          )}
        </div>
        <button
          className={cn([
            "w-11/12 md:w-2/12 h-16 flex justify-center items-center transition-all",
            "shadow-lg border-2 border-blue-700 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-800",
            "text-lg text-white font-semibold",
          ])}
          onClick={onClickButton}
        >
          <IconSearch className="w-10 h-10"/>
        </button>
      </div>
      <div className="flex items-center content-center mt-10">
        <a
          onClick={onClickButtonAiSearch}
          className="text-blue-900/50 text-3xl font-semibold hover:text-blue-900 transition-all cursor-pointer underline"
        >
          {ai ? "Busca normal" : "Busca com inteligência artificial"}
        </a>
      </div>
    </div>
  );
}

export default Page;
