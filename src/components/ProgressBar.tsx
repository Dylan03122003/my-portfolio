interface Props {
  percentNumber: number;
  bgProgressColor?: string;
  bgBarColor?: string;
}

const ProgressBar = ({ percentNumber, bgProgressColor, bgBarColor }: Props) => {
  return (
    <div className={`w-full h-fit bg-gray-200 rounded-md ${bgBarColor}`}>
      <div
        style={{ width: `${percentNumber}%` }}
        className={`h-2 rounded-md ${bgProgressColor}`}
      ></div>
    </div>
  );
};

export default ProgressBar;
