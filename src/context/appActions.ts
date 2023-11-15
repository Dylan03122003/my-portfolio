import { Language } from "../context/appContext";

type SwitchLanguage = {
  type: "SwitchLanguage";
  toLanguage: Language;
};

export type AppActions = SwitchLanguage;
