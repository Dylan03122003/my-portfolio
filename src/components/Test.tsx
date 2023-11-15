import React, { useCallback, useEffect, useRef, useState } from "react";

const ScrollComponent: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<
    "up" | "down" | "initial"
  >("initial");
  const prevScrollY = useRef<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    prevScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <p>Scroll Direction: {scrollDirection}</p>
      {/* Your other component content */}
    </div>
  );
};

export default ScrollComponent;
