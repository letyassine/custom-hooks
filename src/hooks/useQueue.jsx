import { useState, useCallback } from "react";

export default function useQueue(initialValue = []) {
  const [queue, setQueue] = useState(initialValue);

  const add = useCallback((element) => {
    setQueue((q) => [...q, element]);
  }, []);

  const remove = useCallback(() => {
    let removedElement;
    setQueue(([first, ...q]) => {
      removedElement = first;
      return q;
    });

    return removedElement;
  }, []);

  const clear = useCallback(() => {
    setQueue([]);
  }, []);

  return {
    add,
    remove,
    clear,
    first: queue[0],
    last: queue[queue.length - 1],
    size: queue.length,
    queue,
  };
}
