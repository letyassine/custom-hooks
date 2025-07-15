import { useCallback, useEffect, useRef, useEffectEvent } from "react";

export default function useTimeout(cb, ms) {
  const id = useRef(null);
  const oneTimeout = useEffectEvent(cb);

  const handleClearTimeout = useCallback(() => {
    return clearTimeout(id.current);
  }, []);

  useEffect(() => {
    id.current = setTimeout(oneTimeout, ms);
    return handleClearTimeout;
  }, [ms, handleClearTimeout]);

  return handleClearTimeout;
}
