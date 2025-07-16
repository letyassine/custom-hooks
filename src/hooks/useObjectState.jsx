import { useCallback, useState } from "react";

const isPlainObject = (value) => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

export default function useObjectState(initialValue = {}) {
  const [state, setState] = useState(initialValue);

  const handleState = useCallback((arg) => {
    if (typeof arg === "function") {
      setState((s) => {
        const newState = arg(s);
        if (isPlainObject(newState)) {
          return { ...s, ...newState };
        }
      });
    }

    if (isPlainObject(arg)) {
      setState((s) => ({ ...s, ...arg }));
    }
  }, []);

  return [state, handleState];
}
