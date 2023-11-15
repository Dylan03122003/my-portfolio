import { useReducer } from "react";
import AppContext, { Language } from "../context/appContext";
import { getText } from "../utils/translations";
import { appReducer } from "./appReducer";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, {
    currentLanguage: Language.EN,
  });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        getText: (text: string) => getText(text, state.currentLanguage),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
