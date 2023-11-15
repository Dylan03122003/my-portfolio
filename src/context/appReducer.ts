import { AppContextState } from "../context/appContext";
import { AppActions } from "./appActions";

export const appReducer = (
  state: AppContextState,
  action: AppActions
): AppContextState => {
  switch (action.type) {
    case "SwitchLanguage":
      return {
        ...state,
        currentLanguage: action.toLanguage,
      };
    default:
      return state;
  }
};
