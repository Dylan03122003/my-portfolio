import { Language } from "../context/appContext";
import { useAppContext } from "../hooks/useAppContext";

const LanguageChange = () => {
  const { state, dispatch } = useAppContext();

  const isVNLanguage = () => {
    return state.currentLanguage === Language.VN;
  };

  const handleLanguageChange = (language: Language) => {
    dispatch({ type: "SwitchLanguage", toLanguage: language });
  };

  return (
    <div className="h-fit flex items-center rounded-md">
      <button
        onClick={() => handleLanguageChange(Language.VN)}
        className={`border border-solid border-gray-300 dark:border-gray-600  px-3 py-1 rounded-tl-sm rounded-bl-sm ${
          isVNLanguage()
            ? "bg-blue-100 text-blue-600"
            : "text-text-light-mode dark:text-text-dark-mode"
        }`}
      >
        VN
      </button>
      <button
        onClick={() => handleLanguageChange(Language.EN)}
        className={`border border-solid border-gray-300 dark:border-gray-600 border-l-0 px-3 py-1 rounded-tr-sm rounded-br-sm ${
          !isVNLanguage()
            ? "bg-blue-100 text-blue-600"
            : "text-text-light-mode dark:text-text-dark-mode"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageChange;
