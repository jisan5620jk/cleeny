/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import breadCampShape from "/public/images/breatcome-shape.png";

const Breadcamp = ({ breadCampTitle, url, breadCampLink,breadCampContent }) => {
  return (
    <div className="bg-[url('/public/images/breatcome-bg.png')] bg-no-repeat bg-cover bg-center flex items-center h-[350px] sm:h-[450px] text-center pt-20">
      <div className="Container relative">
        <img src={breadCampShape} className="absolute -top-24 right-24 animate-zoomInOut"/>
        <img src={breadCampShape} className="absolute -bottom-24 left-0 animate-dance2"/>
        <h1 className="font-Inter font-bold text-4xl sm:text-[46px] text-white capitalize">
          {breadCampTitle}
        </h1>
        <ul className="flex gap-3 items-center justify-center mt-2 sm:mt-5">
          <li>
            <Link to={"/"}>
              <button className="font-Inter text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0">
                <IoHome className="text-PrimaryColor-0" /> Cleeny
              </button>
            </Link>
          </li>
          <li>
            <FaArrowRightLong className="text-white" />
          </li>
          <li>
            <Link to={url}>
              <button className="font-Inter capitalize flex gap-2 text-white">
                {breadCampLink}
              </button>
            </Link>
          </li>
          <li>
            <FaArrowRightLong className="text-white opacity-70" />
          </li>
          <li>
            <Link to={url}>
              <button className="font-Inter capitalize flex gap-2 text-white opacity-70">
                {breadCampContent}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcamp;
