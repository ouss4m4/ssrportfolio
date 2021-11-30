import Image from 'next/image';
import React, { FC } from 'react';
import { AiFillProject, AiFillGithub } from 'react-icons/ai';

interface IProjectTech {
  width?: number;
  height?: number;
  label: string;
  filename: string;
}

export interface IProject {
  name: string;
  imageName: string;
  imageLabel: string;
  description: string;
  stack: IProjectTech[];
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
    <div className="max-w-3xl p-8 my-8 shadow-xl rounded-2xl ">
      <h3 className="mb-5 text-xl font-bold tracking-wide text-center font-headers">
        {name}
      </h3>
      <div className="flex flex-col gap-4">
        <div className="m-2 border-2 border-gray-100 rounded-md">
          <Image
            src={`/images/${imageName}`}
            alt={imageLabel}
            width={width ? width : '220'}
            height={height ? height : '100'}
            layout="responsive"
            quality="100"
            className="rounded-xl"
          />
        </div>
        <div className="flex items-center justify-around gap-8 mx-auto ">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-4 py-2 space-x-3 border-2 rounded-xl"
            >
              <AiFillGithub /> <span>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-4 py-2 space-x-3 border-2 rounded-xl"
            >
              <AiFillProject /> <span>Live</span>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="mt-4">{description}</p>
        <div className="flex justify-center mt-8 gap-x-7">
          {stack.map((tech, i) => (
            <Image
              src={`/images/${tech.filename}`}
              alt={tech.label}
              width={tech.width ? tech.width : '100'}
              height={tech.height ? tech.height : '65'}
              layout="intrinsic"
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
