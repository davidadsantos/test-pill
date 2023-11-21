"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@src/app/store";
import { cx } from "@src/lib/utils";
import { useCallback, useEffect } from "react";
import { hideLoading } from "@src/store/loading";
import { Icons } from "@src/components/icons";

export function Loading() {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.loading.show);

  const delayedDispatch = useCallback(() => {
    dispatch(hideLoading());
  }, [dispatch]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (show) {
      timeout = setTimeout(() => {
        delayedDispatch();
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [show, delayedDispatch]);

  return (
    <div
      className={cx({
        "fixed z-10 inset-0 overflow-y-auto bg-white bg-opacity-80 flex justify-center items-center transition-all":
          true,
        "opacity-100": show,
        "opacity-0 invisible": !show,
      })}
    >
      <Icons.logo className="h-16 animate-ping" />
    </div>
  );
}
