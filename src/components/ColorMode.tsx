import { BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import useColorMode from "../hooks/useColorMode";
const ColorMode = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="fixed bottom-5 sm:top-5 right-10">
      <button
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      >
        {colorMode === "dark" && (
          <BsMoonStars className="text-[#0EA5E9] h-5 w-5" />
        )}
        {colorMode === "light" && <BiSun className="text-[#0EA5E9] h-6 w-6" />}
      </button>
    </div>
  );
};
// 0EA5E9
// gray: 14344C
export default ColorMode;
