import Image from "next/image";
import { FC, useEffect } from "react";
import { AiFillProject, AiFillGithub } from "react-icons/ai";
import { ITech } from "../../data/techsinfo";
import TechImage from "./techimage";
const { motion, useAnimation } = require("framer-motion");
import { useInView } from "react-intersection-observer";
import {
  fadeInUp,
  quickFadeIn,
  slideInFromRight,
  stagger,
} from "../../data/animation";

export interface IProject {
  name: string;
  imageName: string;
  imageLabel: string;
  description: string;
  stack: ITech[];
  width?: string;
  height?: string;
  liveUrl: string | null;
  codeUrl: string | null;
}

interface Props {
  project: IProject;
}

const Project: FC<Props> = ({
  project: {
    description,
    imageLabel,
    imageName,
    stack,
    height,
    width,
    codeUrl,
    liveUrl,
    name,
  },
}) => {
  const fadeInControl = useAnimation();
  const slideInControl = useAnimation();
  const delayedFadeIn = useAnimation();

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fadeInControl.start(quickFadeIn.animate);
      slideInControl.start(slideInFromRight.animate);
      delayedFadeIn.start((i: any) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: i * 0.4,
        },
      }));
    }
  }, [fadeInControl, slideInControl, delayedFadeIn, inView]);

  return (
    <div
      className="flex flex-col max-w-lg p-4 mx-auto overflow-hidden shadow-md"
      style={{ background: "#f7f7f7" }}
      ref={ref}
    >
      <h3 className="mb-2 text-xl font-bold tracking-wide text-center font-headers">
        {name}
      </h3>
      <div className="flex-grow">
        <div className="w-full h-full">
          <Image
            src={`/images/${imageName}`}
            alt={imageLabel}
            width={width ? width : "650"}
            height={height ? height : "500"}
            layout="intrinsic"
            quality="100"
          />
          <motion.div
            className="flex items-center justify-around max-w-sm m-0 mx-auto"
            initial={quickFadeIn.initial}
            animate={fadeInControl}
          >
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 border-2 shadow-md rounded-xl hover:bg-dark-700 hover:text-whitetxt"
              >
                <AiFillGithub /> <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 border-2 shadow-md rounded-xl hover:bg-dark-500 hover:text-whitetxt"
              >
                <AiFillProject /> <span>Live</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col">
        <motion.p
          className="p-4 m-0 font-lines"
          initial={slideInFromRight.initial}
          animate={slideInControl}
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap justify-around ">
          {stack.map(({ filename, label, stack, height, width }, i) => (
            <motion.div
              key={filename}
              custom={i}
              initial={fadeInUp.initial}
              animate={delayedFadeIn}
            >
              <TechImage
                filename={filename}
                label={label}
                height={height}
                width={width}
                stack={stack}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
