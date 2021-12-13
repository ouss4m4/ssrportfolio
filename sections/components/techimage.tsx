import Image from "next/image";
import { FC } from "react";
import { ITech } from "../../data/techsinfo";
import { Properties } from "csstype";

interface Props extends ITech {}

const tooltip: Properties = {};
const TechImage: FC<Props> = ({ filename, label, height, width }) => {
  return (
    <div className="relative tooltip ">
      <Image
        src={`/images/${filename}`}
        alt={label}
        height={height ? height : "65"}
        width={width ? width : "65"}
        layout="intrinsic"
      />
      <span className="tooltiptext">{label}</span>
    </div>
  );
};

export default TechImage;
