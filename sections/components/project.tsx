import Image from 'next/image';
import { FC } from 'react';
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
    <div className="flex flex-col max-w-lg p-4 mx-auto overflow-hidden shadow-md" styles={{minHeight: '450px'}}>
      <h3 className="mb-2 text-xl font-bold tracking-wide text-center font-headers">
        {name}
      </h3>
      <div className="flex-grow">
        <div className="w-full h-full">
          <Image
            src={`/images/${imageName}`}
            alt={imageLabel}
            width={width ? width : '650'}
            height={height ? height : '500'}
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
      {/* <div className="flex flex-col gap-4">
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
        
      </div> */}
      <div className="flex flex-col ">
        <p className="p-4 m-0">{description}</p>
        <div className="flex flex-wrap justify-around ">
          {stack.map((tech, i) => (
            <Image
              src={`/images/${tech.filename}`}
              alt={tech.label}
              width={tech.width ? tech.width : '60'}
              height={tech.height ? tech.height : '60'}
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
