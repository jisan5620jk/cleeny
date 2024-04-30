/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({teamThumb,socialIcon,socialIcon2,socialIcon3,teamTitle,teamDesc}) => {
  return (
    <div className="group">
      <div className="relative z-10 overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-5/6 before:bg-gradient-to-t before:from-blue-500 before:to-transparent before:transition-all before:duration-500 before:opacity-75 group-hover:before:h-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 after:bg-gradient-to-t after:from-yellow-300 after:to-transparent after:opacity-75 group-hover:after:h-5/6">
        <img src={teamThumb} className="w-full" />
        <ul className="flex gap-3 absolute z-10 -bottom-1/4 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:bottom-6">
          <li>
            <Link to={"/"}>
              <button className="w-[42px] h-[42px] flex justify-center items-center rounded-full overflow-hidden relative bg-HoverColor-0 border border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-[42px] h-[42px] flex justify-center items-center rounded-full overflow-hidden relative bg-HoverColor-0 border border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-[42px] h-[42px] flex justify-center items-center rounded-full overflow-hidden relative bg-HoverColor-0 border border-white text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon3}
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-white text-center pt-[22px] pb-[26px] relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-SecondaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0">
        <h5 className="font-Inter font-bold text-[22px] text-HeadingColor-0">
          {teamTitle}
        </h5>
        <p className="font-Inter text-TextColor-0">{teamDesc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
