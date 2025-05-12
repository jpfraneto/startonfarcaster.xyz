import { motion } from "framer-motion";
import { ReactNode } from "react";
import Buttons from "./Buttons"; // Import the Buttons component

interface BlogPostProps {
  title: string;
  children: ReactNode;
  chosenDay: number; // Add these props
  setChosenDay: (day: number) => void; // Add these props
}

const BlogPost = ({
  title,
  children,
  chosenDay,
  setChosenDay,
}: BlogPostProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4 py-2 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 mt-2 text-[#433173] uppercase text-center"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        variants={itemVariants}
      >
        {title}
      </motion.h2>

      <div className="prose prose-invert max-w-none w-full text-[#433173]">
        {children}
      </div>

      {/* Add navigation buttons at the bottom */}
      <motion.div variants={itemVariants} className="w-full">
        <Buttons chosenDay={chosenDay} setChosenDay={setChosenDay} />
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;
