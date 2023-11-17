'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@src/app/store";
import { cx } from "@src/lib/utils";
import { useEffect } from "react";
import { hideLoading } from "@src/store/loading";

export function Loading() {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.loading.show);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (show) {
      timeout = setTimeout(() => {
        dispatch(hideLoading());
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  return (
    <div className={cx({
      'fixed z-10 inset-0 overflow-y-auto bg-white bg-opacity-80 flex justify-center items-center transition-all': true,
      "opacity-100": show,
      "opacity-0 invisible": !show,
    })}>
      <img src="https://pill.com.br/cdn/shop/t/51/assets/header-union.svg" alt="Pill" className="h-16 animate-ping"/>
    </div>
  );
}
