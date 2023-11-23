import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T | undefined;
export function usePrevious<T>(value: T, initial: T): T;
export function usePrevious<T>(value: T, initial?: T): T | undefined {
  const ref = useRef<T | undefined>(initial);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
