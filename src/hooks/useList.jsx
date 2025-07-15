import { useCallback, useState } from "react";

export default function useList(elements = []) {
  const [list, setList] = useState(elements);

  const set = useCallback((items) => {
    setList(items);
  }, []);

  const push = useCallback((item) => {
    setList((l) => [...l, item]);
  }, []);

  const removeAt = useCallback((i) => {
    setList((l) => [...l.slice(0, i), ...l.slice(i + 1)]);
  }, []);

  const insertAt = useCallback((i, el) => {
    setList((l) => [...l.slice(0, i), el, ...l.slice(i)]);
  }, []);

  const updateAt = useCallback((i, el) => {
    setList((l) => l.map((e, index) => (i === index ? el : e)));
  }, []);

  const clear = useCallback(() => {
    setList([]);
  }, []);

  return [list, { set, push, removeAt, insertAt, updateAt, clear }];
}
