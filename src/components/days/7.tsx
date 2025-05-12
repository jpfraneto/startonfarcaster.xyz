import { motion } from "framer-motion";
import BlogPost from "../BlogPost";
import sdk from "@farcaster/frame-sdk";

const Day7 = ({
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
      title="Step 7 - Before/After"
      chosenDay={chosenDay}
      setChosenDay={setChosenDay}
    >
      <motion.p className="mb-4" variants={itemVariants}>
        Today's task: Take a screenshot of your profile — both before and after
        this guide.
      </motion.p>

      <motion.p
        className="mb-4 italic"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Recast this mini app and share your transformation. Every week, I'll
        reward the best ones with USDC!
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Farcaster Features to Know:
      </motion.h3>

      <motion.ul
        className="list-disc pl-6 mb-6 space-y-2"
        variants={itemVariants}
      >
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Casts, Replies, Recasts, Likes:</span> the
          core ways to post and engage
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Mini-apps:</span> interactive tools like
          polls, games, and links
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Channels:</span> topic-based spaces (you
          can even create your own)
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Starter Packs:</span> sets of users to
          follow when you're new
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Warps:</span> points used for rewards,
          apps, and upgrades
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Verified Wallets:</span> connect your
          crypto wallet
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Farcaster Wallet:</span> use it to explore
          decentralized apps
        </motion.li>
      </motion.ul>

      <motion.p className="mb-4" variants={itemVariants}>
        Farcaster is built for connection — with people, ideas, and projects.
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        I hope this guide helped you feel more confident and excited to share
        your voice.
      </motion.p>

      <motion.p
        className="font-bold"
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        See you out there!
      </motion.p>

      <motion.p
        className="font-bold"
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400 }}
        onClick={() => {
          sdk.actions.viewProfile({
            fid: 10081,
          });
        }}
      >
        Kate Kornish
      </motion.p>
    </BlogPost>
  );
};

export default Day7;
