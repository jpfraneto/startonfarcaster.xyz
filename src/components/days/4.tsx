import { motion } from "framer-motion";
import BlogPost from "../BlogPost";

const Day4 = ({
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
      title="Step 4 - Content as Your Personal Magazine"
      chosenDay={chosenDay}
      setChosenDay={setChosenDay}
    >
      <motion.p className="mb-4" variants={itemVariants}>
        You've defined your identity bricks and cleaned up your profile. So what
        do you cast? Content buckets are your answer. They're recurring themes
        based on your identity bricks — what you care about, build, think, and
        live. Buckets bring structure and consistency.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Why people follow:
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        Not just for information — but for you, your story, your perspective.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Avoid low-effort content:
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        Casts with no context, personality or meaning, bare links, stock
        phrases, generic takes.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Good content does one of these:
      </motion.h3>

      <motion.ul
        className="list-disc pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          Shares something useful
        </motion.li>
        <motion.li variants={listItemVariants}>Makes people think</motion.li>
        <motion.li variants={listItemVariants}>
          Tells a personal story
        </motion.li>
        <motion.li variants={listItemVariants}>
          Entertains or inspires
        </motion.li>
      </motion.ul>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Today's task: Create your personal magazine.
      </motion.h3>

      <motion.ol
        className="list-decimal pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          Look at your favorite 5 creators — what are their content buckets?
        </motion.li>
        <motion.li variants={listItemVariants}>
          Choose 5–7 content buckets that reflect your identity.
          <br />
          <span className="font-bold">Examples:</span> what I'm building, daily
          moments, books / sports, memes, matcha.
        </motion.li>
      </motion.ol>

      <motion.p className="mb-4" variants={itemVariants}>
        Your buckets can evolve and depend on what is going on in your life.
      </motion.p>
    </BlogPost>
  );
};

export default Day4;
