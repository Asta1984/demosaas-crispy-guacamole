import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimateSvg() {
  const [showGif, setShowGif] = useState(false); // State to control GIF display

  return (
    <>
    <div className="h-screen flex items-center justify-center relative">
      {!showGif && (
        <motion.img
          src="spinner.svg"
          alt="Sewantika"
          className="w-24 h-24"
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{
            opacity: 1,
            scale: 5,
            rotate: 360,
          }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          onAnimationComplete={() => setShowGif(true)} // Show GIF after animation completes
        />
      )}

      {showGif && (
        <motion.img
          src="floor2_2.gif"
          alt="GIF"
          className="w-72 h-72 relative items-center justify-center rounded-lg border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}
    </div>
    </>
    
  );
}
