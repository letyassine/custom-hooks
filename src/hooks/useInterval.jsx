import * as React from "react";

export default function useInterval(cb, ms) {
  const id = React.useRef(null);
  const onInterval = React.experimental_useEffectEvent(cb);

  const handleClearInterval = React.useCallback(() => {
    window.clearInterval(id.current);
  }, []);

  React.useEffect(() => {
    id.current = window.setInterval(onInterval, ms);
    return handleClearInterval;
  }, [ms, handleClearInterval, onInterval]);

  return handleClearInterval;
}
