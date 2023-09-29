import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Slider = () => {
  const skills = [
    "React",
    "Typescript",
    "JavaScript",
    "NodeJS",
    "Express",
    "CSS",
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      whileTap={{ cursor: "grabbing" }}
      ref={carousel}
      className="cursor-grab overflow-hidden bg-orange-300"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width - 300 }}
        className="flex gap-5 bg-blue-200 p-4"
      >
        {skills.map((skill) => (
          <motion.div
            className="min-h-[300px] min-w-[300px] bg-red-400 flex items-center justify-center  text-2xl"
            key={skill}
          >
            <div className="pointer-events-none">{skill}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
