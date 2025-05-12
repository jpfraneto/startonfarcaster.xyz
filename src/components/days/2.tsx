import { motion } from "framer-motion";
import BlogPost from "../BlogPost";
import { useEffect, useState } from "react";

const Day2 = ({
  chosenDay,
  setChosenDay,
}: {
  chosenDay: number;
  setChosenDay: (day: number) => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

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
      title="Step 2 - Build your Identity"
      chosenDay={chosenDay}
      setChosenDay={setChosenDay}
    >
      <motion.p className="mb-4" variants={itemVariants}>
        To avoid the "spam" label or gain rewards, start by building a clear
        online personality.
      </motion.p>

      <motion.p className="mb-4" variants={itemVariants}>
        To build a strong online presence, focus on your values, purpose, then
        on your tone, style and content. If it's not clear for people who you
        are within a second, they won't pause to figure it out. They'll just
        scroll past and subconsciously file you under the spam label.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Account Formats
      </motion.h3>

      <motion.ul
        className="list-disc pl-6 mb-6 space-y-4"
        variants={containerVariants}
      >
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Personal-professional blog</span> (your
          face, your thoughts)
          <div
            className={`grid ${
              isMobile ? "grid-cols-1" : "grid-cols-2"
            } gap-2 mt-2`}
          >
            <motion.img
              src="/assets/2/2.jpeg"
              alt="Personal blog example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
            <motion.img
              src="/assets/2/3.jpeg"
              alt="Personal blog example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
            <motion.img
              src="/assets/2/4.jpeg"
              alt="Personal blog example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
            <motion.img
              src="/assets/2/5.jpeg"
              alt="Personal blog example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
          </div>
        </motion.li>

        <motion.li variants={listItemVariants}>
          <span className="font-bold">Fictional persona</span> (a hyper version
          of you or your alter ego, your dog or imaginary friend etc)
          <div
            className={`grid ${
              isMobile ? "grid-cols-1" : "grid-cols-2"
            } gap-2 mt-2`}
          >
            <motion.img
              src="/assets/2/6.jpeg"
              alt="Fictional persona example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
            <motion.img
              src="/assets/2/7.jpeg"
              alt="Fictional persona example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
          </div>
        </motion.li>

        <motion.li variants={listItemVariants}>
          <span className="font-bold">Anonymous / aesthetic</span> (vibes +
          short texts)
          <div
            className={`grid ${
              isMobile ? "grid-cols-1" : "grid-cols-2"
            } gap-2 mt-2`}
          >
            <motion.img
              src="/assets/2/8.jpeg"
              alt="Anonymous account example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
            <motion.img
              src="/assets/2/9.jpeg"
              alt="Anonymous account example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
          </div>
        </motion.li>

        <motion.li variants={listItemVariants}>
          <span className="font-bold">Project page</span>
          <div
            className={`grid ${
              isMobile ? "grid-cols-1" : "grid-cols-2"
            } gap-2 mt-2`}
          >
            <motion.img
              src="/assets/2/10.jpeg"
              alt="Project page example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
            <motion.img
              src="/assets/2/11.jpeg"
              alt="Project page example"
              className="w-full rounded-lg"
              variants={itemVariants}
            />
          </div>
        </motion.li>
      </motion.ul>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Any identity (fictional or real) is built from "identity bricks"
      </motion.h3>

      <motion.ol
        className="list-decimal pl-6 mb-6 space-y-2"
        variants={containerVariants}
      >
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Distinct Traits:</span> Your unique quirks
          and features that make you memorable.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Location / Origin:</span> Where you're
          from and your cultural background.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Education / Background:</span> What you've
          learned and how.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Social or Political Stance:</span> Your
          views on society and current issues.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Hobbies / Interests:</span> What you enjoy
          doing when not working.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Inner Circle:</span> Your closest
          relationships and family.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Outer Circle:</span> People you interact
          with publicly.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Social Status:</span> Your financial
          situation and lifestyle.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Social Behavior:</span> How you act in
          groups and social settings.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Personality Traits:</span> Your strengths
          and flaws as a person.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Taste:</span> Your preferences in music,
          style, and aesthetics.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Profession:</span> Your job and career
          progress.
        </motion.li>
        <motion.li variants={listItemVariants}>
          <span className="font-bold">Vulnerabilities:</span> Weaknesses you
          share and how you express them.
        </motion.li>
      </motion.ol>

      <motion.p className="mb-4" variants={itemVariants}>
        Each brick contributes to how others perceive you and should be
        reflected in your content. If either is missing or unclear, people won't
        engage.
      </motion.p>

      <motion.h3
        className="text-xl font-bold mt-6 mb-3"
        variants={itemVariants}
      >
        Today's task: Analize your social media identity.
      </motion.h3>

      <motion.ol
        className="list-decimal pl-6 mb-6 space-y-2"
        variants={containerVariants}
      >
        <motion.li variants={listItemVariants}>
          Choose your account format: personal, fictional, anonymous?
        </motion.li>
        <motion.li variants={listItemVariants}>
          Define your motivation:do you want to be an influencer? to find new
          projects and friends? just to have a diary, or exploring your alter
          ego?
        </motion.li>
        <motion.li variants={listItemVariants}>
          Write down your "identity bricks" then analyze which of them you are
          ready to expose online.
        </motion.li>
      </motion.ol>
    </BlogPost>
  );
};

export default Day2;
