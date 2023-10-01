import ProgressBar from "./ProgressBar";

interface Props {
  name: string;
  photo: string;
  confidentLevel: number;
  className?: string;
}

const SkillItem = ({ name, photo, confidentLevel, className }: Props) => {
  function getWidth() {
    if (name === "Firebase") return "w-[50px] sm:w-[70px]";
    if (name === "Express") return "w-[100px] sm:w-[140px]";
    if (name === "C") return "w-[50px] sm:w-[90px]";

    return "w-[60px] sm:w-[100px]";
  }

  return (
    <div
      className={`flex flex-col justify-between bg-card-light-mode dark:bg-card-dark-mode rounded-md p-4 shadow-custom ${className}`}
    >
      <img
        className={`${getWidth()} mx-auto pointer-events-none`}
        src={photo}
        alt="skill-photo"
      />
      <div className="mt-7">
        <div className="flex items-center justify-between mb-2">
          <p className="dark:text-text-dark-mode text-text-light-mode font-medium">
            {name}
          </p>
          <p className="dark:text-text-dark-mode text-text-light-mode font-medium">
            {confidentLevel}%
          </p>
        </div>
        <ProgressBar
          percentNumber={confidentLevel}
          bgProgressColor="bg-blue-300"
          bgBarColor="bg-[#F0F0F0] dark:bg-gray-400"
        />
      </div>
    </div>
  );
};

export default SkillItem;
