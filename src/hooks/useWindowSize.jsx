import { useState, useEffect } from "react";

function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth < 800) {
      return "xs";
    } else if (windowWidth < 991) {
      return "sm";
    } else if (windowWidth < 1220) {
      return "md";
    } else if (windowWidth < 1440) {
      return "lg";
    } else if (windowWidth < 1640) {
      return "xl";
    } else {
      return "2xl";
    }
  }
}

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient
      ? getBreakPoint(window.innerWidth) //👈
      : undefined
  );

  useEffect(() => {
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth)); //👈
    }

    if (isWindowClient) {
      window.addEventListener("resize", setSize);
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
}

export default useWindowSize;