import Image from "next/image";
import { FC } from "react";
import { AiFillProject, AiFillGithub } from "react-icons/ai";
import { ITech } from "../../data/techsinfo";
import TechImage from "./techimage";

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
  return (
    <div
      className="flex flex-col max-w-lg p-4 mx-auto overflow-hidden shadow-md"
      style={{ background: "#f7f7f7" }}
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
          <div className="flex items-center justify-around max-w-sm m-0 mx-auto">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 border-2 rounded-xl hover:bg-dark-700 hover:text-whitetxt"
              >
                <AiFillGithub /> <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-2 space-x-3 border-2 rounded-xl hover:bg-dark-500 hover:text-whitetxt"
              >
                <AiFillProject /> <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <p className="p-4 m-0 font-lines">{description}</p>
        <div className="flex flex-wrap justify-around ">
          {stack.map(({ filename, label, stack, height, width }, i) => (
            <TechImage
              filename={filename}
              label={label}
              height={height}
              width={width}
              stack={stack}
              key={filename}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
