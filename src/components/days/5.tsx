import { motion } from "framer-motion";
import BlogPost from "../BlogPost";

const Day5 = ({
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
      title="Step 5 - Communication"
      chosenDay={chosenDay}
      setChosenDay={setChosenDay}
    >
      <motion.p className="mb-4" variants={itemVariants}>
        The Rule: Talk Like a Real Person
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        Imagine walking into a room full of strangers in real life. You wouldn't
        just yell random stuff like: "GM", [photo of your dog], "Mini app
        recast", "I want pizza! Any recs?", "Try the Pomodoro Technique!"
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        Online communication works the same. It's not a monologue — it's a
        conversation with real people.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Good Communication Looks Like:
      </motion.h3>

      <motion.ul
        className="list-disc pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          Introduce yourself (ideally in a pinned post or even when you comment
          some cast)
        </motion.li>
        <motion.li variants={listItemVariants}>
          Engage with the context
        </motion.li>
        <motion.li variants={listItemVariants}>
          Ask open-ended questions
        </motion.li>
        <motion.li variants={listItemVariants}>
          Keep it clean and readable
        </motion.li>
      </motion.ul>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        What to Avoid:
      </motion.h3>

      <motion.ul
        className="list-disc pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          Dropping random links, mini apps without context
        </motion.li>
        <motion.li variants={listItemVariants}>
          Generic comments: "Cool!", "Nice!", "Check my profile"
        </motion.li>
        <motion.li variants={listItemVariants}>
          Walls of unbroken text
        </motion.li>
        <motion.li variants={listItemVariants}>Emoji overload</motion.li>
        <motion.li variants={listItemVariants}>
          AI-sounding replies: "Hello sir, I hope you are well"
        </motion.li>
      </motion.ul>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Sounding Natural (for non-native English speakers):
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        Instead of using Google Translate, write in your native language, then
        use ChatGPT like this: "Rewrite this correctly and naturally in
        English." Then edit the result to match your tone.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Today's task: Communicate like a person, not a bot.
      </motion.h3>

      <motion.ul
        className="list-disc pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          Post a pinned intro cast about yourself
        </motion.li>
        <motion.li variants={listItemVariants}>
          Connect with 10 people who share your interests
        </motion.li>
        <motion.li variants={listItemVariants}>
          Communicate like you would with a real friend
        </motion.li>
        <motion.li variants={listItemVariants}>
          Check grammar in ChatGPT before casting
        </motion.li>
        <motion.li variants={listItemVariants}>
          Break long texts into short paragraphs (it's easier to read)
        </motion.li>
        <motion.li variants={listItemVariants}>Go easy on the emojis</motion.li>
      </motion.ul>
    </BlogPost>
  );
};

export default Day5;
