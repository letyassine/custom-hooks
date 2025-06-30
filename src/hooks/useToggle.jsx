import { useCallback, useState } from "react";

export default function useToggle(initialValue = true) {
  const [on, setOn] = useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    } else {
      return Boolean(initialValue);
    }
  });

  const handleToggle = useCallback((value) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }
    return setOn((v) => !v);
  }, []);

  return [on, handleToggle];
}
