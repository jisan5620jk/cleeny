/* eslint-disable react/prop-types */
import CountUp from "react-countup";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PricingCard = ({
  currency,
  price,
  pricingDateLine,
  pricingTitle,
  pricingIcon,
  pricingContent1,
  pricingContent2,
  pricingContent3,
  pricingContent4,
  pricingContent5,
  pricingUrl,
  pricingBtn,
  pricingShape,
}) => {
  return (
    <div className="group bg-[#f4f5f8] rounded-xl relative z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:opacity-0 before:bg-SecondaryColor-0 before:rounded-xl before:-z-10 before:transition-all before:duration-500 hover:before:h-full hover:before:opacity-100 hover:before:top-0">
      <div className="absolute top-1/4 left-0 right-0 animate-zoomInOut -z-10">
        <img src={pricingShape} />
      </div>
      <div className="relative z-10 -top-6 mb-3">
        <div className="w-[120px] h-[120px] rounded-e-xl rounded-b-xl bg-SecondaryColor-0 text-white flex flex-col items-center justify-center mx-auto font-Inter relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-e-xl before:rounded-b-xl before:transition-all before:duration-500 before:scale-0 before:-z-10 group-hover:before:scale-100 after:absolute after:top-0 after:-left-6 after:w-6 after:h-[14px] after:border-[12px] after:border-r-HoverColor-0 after:border-t-white after:border-l-white after:border-b-HoverColor-0">
          <div className="flex items-baseline gap-1 transition-all duration-500 group-hover:items-stretch">
            <h6 className="font-semibold text-xl">{currency}</h6>
            <CountUp
              start={-11}
              end={price}
              suffix=""
              className="text-[42px] font-bold"
            />
          </div>
          <p>{pricingDateLine}</p>
        </div>
      </div>
      <h4 className="font-Inter font-semibold text-[22px] text-HeadingColor-0 pl-8 pr-10 border-l-[3px] border-SecondaryColor-0 py-2 bg-white rounded-r-full inline-block transition-all duration-500 group-hover:border-transparent">
        {pricingTitle}
      </h4>
      <ul>
        <li className="flex gap-2 items-center font-Poppins text-[15px] text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px] mb-3 mt-8">
          <div className="text-xl transition-all duration-500 text-SecondaryColor-0 group-hover:text-PrimaryColor-0">
            {pricingIcon}
          </div>
          {pricingContent1}
        </li>
        <li className="flex gap-2 items-center font-Poppins text-[15px] text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px] mb-3">
          <div className="text-xl transition-all duration-500 text-SecondaryColor-0 group-hover:text-PrimaryColor-0">
            {pricingIcon}
          </div>
          {pricingContent2}
        </li>
        <li className="flex gap-2 items-center font-Poppins text-[15px] text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px] mb-3">
          <div className="text-xl transition-all duration-500 text-SecondaryColor-0 group-hover:text-PrimaryColor-0">
            {pricingIcon}
          </div>
          {pricingContent3}
        </li>
        <li className="flex gap-2 items-center font-Poppins text-[15px] text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px] mb-3">
          <div className="text-xl transition-all duration-500 text-SecondaryColor-0 group-hover:text-PrimaryColor-0">
            {pricingIcon}
          </div>
          {pricingContent4}
        </li>
        <li className="flex gap-2 items-center font-Poppins text-[15px] text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px]">
          <div className="text-xl transition-all duration-500 text-SecondaryColor-0 group-hover:text-PrimaryColor-0">
            {pricingIcon}
          </div>
          {pricingContent5}
        </li>
      </ul>
      <div className="px-[30px] -mt-1 pb-10">
        <Link to={pricingUrl}>
          <button className="primary-btn2 mt-9 group-hover:before:w-full group-hover:before:right-0 group-hover:before:left-auto group-hover:after:w-full group-hover:after:left-0 group-hover:after:right-auto">
            {pricingBtn}
            <FaArrowRightLong size={"20"} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
