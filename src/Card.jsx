import work from "./assets/icon-work.svg";
import play from "./assets/icon-play.svg";
import study from "./assets/icon-study.svg";
import exercise from "./assets/icon-exercise.svg";
import social from "./assets/icon-social.svg";
import selfCare from "./assets/icon-self-care.svg";

import ellipsis from "./assets/icon-ellipsis.svg";

const Card = ({ items, itemTimeFrame, activeButton }) => {
  const images = [work, play, study, exercise, social, selfCare];

  const bgColors = [
    "bg-primary-Light-red-work",
    "bg-primary-Soft-blue-play",
    "bg-primary-Light-red-study",
    "bg-primary-Lime-green-exercise",
    "bg-primary-Violet-social",
    "bg-primary-Sof-orange-self-care",
  ];
  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={crypto.randomUUID()}
            className={`rounded-xl ${bgColors[index]} relative h-accent md:h-[11rem] `}
          >
            <div className="absolute top-0 right-5 ">
              <img
                src={images[index]}
                alt="background"
                width={60}
                height={40}
              />
            </div>

            <div className="bg-neutral-Dark-blue rounded-xl p-6 flex flex-col gap-2 absolute z-10 bottom-0 w-full">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-white md:text-sm">{item.title}</h2>
                <img
                  src={ellipsis}
                  alt="ellipses"
                  width={20}
                  className="w-8 h-2 md:w-4 md:h-1"
                />
              </div>
              <div className="flex justify-between items-center md:flex-col md:items-start">
                <span className="text-white text-3xl">
                  {item.timeframes[itemTimeFrame.current]?.current ?? "N/A"}hrs
                </span>
                <span className="text-neutral-Desaturated-blue md:text-sm ">{activeButton ==="Daily" ? "Yesterday" : activeButton === "Monthly" ? "Last Month" : "Last Week"} - {item.timeframes[itemTimeFrame.previous]?.previous ?? "N/A"}
                  hrs
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
