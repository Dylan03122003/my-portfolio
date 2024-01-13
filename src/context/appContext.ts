import React, { createContext } from "react";
import { AppActions } from "./appActions";

export enum Language {
  EN = "en",
  VN = "vn",
}

export interface AppContextState {
  currentLanguage: Language;
  currentColorMode: string;
}

interface AppContextProps {
  state: AppContextState;
  dispatch: React.Dispatch<AppActions>;
  getText: (text: string) => string;
  setColorMode: (colorMode: string) => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default AppContext;
