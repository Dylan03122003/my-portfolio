import { useState } from "react";

interface Props {
  title: string;
}

const Tooltip = ({ title }: Props) => {
  const [show, setShow] = useState(false);
  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };
  return (
    <div className="relative">
      <button
        className="px-3 py-1 bg-red-300 rounded-md"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button haha
      </button>
      {show && (
        <p className="absolute top-10 -left-[10%] bg-white w-[120%]">{title}</p>
      )}
    </div>
  );
};

export default Tooltip;
