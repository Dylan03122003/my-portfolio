import { BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { useAppContext } from "../../hooks/useAppContext";
import useColorMode from "../../hooks/useColorMode";
import BackToSettings from "./BackToSettings";
import { SettingType } from "./Setting";

interface Props {
  settingType: SettingType | null;
  onClick: () => void;
  onBack: () => void;
  onCloseSettings: () => void;
}

const ColorMode = ({
  settingType,
  onClick,
  onBack,
  onCloseSettings,
}: Props) => {
  const { setColorMode } = useAppContext();
  const [colorMode] = useColorMode();

  return (
    <>
      {!settingType && (
        <button
          onClick={onClick}
          type="button"
          className="w-full flex items-center justify-between p-2 hover:bg-slate-100 hover:dark:bg-slate-700  cursor-pointer"
        >
          <div className="flex items-center gap-4">
            {colorMode === "light" ? (
              <BiSun className="text-[#0EA5E9] h-6 w-6" />
            ) : (
              <BsMoonStars className="text-[#0EA5E9] h-5 w-5" />
            )}
            <p className="text-text-light-mode dark:text-text-dark-mode">
              Appearance: <span>{colorMode}</span>
            </p>
          </div>
          <IoIosArrowForward className="w-5 h-5 text-text-light-mode dark:text-text-dark-mode" />
        </button>
      )}

      {settingType && settingType === "Appearance" && (
        <div>
          <BackToSettings settingText="Appearance" onBack={onBack} />
          <button
            onClick={() => {
              setColorMode("dark");
              onBack();
              onCloseSettings();
              // onBack();
            }}
            className="w-full flex items-center gap-4 p-2 hover:bg-slate-100 hover:dark:bg-slate-700"
          >
            <MdDone
              className={`${
                colorMode === "dark" ? "opacity-100" : "opacity-0"
              } w-5 h-5 text-text-light-mode dark:text-text-dark-mode`}
            />
            <p className="text-text-light-mode dark:text-text-dark-mode">
              Dark theme
            </p>
          </button>

          <button
            onClick={() => {
              setColorMode("light");
              onBack();
              onCloseSettings();
              // onBack();
            }}
            className="w-full flex items-center gap-4 p-2 hover:bg-slate-100 hover:dark:bg-slate-700 "
          >
            <MdDone
              className={`${
                colorMode === "light" ? "opacity-100" : "opacity-0"
              } w-5 h-5 text-text-light-mode dark:text-text-dark-mode`}
            />{" "}
            <p className="text-text-light-mode dark:text-text-dark-mode">
              Light theme
            </p>
          </button>
        </div>
      )}
    </>
  );
};

export default ColorMode;
