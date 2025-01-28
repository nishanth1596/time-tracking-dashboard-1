const TimeFrameButtons = ({
  activeButton,
  setActiveButton,
  setItemTimeFrame,
}) => {
  const timeframes = ["Daily", "Weekly", "Monthly"];

  const handleClick = (timeframe) => {
    setActiveButton(timeframe);
    setItemTimeFrame({
      current: timeframe.toLowerCase(),
      previous: timeframe.toLowerCase(),
    });
  };
  return (
    <div className="flex gap-8  md:flex-col md:items-start md:gap-0 md:m-4">
      {timeframes.map((timeframe) => (
        <button
          onClick={() => handleClick(timeframe)}
          key={timeframe}
          className={
            activeButton === timeframe
              ? "text-white p-4 md:p-2 md:text-sm hover:text-neutral-Pale-Blue"
              : "text-neutral-Desaturated-blue p-4 md:p-2 md:text-sm hover:text-neutral-Pale-Blue"
          }
        >
          {timeframe}
        </button>
      ))}
    </div>
  );
};

export default TimeFrameButtons;
