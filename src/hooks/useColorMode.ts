import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage<string>(
    "color-mode-portfolio",
    "light"
  );

  useEffect(() => {
    const className = "dark";
    const bodyClasses = window.document.body.classList;

    if (colorMode === "dark") {
      bodyClasses.add(className);
    } else {
      bodyClasses.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode] as [typeof colorMode, typeof setColorMode];
}

export default useColorMode;
