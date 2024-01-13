import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage<string>(
    "color-mode-portfolio",
    localStorage.getItem("color-mode-portfolio") || "light"
  );

  useEffect(() => {
    const bodyClasses = window.document.body.classList;

    if (colorMode === "dark") {
      bodyClasses.add("dark");
    } else {
      bodyClasses.remove("dark");
    }
  }, [colorMode]);

  return [colorMode, setColorMode] as [typeof colorMode, typeof setColorMode];
}

export default useColorMode;
