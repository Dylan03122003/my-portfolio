import { motion } from "framer-motion";
import { createPortal } from "react-dom";

import React from "react";

type BackdropProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return createPortal(
    <motion.div
      className="fixed z-50 top-0 left-0 h-full w-full bg-[#00000079] flex items-center justify-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>,
    document.getElementById("portal")!
  );
};

export default Backdrop;
