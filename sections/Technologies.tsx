import { useEffect, useState } from "react";
import { NextPage } from "next";
import TechsInfo, { IStack } from "../data/techsinfo";
import Image from "next/image";
import ToolsNavbar from "./components/toolsnav";

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
    <section className="container max-w-6xl px-2 mx-auto mt-8 font-lines ">
      <h2
        id="tools"
        className="pt-8 mb-12 text-4xl font-bold tracking-wider font-lines text-center"
      >
        Tools
      </h2>
      <p className="text-center text-lg pb-2 max-w-lg mx-auto">
        A good software engineer understands that programming languages and
        frameworks are just tools to help in problem solving and daily
        challenges.
      </p>
      <p className="text-center text-lg  max-w-lg mx-auto">
        Below are the tools i always opt for but i am not limited to.{" "}
      </p>
      <ToolsNavbar handleFiltering={handleFiltering} active={active} />
      <div className="grid grid-cols-3 gap-x-6 gap-y-12">
        {tools.map(({ filename, label, height, width }) => (
          <div
            key={filename}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`/images/${filename}`}
              alt={label}
              height={height ? height : "90"}
              width={width ? width : "90"}
              layout="intrinsic"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
