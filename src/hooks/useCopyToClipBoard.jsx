import { useCallback, useState } from "react";

function oldSchoolCopy(text) {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

export default function useCopyToClipBoard() {
  const [state, setState] = useState(null);

  const copyToClipBoard = useCallback((value) => {
    const handleCopy = async () => {
      try {
        if (navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw Error("is not supported");
        }
      } catch {
        oldSchoolCopy(value);
        setState(value);
      }
    };

    handleCopy();
  }, []);

  return [state, copyToClipBoard];
}
