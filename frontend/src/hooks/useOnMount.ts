import { useEffect, useRef } from "react";

export function useOnMount(callback: () => void) {
  const called = useRef(false);

  useEffect(() => {
    if (!called.current) {
      called.current = true;
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
