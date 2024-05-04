/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceUrl,
  serviceBtn,
  serviceBtnIcon,
  serviceNumber,
}) => {
  return (
    <div className="rounded-md bg-HoverColor-0 p-6 flex flex-col sm:flex-row items-center gap-6 group relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:rounded-md hover:before:w-full hover:before:left-0 pr-7 mb-7 sm:mr-8 md:mr-0">
      <div className="w-[85px] h-[85px] rounded-full bg-SecondaryColor-0 relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:-z-10 before:h-full before:bg-white before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100">
        <img src={serviceIcon} className="brightness-0 invert-[1] transition-all duration-500 group-hover:brightness-100 group-hover:invert-0" />
      </div>
      <div>
        <h5 className="font-Inter font-bold text-white text-xl sm:text-[22px]">
          {serviceTitle}
        </h5>
        <Link to={serviceUrl}>
          <button className="font-Poppins font-medium text-[15px] text-white flex items-center gap-2 mt-1">
            {serviceBtn}
            <span>{serviceBtnIcon}</span>
          </button>
        </Link>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-[23px]">
        <h6 className="font-Inter font-medium text-lg text-white w-[46px] h-[46px] rounded-full bg-SecondaryColor-0 relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:transition-all before:-z-10 before:duration-500 before:scale-0 group-hover:before:scale-100">
          {serviceNumber}
        </h6>
      </div>
    </div>
  );
};

export default ServiceCard;
