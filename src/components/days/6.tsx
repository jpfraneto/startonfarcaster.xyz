import { motion } from "framer-motion";
import BlogPost from "../BlogPost";

const Day6 = ({
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
      title="Step 6 - Adjustments"
      chosenDay={chosenDay}
      setChosenDay={setChosenDay}
    >
      <motion.p className="mb-4" variants={itemVariants}>
        Your real life comes first — your digital presence is simply a
        reflection of it. Start by finding real friends, and eventually, your
        community will reflect you better than any bio can.
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        In this pre final step, I'll walk you through my own Farcaster journey.
      </motion.p>

      <motion.img
        src="/assets/3/8.jpeg"
        alt="My Farcaster Journey"
        className="w-full rounded-lg my-4"
        variants={itemVariants}
      />

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Step 1: Profile
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        I joined Farcaster in June 2024, not knowing anyone except my friend
        @klusya.
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        I wrote a clear bio and found 10–15 accounts I genuinely liked. I
        studied what made them stand out and borrowed what fit me.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Step 2: Identity & Motivation
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        I joined Farcaster to meet people in crypto and tech, become a project
        ambassador, and eventually build a startup, while sharing my life as a
        flutist.
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        I picked parts of my identity that felt natural to share (like music,
        learning, and daily thoughts) and kept more private topics off the
        timeline (like politics or family).
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Step 3: Style
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        I created themes that felt authentic and let my content evolve with real
        life. Lowercase writing, no parentheses, and the occasional silly emoji.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Step 4: Communication
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        I started small, engaged thoughtfully, and adjusted based on how people
        responded.
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        If someone didn't reply after 2–3 attempts, I moved on. No hard
        feelings.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Step 5: Adjusting
      </motion.h3>

      <motion.p className="mb-4" variants={itemVariants}>
        Farcaster has its own rhythm — learn it, adapt to it, but always stay
        true to yourself.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Today's task: Keep doing adjustments till you love your account 100%
      </motion.h3>

      <motion.ol
        className="list-decimal pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Keep tweaking your bio and profile</span>{" "}
          until it feels 100% like you.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Build real connections</span> — talk in
          DMs, grab virtual coffees, meet IRL when you can.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Plan your real life first</span>, then
          your virtual one. Stay true, stay consistent.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Keep creating.</span>
        </motion.li>
      </motion.ol>
    </BlogPost>
  );
};

export default Day6;
