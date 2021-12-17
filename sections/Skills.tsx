import { NextPage } from "next";
import { BiTimer } from "react-icons/bi";
import { FcOvertime } from "react-icons/fc";
import { AiOutlineTeam, AiOutlineComment } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { RiEmotionHappyLine } from "react-icons/ri";
const { motion, useAnimation } = require("framer-motion");
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "../data/animation";
import { useEffect } from "react";

const Skills: NextPage = () => {
  const delayedFadeIn = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      delayedFadeIn.start((i: any) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: i * 0.4,
        },
      }));
    }
  }, [delayedFadeIn, inView]);
  return (
    <section className="container max-w-6xl px-2 mx-auto mt-8 font-lines ">
      <h2
        id="skills"
        className="pt-8 text-4xl font-bold tracking-wider text-center m-14 font-headers"
        ref={ref}
      >
        My Skills
      </h2>
      <div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={fadeInUp.initial}
            custom={1}
            animate={delayedFadeIn}
          >
            <AiOutlineComment className="w-14 h-14" />
            <h3 className="my-3 text-2xl font-bold tracking-wider font-headers">
              Communication
            </h3>
            <p className="max-w-md mx-auto">
              Providing solutions to different departments and working with
              diverse teams requires a lot of meetings and reportings. this
              sharpened my communication skills
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={fadeInUp.initial}
            custom={2}
            animate={delayedFadeIn}
          >
            <GiBrain className="w-14 h-14" />
            <h3 className="my-3 text-2xl font-bold tracking-wider font-headers">
              Critical Thinking
            </h3>
            <p className="max-w-md mx-auto">
              Working on digitalization solutions means that non-technical
              clients define the needs. They trust&nbsp;me to make sensible and
              well-thought-out technical decisions.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={fadeInUp.initial}
            custom={3}
            animate={delayedFadeIn}
          >
            <FcOvertime className="w-14 h-14" />

            <h3 className="my-3 text-2xl font-bold tracking-wider font-headers">
              Time Management
            </h3>
            <p className="max-w-md mx-auto">
              I use{" "}
              <a
                href="https://www.atlassian.com/software/jira"
                rel="noreferrer"
                target="_blank"
              >
                JIRA ®
              </a>{" "}
              to Plan, track, and manage projects. Creating sprints and
              releases. assigning tasks and delegating projects taught me the
              importance of time.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={fadeInUp.initial}
            custom={4}
            animate={delayedFadeIn}
          >
            <BiTimer className="w-14 h-14" />

            <h3 className="my-3 text-2xl font-bold tracking-wider font-headers">
              Punctuality
            </h3>
            <p className="max-w-md mx-auto">
              Working in the pharmaceutical industry where laws and demands are
              continuously changing requires that all of our applications be
              easily updated and adhere to strict deadlines.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={fadeInUp.initial}
            custom={5}
            animate={delayedFadeIn}
          >
            <AiOutlineTeam className="w-14 h-14" />
            <h3 className="my-3 text-2xl font-bold tracking-wider font-headers">
              Teamwork
            </h3>
            <p className="max-w-md mx-auto">
              Teamwork is vital. As the lead and a member of the Developers
              team. I have to collaborate effectively with subordinates and
              assign work where communication is key.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={fadeInUp.initial}
            custom={6}
            animate={delayedFadeIn}
          >
            <RiEmotionHappyLine className="w-14 h-14" />
            <h3 className="my-3 text-2xl font-bold tracking-wider font-headers">
              E.Q
            </h3>
            <p className="max-w-md mx-auto">
              Understanding one&apos;s own emotions. and using them in a
              positive way to relive stress. and communicate effectively to
              overcome challenges is a major factor for teamwork success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
