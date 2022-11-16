import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const sizeHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    sizeHandler();

    window.addEventListener("resize", sizeHandler);

    return () => {
      window.removeEventListener("resize", sizeHandler);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
