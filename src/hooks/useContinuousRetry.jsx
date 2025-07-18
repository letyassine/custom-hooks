import React, { useEffect, useState } from "react";
React.useEffectEvent = React.experimental_useEffectEvent;

export default function useContinuousRetry({
  callback,
  interval = 100,
  options = {},
}) {
  const [hasResolved, setHasResolved] = useState(false);
  const { maxRetries = Infinity } = options;
  const onInterval = React.useEffectEvent(callback);

  useEffect(() => {
    let retries = 0;
    const id = window.setInterval(() => {
      if (onInterval()) {
        setHasResolved(true);
        window.clearInterval(id);
      } else if (retries >= maxRetries) {
        window.clearInterval(id);
      } else {
        retries += 1;
      }
    }, interval);

    return () => window.clearInterval(id);
  }, [interval]);

  return hasResolved;
}
