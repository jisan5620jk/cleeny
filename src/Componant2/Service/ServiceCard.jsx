/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceThumb,
  serviceIcon,
  serviceShape,
  serviceTitle,
  serviceListIcon,
  serviceListContent,
  serviceListContent2,
  serviceUrl,
  buttonContent,
  buttonIcon,
}) => {
  return (
    <div className="group">
      <div>
        <img src={serviceThumb} className="w-full" />
      </div>
      <div className="bg-HoverColor-0 pb-5">
        <div className="w-10/12 mb-5 -mt-[30px] bg-white rounded-e-md px-4 md:px-8 pb-6 transition-all duration-500 relative z-10 before:absolute before:right-0 before:w-0 before:h-full before:rounded-e-md before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 group-hover:-mt-[120px]">
          <img
            src={serviceShape}
            className="absolute bottom-0 right-10 animate-dance2 -z-10 opacity-0 transition-all
           duration-500 group-hover:opacity-100"
          />
          <h5 className="font-Inter font-semibold text-HeadingColor-0 xl:text-lg 2xl:text-2xl transition-all duration-500 group-hover:text-white pt-4">
            {serviceTitle}
          </h5>
          <ul className="-mt-[90px] transition-all duration-500 opacity-0 group-hover:mt-0 group-hover:border-white group-hover:opacity-100">
            <li className="flex items-center gap-2 text-[#B8B9D5] font-Poppins mt-5 mb-3 transition-all duration-500 group-hover:text-white">
              <div className="text-PrimaryColor-0">{serviceListIcon}</div>
              {serviceListContent}
            </li>
            <li className="flex items-center gap-2 text-[#B8B9D5] font-Poppins mb-2 transition-all duration-500 group-hover:text-white">
              <div className="text-PrimaryColor-0">{serviceListIcon}</div>
              {serviceListContent2}
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center px-8">
          <Link to={serviceUrl}>
            <button className="text-white font-medium font-Inter flex items-center gap-2">
              {buttonContent}
              {buttonIcon}
            </button>
          </Link>
          <div className="brightness-0 invert-[1] transition-all duration-500 group-hover:rotate-[360deg]">
            <img src={serviceIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
