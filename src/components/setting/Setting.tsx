import { useRef, useState } from "react";
import Overlay from "../Overlay";
import { useOutsideClick } from "../useOutsideClick";
import useColorMode from "../../hooks/useColorMode";
import { BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { MdDone } from "react-icons/md";

export type SettingType = "Appearance" | "Language";

export default function Setting() {
  const [openSettings, setOpenSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const [colorMode, setColorMode] = useColorMode();
  // const { setColorMode } = useAppContext();

  useOutsideClick(settingsRef, () => {
    setOpenSettings(false);
  });

  return (
    <div className="z-50 h-fit flex items-center justify-start gap-4 fixed bottom-5 xl:top-5 xl:right-10 right-5">
      <button
        type="button"
        className=" p-3 rounded-full hover:bg-gray-100 hover:dark:bg-slate-800"
        onClick={() => {
          setOpenSettings(true);
        }}
      >
        {colorMode === "light" ? (
          <BiSun className="text-[#0EA5E9] h-6 w-6" />
        ) : (
          <BsMoonStars className="text-[#0EA5E9] h-5 w-5" />
        )}
      </button>
      <div className="relative">
        {openSettings && (
          <>
            <Overlay onClose={() => setOpenSettings(false)} />
            <div
              ref={settingsRef}
              className="z-10 pb-1 absolute bottom-5 sm:top-5 right-7 w-[300px] h-fit bg-card-light-mode dark:bg-card-dark-mode rounded-md shadow-custom"
            >
              <div className="mb-1 flex items-center justify-center p-3 border-b-[1px] border-solid border-slate-200 dark:border-slate-700">
                <h2 className="text-lg text-title-light-mode dark:text-white">
                  Appearance
                </h2>
              </div>

              <button
                onClick={() => {
                  setColorMode("dark");
                  setOpenSettings(false);
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
                  setOpenSettings(false);
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

              {/*  */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
