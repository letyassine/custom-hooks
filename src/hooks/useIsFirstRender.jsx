import { useRef } from "react";
export default function useIsFirstRender() {
  const ref = useRef(true);
  if (ref.current === true) {
    ref.current = false;
    return true;
  }
  return ref.current;
}
