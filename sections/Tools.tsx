import { useEffect, useState } from "react";
import { NextPage } from "next";
import TechsInfo, { IStack } from "../data/techsinfo";
import Image from "next/image";
import ToolsNavbar from "./components/toolsnav";
import TechImage from "./components/techimage";
import { quickFadeIn } from "../data/animation";
const { motion } = require("framer-motion");

const Technologies: NextPage = () => {
  const techList = Object.values(TechsInfo);

  const [tools, setTools] = useState(techList);
  const [active, setActive] = useState("Frontend");

  const handleFiltering = (stack: IStack) => {
    const filtered = techList.filter((tool) => tool.stack.includes(stack));
    setTools([]);
    setTimeout(() => {
      setTools(filtered);
    }, 1);
    setActive(stack);
  };
  useEffect(() => {
    handleFiltering("Frontend");
  }, []);
  return (
    <section className="container max-w-6xl px-2 mx-auto mt-8 font-lines">
      <h2
        id="tools"
        className="pt-8 mb-12 text-4xl font-bold tracking-wider text-center font-headers"
      >
        Tools
      </h2>
      {/* <p className="max-w-lg pb-2 mx-auto text-lg text-center">
        A good software engineer understands that programming languages and
        frameworks are just tools to help in problem solving and daily
        challenges.
      </p> */}
      <p className="mx-auto text-lg text-center ">
        Below are the tools I opt for, but not limited to.{" "}
      </p>
      <ToolsNavbar handleFiltering={handleFiltering} active={active} />
      <motion.div className="grid grid-cols-3 gap-8 h-96">
        {tools.map(({ filename, label, height, width, stack }) => (
          <motion.div
            key={filename}
            className="flex flex-col items-center justify-center"
            variants={quickFadeIn}
            initial="initial"
            animate="animate"
          >
            <TechImage
              filename={filename}
              label={label}
              height={height ? height : 95}
              width={width ? width : 95}
              stack={stack}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
