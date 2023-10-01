import ProgressBar from "./ProgressBar";

interface Props {
  name: string;
  photo: string;
  confidentLevel: number;
  className?: string;
}

const SkillItem = ({ name, photo, confidentLevel, className }: Props) => {
  return (
    <div
      className={`bg-card-light-mode dark:bg-card-dark-mode rounded-md p-4 shadow-custom ${className}`}
    >
      <img
        className="w-[60px] sm:w-[100px] mx-auto pointer-events-none"
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
