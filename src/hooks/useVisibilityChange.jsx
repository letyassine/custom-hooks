import { useSyncExternalStore } from "react";

const subscribe = (callback) => {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
};

const getSnapshot = () => document.visibilityState;

const getServerSnapshot = () => {
  throw Error("useVisibilityChange is a client-side hook only");
};

export default function useVisibilityChange() {
  const visibilityState = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return visibilityState === "visible";
}
