import { useSyncExternalStore } from "react";

const subscribe = (cb) => {
  window.addEventListener("languagechange", cb);
  return () => window.removeEventListener("languagechange", cb);
};

const getSnapshot = () => navigator.language;

const getServerSnapshot = () => {
  throw Error("usePreferredLanguage use for client only");
};

export default function usePreferredLanguage() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
