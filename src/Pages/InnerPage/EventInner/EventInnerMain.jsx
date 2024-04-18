/* eslint-disable react/prop-types */
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const EventInnerMain = ({
  eventImg,
  eventDate,
  eventTitle,
  eventDesc,
  eventTime,
  eventLocation,
  url,
  eventButton,
}) => {
  return (
    <div className="shadow-shade rounded-2xl bg-white p-5 flex flex-col lg:flex-row gap-7 items-center relative mb-7">
      <div className="relative">
        <img src={eventImg} />
        <h6 className="bg-PrimaryColor-0 w-[58px] h-[58px] px-2 text-center leading-5 rounded text-white font-Manrope flex items-center justify-center absolute top-5 left-5">
          {eventDate}
        </h6>
      </div>
      <div className="flex-1">
        <Link to={"/eventdetails"}>
          <h2 className="font-Manrope text-2xl sm:text-[28px] font-bold text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0">
            {eventTitle}
          </h2>
        </Link>
        <p className="font-Manrope text-TextColor-0 mt-5 mb-8">{eventDesc}</p>
        <h6 className="font-Manrope text-TextColor-0 flex gap-2 items-center my-4">
          <AiOutlineClockCircle className="text-PrimaryColor-0 text-lg" />
          {eventTime}
        </h6>
        <h6 className="font-Manrope text-TextColor-0 flex gap-2 items-center my-4">
          <MdLocationPin className="text-PrimaryColor-0 text-lg" />
          {eventLocation}
        </h6>
      </div>
      <Link to={url}>
        <button className="h-[38px] w-[116px] font-Manrope bg-PrimaryColor-0 text-sm flex justify-center items-center text-white rounded-full lg:-rotate-90 absolute bottom-5 left-6 lg:bottom-[inherit] lg:left-[inherit] lg:top-1/2 lg:-right-[59px] lg:-translate-y-1/2">
          {eventButton}
        </button>
      </Link>
    </div>
  );
};

export default EventInnerMain;
