import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  width?: string;
  top?: string;
}

export default function Tooltip({
  children,
  title,
  width,
  top = "top-20",
}: Props) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="relative">
      <div
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {children}
      </div>
      <div
        className={`z-10 ${width} absolute ${top} p-2 text-center bg-gray-600 text-white dark:bg-slate-600 left-[50%] -translate-x-[50%] ${
          isHovering ? "opacity-80" : "opacity-0"
        } transition-all rounded-md`}
      >
        {title}
      </div>
    </div>
  );
}
