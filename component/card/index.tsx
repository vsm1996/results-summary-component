import Summary from "@/component/ui/summary";

import { SummaryData, summaryData } from "@/utils/data";
import {
  buttonSpanStyles,
  buttonStyles,
  cardContainerStyles,
  resultContainerStyles,
  summaryContainerStyles,
} from "./styles";

const Card = () => {
  return (
    <div className={`${cardContainerStyles}`}>
      <div className={`${resultContainerStyles}`}>
        <h1 className="text-5-bold md:text-4-bold text-(--navy-200)">
          Your Result
        </h1>
        <div className="bg-linear-(--gradient-light) p-[34px] rounded-full">
          <p className="flex flex-col justify-center items-center text-(--white) text-2">
            76 <span className="text-(--navy-200) text-6-bold ">of 100</span>
          </p>
        </div>
        <div className="flex flex-col gap-(--space-100)">
          <h2 className="text-4-bold text-(--white)">Great</h2>
          <p className="text-6-med text-(--navy-200)">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>

      <div className={`${summaryContainerStyles}`}>
        <p className="text-5-bold text-(--navy-950)">Summary</p>
        <div className="flex flex-col gap-(--space-200)">
          {summaryData &&
            summaryData.map(
              ({ icon, title, score, textColor, bgColor }: SummaryData) => (
                <Summary
                  key={title}
                  icon={icon}
                  title={title}
                  score={score}
                  textColor={textColor}
                  bgColor={bgColor}
                />
              )
            )}
        </div>
        <button className={`${buttonStyles}`}>
          <span className="z-10">Continue</span>
          <span className={`${buttonSpanStyles}`}></span>
        </button>
      </div>
    </div>
  );
};

export default Card;
