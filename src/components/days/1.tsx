import { motion } from "framer-motion";
import BlogPost from "../BlogPost";

const Day1 = ({
  chosenDay,
  setChosenDay,
}: {
  chosenDay: number;
  setChosenDay: (day: number) => void;
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <BlogPost
      title="Step 1 - Analyze Your Account"
      chosenDay={chosenDay}
      setChosenDay={setChosenDay}
    >
      <motion.p className="mb-4" variants={itemVariants}>
        Social media reflects how we communicate with the world and can impact
        your career, reputation, and connections if used intentionally. Your
        online presence can either work for or against you.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Today's task:
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        Analyze your profile honestly to understand where you're starting from.
      </motion.p>

      <motion.ol
        className="list-decimal pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          Take a screenshot of your profile
        </motion.li>
        <motion.li variants={listItemVariants}>
          What type of account is this? What content am I already casting? How’s
          my engagement? Do I like my account?
        </motion.li>
        <motion.li variants={listItemVariants}>
          Find 5-10 accounts you admire. Compare their tone, style, and
          consistency to yours.
        </motion.li>
      </motion.ol>
    </BlogPost>
  );
};

export default Day1;
