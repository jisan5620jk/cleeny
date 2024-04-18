/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Breadcamp = ({ breadCampTitle, url, breadCampLink }) => {
  return (
    <div className="bg-[url('/public/images/Componant2/breadcamp/breadcamp-bg.png')] bg-no-repeat bg-cover bg-center flex items-center h-[350px] sm:h-[500px] text-center">
      <div className="Container">
        <ul className="flex gap-5 items-center justify-center">
          <li>
            <Link to={"/"}>
              <button className="font-Yantramanav font-medium text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0">
                <IoHome /> HOME
              </button>
            </Link>
          </li>
          <li>
            <FaArrowRightLong className="text-white" />
          </li>
          <li>
            <Link to={url}>
              <button className="font-Yantramanav capitalize font-medium flex gap-2 text-PrimaryColor-0">
                {breadCampLink}
              </button>
            </Link>
          </li>
        </ul>
        <h1 className="font-Yantramanav font-bold text-4xl sm:text-[50px] text-white capitalize mt-2 sm:mt-5">
          {breadCampTitle}
        </h1>
      </div>
    </div>
  );
};

export default Breadcamp;
