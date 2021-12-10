import { useState, useEffect } from "react";

const useSourceCode = (el) => {
  const [sourceCode, setSourceCode] = useState(null);

  useEffect(() => {
    if (!el.current) {
      return;
    }

    const { parentElement } = el.current;
    const newSourceCode = parentElement.dataset.sourceCode;

    setSourceCode(newSourceCode);
  }, [el, setSourceCode]);

  return sourceCode;
};

export default useSourceCode;
