import { createContext } from "react";
import { AppActions } from "./appActions";

export enum Language {
  EN = "en",
  VN = "vn",
}

export interface AppContextState {
  currentLanguage: Language;
}

interface AppContextProps {
  state: AppContextState;
  dispatch: React.Dispatch<AppActions>;
  getText: (text: string) => string;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default AppContext;
