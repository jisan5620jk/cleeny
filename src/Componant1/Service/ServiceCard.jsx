/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceThumb,
  serviceIcon,
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
        <img src={serviceThumb} />
      </div>
      <div className="w-10/12 bg-HoverColor-0 rounded-ee-md rounded-r-md rounded-b-md px-8">
        <div className="w-[80px] h-[80px] rounded-full bg-white transition-all duration-500 flex justify-center items-center group-hover:bg-PrimaryColor-0 group-hover:rotate-[360deg]">
          <img src={serviceIcon} />
        </div>
        <h5 className="font-Inter font-semibold text-white text-2xl">
          {serviceTitle}
        </h5>
        <ul>
          <li className="flex items-center gap-2 text-[#B8B9D5] font-Poppins transition-all duration-500 group-hover:text-white">
            <div className="text-PrimaryColor-0">{serviceListIcon}</div>
            {serviceListContent}
          </li>
          <li className="flex items-center gap-2 text-[#B8B9D5] font-Poppins transition-all duration-500 group-hover:text-white">
            <div className="text-PrimaryColor-0">{serviceListIcon}</div>
            {serviceListContent2}
          </li>
        </ul>
        <Link to={serviceUrl}>
          <button className="text-white font-medium font-Inter flex items-center
           gap-2">
            {buttonContent}
            {buttonIcon}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
