import { useReducer } from "react";
import AppContext, { Language } from "../context/appContext";
import useColorMode from "../hooks/useColorMode";
import { getCurrentColorMode } from "../utils/getColorMode";
import { getText } from "../utils/translations";
import { appReducer } from "./appReducer";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, {
    currentLanguage: Language.EN,
    currentColorMode: getCurrentColorMode(),
  });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        getText: (text: string) => getText(text, state.currentLanguage),
        setColorMode: useColorMode()[1],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
