import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { days } from "../lib/constants";
import sdk from "@farcaster/frame-sdk";

interface ButtonsProps {
  chosenDay: number;
  setChosenDay: (day: number) => void;
}

const Buttons: React.FC<ButtonsProps> = ({ chosenDay, setChosenDay }) => {
  const totalDays = 7;
  const [isNearBottom, setIsNearBottom] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const nearBottom = scrollPosition > document.body.scrollHeight - 200;
      setIsNearBottom(nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrevious = () => {
    if (chosenDay > 1) {
      setChosenDay(chosenDay - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (chosenDay < totalDays) {
      setChosenDay(chosenDay + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleViewProfile = () => {
    sdk.actions.viewProfile({ fid: 10081 });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex justify-between w-full gap-4 mt-8 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isNearBottom ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        {/* Previous button */}
        <motion.button
          onClick={handlePrevious}
          disabled={chosenDay <= 1}
          className={`w-full py-3 px-8 rounded-md text-center font-medium transition-all ${
            chosenDay > 1 ? "bg-[#c8b9e0]/60 text-white" : "hidden" // Hide instead of showing disabled
          }`}
          whileHover={{ scale: isNearBottom ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
        >
          Previous
        </motion.button>

        {/* Next button */}
        <motion.button
          onClick={handleNext}
          disabled={chosenDay >= totalDays}
          className={`w-full py-3 px-8 rounded-md text-center font-medium transition-all ${
            chosenDay < totalDays ? "bg-[#c8b9e0] text-white" : "hidden" // Hide instead of showing disabled
          }`}
          whileHover={{ scale: isNearBottom ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
        >
          Next
        </motion.button>
      </motion.div>
      <div className="text-center text-sm text-[#c8b9e0]/70 mt-2 mb-6">
        written by{" "}
        <button
          onClick={handleViewProfile}
          className="text-[#c8b9e0] hover:underline cursor-pointer"
        >
          @katekornish
        </button>
        {"     ·     "}
        <a
          href={days[chosenDay - 1]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c8b9e0] hover:underline"
        >
          original post
        </a>
      </div>
    </AnimatePresence>
  );
};

export default Buttons;
