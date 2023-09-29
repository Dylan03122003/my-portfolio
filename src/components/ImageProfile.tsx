interface Props {
  profileImage: string;
  mt?: string;
  size?: "small" | "medium" | "large";
}
const ImageProfile = ({ profileImage, mt, size = "small" }: Props) => {
  function getWidth() {
    if (size === "small") {
      return "w-20 ";
    } else if (size === "medium") {
      return "w-40 ";
    }
  }

  function getWaveIconSize() {
    if (size === "small") {
      return "text-xl";
    } else if (size === "medium") {
      return "text-3xl";
    }
  }

  function getPosition() {
    if (size === "small") {
      return "-bottom-1 right-0";
    } else if (size === "medium") {
      return "bottom-0 right-1";
    }
  }

  return (
    <div
      className={`relative ${getWidth()}  border-[4px] border-solid border-slate-200 dark:border-[#2a3a52] rounded-full ${mt}`}
    >
      <img src={profileImage} alt="profile" className="w-full rounded-full" />
      <p className={`absolute ${getPosition()} ${getWaveIconSize()}`}>👋</p>
    </div>
  );
};

export default ImageProfile;
