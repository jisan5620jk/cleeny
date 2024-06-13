/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import teamShape from "/images/team-shape.png";

const TeamCard = ({
  teamThumb,
  teamTitle,
  teamDesignation,
  teamIcon,
  teamIcon2,
  teamIcon3,
  teamIcon4,
}) => {
  return (
    <div className="group">
      <div className=" flex justify-center relative z-20 -mb-[6rem]">
        <img
          src={teamThumb}
          className="m-auto w-9/12 rounded-full border-[10px] border-HoverColor-0 transition-all duration-500 group-hover:border-SecondaryColor-0"
        />
      </div>
      <div
        className="text-center bg-white rounded-md pt-[126px] 2xl:pt-[140px] relative z-10 overflow-hidden
       before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:top-0 group-hover:before:h-full"
      >
        <img
          src={teamShape}
          className="absolute bottom-1/4 left-1/4 animate-dance2 -z-10"
        />
        <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
          {teamTitle}
        </h5>
        <p className="text-TextColor-0 font-Poppins font-light transition-all duration-500 border-b border-BorderColor-0 pb-8 pt-1 group-hover:text-white">
          {teamDesignation}
        </p>
        <ul className="flex gap-3 items-center justify-center py-4">
          <li>
            <Link to={"/"}>
              <button className="w-9 h-9 rounded-full border transition-all overflow-hidden duration-500 text-sm text-HeadingColor-0 group-hover:text-white hover:!text-SecondaryColor-0 group-hover:border-white border-[#E1E4F0] flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:scale-0 before:transition-all before:duration-500 before:-z-10 hover:before:scale-100">
                {teamIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-9 h-9 rounded-full border transition-all overflow-hidden duration-500 text-sm text-HeadingColor-0 group-hover:text-white hover:!text-SecondaryColor-0 group-hover:border-white border-[#E1E4F0] flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:scale-0 before:transition-all before:duration-500 before:-z-10 hover:before:scale-100">
                {teamIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-9 h-9 rounded-full border transition-all overflow-hidden duration-500 text-sm text-HeadingColor-0 group-hover:text-white hover:!text-SecondaryColor-0 group-hover:border-white border-[#E1E4F0] flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:scale-0 before:transition-all before:duration-500 before:-z-10 hover:before:scale-100">
                {teamIcon3}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-9 h-9 rounded-full border transition-all overflow-hidden duration-500 text-sm text-HeadingColor-0 group-hover:text-white hover:!text-SecondaryColor-0 group-hover:border-white border-[#E1E4F0] flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:scale-0 before:transition-all before:duration-500 before:-z-10 hover:before:scale-100">
                {teamIcon4}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
