import { HiLanguage } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { Language } from "../../context/appContext";
import { useAppContext } from "../../hooks/useAppContext";
import BackToSettings from "./BackToSettings";
import { SettingType } from "./Setting";

interface Props {
  settingType: SettingType | null;
  onClick: () => void;
  onBack: () => void;
  onCloseSettings: () => void;
}

const LanguageChange = ({
  settingType,
  onClick,
  onBack,
  onCloseSettings,
}: Props) => {
  const { state, dispatch } = useAppContext();

  const handleLanguageChange = (language: Language) => {
    dispatch({ type: "SwitchLanguage", toLanguage: language });
  };

  return (
    <>
      {!settingType && (
        <button
          onClick={onClick}
          type="button"
          className="w-full flex items-center justify-between p-2 hover:bg-slate-100 hover:dark:bg-slate-700  cursor-pointer "
        >
          <div className="flex items-center gap-4">
            <HiLanguage className="w-6 h-6 text-text-light-mode dark:text-text-dark-mode" />
            <p className="text-text-light-mode dark:text-text-dark-mode">
              Language: <span>{state.currentLanguage}</span>
            </p>
          </div>
          <IoIosArrowForward className="w-5 h-5 text-text-light-mode dark:text-text-dark-mode" />
        </button>
      )}

      {settingType && settingType === "Language" && (
        <div>
          <BackToSettings settingText="Language" onBack={onBack} />
          <button
            onClick={() => {
              handleLanguageChange(Language.EN);
              onBack();
              onCloseSettings();
            }}
            className="w-full flex items-center gap-4 p-2 hover:bg-slate-100 hover:dark:bg-slate-700"
          >
            <MdDone
              className={`${
                state.currentLanguage === Language.EN
                  ? "opacity-100"
                  : "opacity-0"
              } w-5 h-5 text-text-light-mode dark:text-text-dark-mode`}
            />
            <p className="text-text-light-mode dark:text-text-dark-mode">
              English
            </p>
          </button>

          <button
            onClick={() => {
              handleLanguageChange(Language.VN);
              onBack();
              onCloseSettings();
            }}
            className="w-full flex items-center gap-4 p-2 hover:bg-slate-100 hover:dark:bg-slate-700 "
          >
            <MdDone
              className={`${
                state.currentLanguage === Language.VN
                  ? "opacity-100"
                  : "opacity-0"
              } w-5 h-5 text-text-light-mode dark:text-text-dark-mode`}
            />
            <p className="text-text-light-mode dark:text-text-dark-mode">
              Vietnam
            </p>
          </button>
        </div>
      )}
    </>
  );
};

export default LanguageChange;
