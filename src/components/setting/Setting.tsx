import { useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Overlay from "../Overlay";
import Tooltip from "../ui/Tooltip";
import { useOutsideClick } from "../useOutsideClick";
import ColorMode from "./ColorMode";
import LanguageChange from "./LanguageChange";

export type SettingType = "Appearance" | "Language";

export default function Setting() {
  const [openSettings, setOpenSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const [settingType, setSettingType] = useState<SettingType | null>(null);

  useOutsideClick(settingsRef, () => {
    setOpenSettings(false);
  });

  return (
    <div className="h-fit flex items-center justify-start gap-4 fixed bottom-5 lg:top-5 lg:right-10 right-5">
      <Tooltip title="Settings">
        <button
          type="button"
          className="p-3 rounded-full hover:bg-gray-100 hover:dark:bg-slate-800"
          onClick={() => {
            setOpenSettings(true);
          }}
        >
          <IoSettingsOutline className="w-7 h-7 text-title-light-mode dark:text-white cursor-pointer" />
        </button>
      </Tooltip>
      <div className="relative">
        {openSettings && (
          <>
            <Overlay onClose={() => setOpenSettings(false)} />
            <div
              ref={settingsRef}
              className="z-10 pb-1 absolute bottom-5 sm:top-5 right-7 w-[300px] h-fit bg-card-light-mode dark:bg-card-dark-mode rounded-md shadow-custom"
            >
              {!settingType && (
                <div className="mb-1 flex items-center justify-center p-3 border-b-[1px] border-solid border-slate-200 dark:border-slate-700">
                  <h2 className="text-lg text-title-light-mode dark:text-white">
                    Settings
                  </h2>
                </div>
              )}
              <ColorMode
                settingType={settingType}
                onClick={() => setSettingType("Appearance")}
                onBack={() => setSettingType(null)}
                onCloseSettings={() => setOpenSettings(false)}
              />
              <LanguageChange
                settingType={settingType}
                onClick={() => setSettingType("Language")}
                onBack={() => setSettingType(null)}
                onCloseSettings={() => setOpenSettings(false)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
