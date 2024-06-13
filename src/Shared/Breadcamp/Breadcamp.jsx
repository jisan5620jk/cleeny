/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import breadCampShape from "/images/breatcome-shape.png";

const Breadcamp = ({
  breadCampTitle,
  breadcampIcon,
  breadcampIcon2,
  url,
  breadCampLink,
  breadCampContent,
}) => {
  return (
    <div className="bg-[url('/images/breatcome-bg.png')] bg-no-repeat bg-cover bg-center flex items-center h-[400px] sm:h-[450px] text-center pt-20">
      <div className="Container relative">
        <img
          src={breadCampShape}
          className="absolute -top-24 right-24 animate-zoomInOut hidden md:block"
        />
        <img
          src={breadCampShape}
          className="absolute -bottom-24 left-0 animate-dance2 hidden md:block"
        />
        <h1 className="font-Inter font-bold text-4xl sm:text-[46px] text-white capitalize">
          {breadCampTitle}
        </h1>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center justify-center mt-8 sm:mt-5">
          <li>
            <Link to={"/"}>
              <button className="font-Inter text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0">
                <IoHome className="text-PrimaryColor-0" /> Cleeny
              </button>
            </Link>
          </li>
          <li>
            <div className="text-white hidden sm:block">{breadcampIcon}</div>
          </li>
          <li>
            <Link to={url}>
              <button className="font-Inter capitalize flex gap-2 text-white">
                {breadCampLink}
              </button>
            </Link>
          </li>
          <li>
            <div className="text-white hidden sm:block">{breadcampIcon2}</div>
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
