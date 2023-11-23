import { useEffect, useLayoutEffect } from "react";
import { shallowEqual } from "t-state";
import { usePrevious } from "@src/hooks/usePrevious";

type EqualityFn = (a: any, b: any) => boolean;
type CleanupFn = () => void;

type OnChangeOptions = {
  equalityFn?: EqualityFn;
  callOnMount?: boolean;
  layoutEffect?: boolean;
};

export function useOnChange<T>(
  value: T,
  callBack: (values: { prev: T | undefined; current: T }) => void | CleanupFn,
  { equalityFn: areEqual = shallowEqual, callOnMount, layoutEffect }: OnChangeOptions = {},
) {
  const useEffectFn = layoutEffect ? useLayoutEffect : useEffect;

  const prev = usePrevious(value, !callOnMount ? value : undefined);
  useEffectFn(() => {
    if (!areEqual(value, prev)) {
      return callBack({ prev, current: value });
    }
  });
}
