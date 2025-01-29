import jeremyImage from "./assets/image-jeremy.png";
import TimeFrameButtons from "./TimeFrameButtons";
const TopCard = ({activeButton, setActiveButton, itemTimeFrame, setItemTimeFrame, items}) => {
  return (
    <div className="bg-neutral-Dark-blue rounded-xl overflow-hidden flex flex-col justify-between   md:row-span-2 ">
    <div className="bg-primary-Blue rounded-xl flex md:flex-col items-center md:items-start p-6 gap-4">
      <img
        src={jeremyImage}
        alt="jeremy picture"
        width={50}
        className="border-2 border-solid border-neutral-Pale-Blue rounded-full"
      />
      <div>
        <p className="text-neutral-Pale-Blue mt-2"> Report for</p>
        <h2 className="text-white md:text-3xl md:mb-4 ">Jeremy Robson</h2>
      </div>
    </div>
    <TimeFrameButtons
      activeButton={activeButton}
      setActiveButton={setActiveButton}
      itemTimeFrame={itemTimeFrame}
      setItemTimeFrame={setItemTimeFrame}
      items={items}
    />
  </div>
  )
}

export default TopCard