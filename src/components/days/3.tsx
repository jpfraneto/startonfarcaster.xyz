import { motion } from "framer-motion";
import BlogPost from "../BlogPost";

const Day3 = ({
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
      title="Step 3: Good Looking Account"
      chosenDay={chosenDay}
      setChosenDay={setChosenDay}
    >
      <motion.p className="mb-4" variants={itemVariants}>
        Every community has its own unspoken rules about what looks "cool" and
        what doesn't. If you want to be seen and respected in a specific space,
        you have to learn and play by its visual language.
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        If you don't, you can always do things your own way — but then don't be
        surprised if you're not getting the recognition or connections you hoped
        for.
      </motion.p>

      <motion.img
        src="/assets/3/2.jpeg"
        alt="Username Examples"
        className="w-full rounded-lg mb-6"
        variants={itemVariants}
      />

      <motion.p
        className="mb-4 font-bold"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        Today's task: Clean up your profile.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        1. Username
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        Keep it clean, readable, and memorable.
      </motion.p>

      <motion.p className="mb-4 font-bold" variants={itemVariants}>
        Avoid:{" "}
        <span className="font-normal">
          Numbers, emojis, weird symbols, random words, and unnecessary
          complexity
        </span>
      </motion.p>

      <motion.p className="mb-4 font-bold" variants={itemVariants}>
        What works:{" "}
        <span className="font-normal">
          Short, simple names or subtle personal references
        </span>
      </motion.p>
      <motion.img
        src="/assets/3/3.jpeg"
        alt="Username Examples"
        className="w-full rounded-lg mb-6"
        variants={itemVariants}
      />

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        2. Profile Picture
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        Your pfp should align with your tone.
      </motion.p>

      <motion.p className="mb-4 font-bold" variants={itemVariants}>
        Avoid:{" "}
        <span className="font-normal">
          Cheap or blurry art, dark/cropped images, or overly busy visuals
        </span>
      </motion.p>

      <motion.p className="mb-4 font-bold" variants={itemVariants}>
        Good options:{" "}
        <span className="font-normal">
          High-quality portraits, minimalist designs, or crypto-style art
        </span>
      </motion.p>

      <motion.img
        src="/assets/3/5.jpeg"
        alt="Profile Picture Examples"
        className="w-full rounded-lg mb-6"
        variants={itemVariants}
      />

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        3. Bio
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        Be clear and show your personality in one or two phrases.
      </motion.p>

      <motion.p className="mb-4 font-bold" variants={itemVariants}>
        Avoid:{" "}
        <span className="font-normal">
          Buzzwords, too many emojis, and generic phrases
        </span>
      </motion.p>

      <motion.p className="mb-4 font-bold" variants={itemVariants}>
        What to include:{" "}
        <span className="font-normal">
          What you do, a hook, and optional links
        </span>
      </motion.p>
      <motion.img
        src="/assets/3/6.jpeg"
        alt="Bio Examples"
        className="w-full rounded-lg mb-6"
        variants={itemVariants}
      />

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        4. Following Ratio
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        This matters! It shows your social value.
      </motion.p>

      <motion.p className="mb-4 font-bold" variants={itemVariants}>
        Avoid:{" "}
        <span className="font-normal">
          Following too many, random pages, or inactive accounts
        </span>
      </motion.p>

      <motion.p className="mb-4 font-bold" variants={itemVariants}>
        Ideal:{" "}
        <span className="font-normal">
          30% following / 70% followers. Keep it focused on quality accounts
        </span>
      </motion.p>
      <motion.img
        src="/assets/3/8.jpeg"
        alt="Following Ratio Example"
        className="w-full rounded-lg mb-6"
        variants={itemVariants}
      />

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Checklist to clean up your account:
      </motion.h3>

      <motion.ol
        className="list-decimal pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Check your username:</span> Remove all
          symbols, numbers, emojis. Keep it clean and brandable.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Update your profile picture:</span> Make
          sure it fits your tone and is visually sharp and intentional.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Rewrite your bio:</span> Add personality,
          purpose, and a hint of what you do.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Clean up your following list:</span>{" "}
          Unfollow empty accounts. Focus on building a high-signal community
          around you.
        </motion.li>
      </motion.ol>
    </BlogPost>
  );
};

export default Day3;
