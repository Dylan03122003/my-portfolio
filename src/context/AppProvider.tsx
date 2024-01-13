import { useReducer } from "react";
import AppContext, { Language } from "../context/appContext";
import useColorMode from "../hooks/useColorMode";
import { getText } from "../utils/translations";
import { appReducer } from "./appReducer";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useColorMode();

  const [state, dispatch] = useReducer(appReducer, {
    currentLanguage: Language.EN,
    currentColorMode: colorMode,
  });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        getText: (text: string) => getText(text, state.currentLanguage),
        setColorMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
