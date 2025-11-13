import Image from "next/image";

import ReactionIcon from "@/public/images/icon-reaction.svg";
import MemoryIcon from "@/public/images/icon-memory.svg";
import VerbalIcon from "@/public/images/icon-verbal.svg";
import VisualIcon from "@/public/images/icon-visual.svg";

import { SummaryData } from "@/utils/data";

const Icon: any = {
  reaction: ReactionIcon,
  memory: MemoryIcon,
  verbal: VerbalIcon,
  visual: VisualIcon,
};

const colorMap: any = {
  "--red-400": "text-(--red-400)",
  "--yellow-400": "text-(--yellow-400)",
  "--green-500": "text-(--green-500)",
  "--blue-800": "text-(--blue-800)",
};

const bgMap: any = {
  "--red-50": "bg-(--red-50)",
  "--yellow-50": "bg-(--yellow-50)",
  "--green-50": "bg-(--green-50)",
  "--blue-50": "bg-(--blue-50)",
};

const Summary = ({ icon, title, score, textColor, bgColor }: SummaryData) => {
  return (
    <div
      className={`w-full p-(--space-200) flex items-center justify-between ${bgMap[bgColor]} rounded-[12px]`}
    >
      <div
        className={`flex item-center gap-(--space-200) text-5-med ${colorMap[textColor]}`}
      >
        <Image src={Icon[icon]} alt="visual icon" />
        {title}
      </div>
      <p className="text-6-bold text-(--navy-950)">
        {score} <span className="text-(--navy-950)/60">/ 100</span>
      </p>
    </div>
  );
};

export default Summary;
