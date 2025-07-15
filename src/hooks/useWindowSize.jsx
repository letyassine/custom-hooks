import { useLayoutEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const handle = () => {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    };

    handle();

    window.addEventListener("resize", handle);

    return () => {
      window.removeEventListener("resize", handle);
    };
  }, []);

  return size;
}
