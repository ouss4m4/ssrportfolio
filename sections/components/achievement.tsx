import Image from "next/image";
import { Properties } from "csstype";
import { Children, FC } from "react";
import TechImage from "./techimage";
import { ITech } from "../../data/techsinfo";

const polygon = (left: boolean, bg?: string): Properties => ({
  width: "23%",
  height: "63%",
  background: bg ? bg : "rgb(99 110 143)",
  borderRadius: left ? "0 33% 33% 0" : "33% 0 0 33%",
  float: left ? "left" : "right",
});

interface IAchievement {
  imgSrc: string;
  imgLabel: string;
  direction: string;
  tech: ITech[];
}

const Achievement: FC<IAchievement> = ({
  imgSrc,
  imgLabel,
  direction,
  tech,
  children,
}) => {
  const isLeft = direction === "left";
  return (
    <div
      className={`flex flex-col items-center justify-around p-2 mt-14 md:relative lg:mt-12   ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } `}
      style={{ minHeight: "550px" }}
    >
      <div className="relative z-10 ">
        <Image
          src={`/images/${imgSrc}`}
          alt={imgLabel}
          width="700"
          height="500"
          quality="100"
          layout="intrinsic"
        />
      </div>
      <div className="absolute hidden w-full h-full md:block">
        <div style={polygon(isLeft)}></div>
      </div>
      <div className="z-10 max-w-sm lg:max-w-lg">
        {children}
        <div>
          <div className="flex justify-center mt-6 gap-x-5 ">
            {tech.map(({ filename, label, height, width, stack }) => (
              <TechImage
                filename={filename}
                label={label}
                height={height ? height : 80}
                width={width ? width : 80}
                stack={stack}
                key={filename}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
