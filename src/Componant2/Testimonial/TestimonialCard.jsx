/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiTilte,
  testiDesc,
  testiIcon,
}) => {
  return (
    <div className="px-5 sm:px-10 relative shadow-shade bg-white group rounded-xl z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 pt-14">
        <div>
          <img src={testiImg} />
        </div>
        <div>
          <ul className="flex gap-1 items-center text-xl text-PrimaryColor-0">
            <li>{testiRatingIcon}</li>
            <li>{testiRatingIcon}</li>
            <li>{testiRatingIcon}</li>
            <li>{testiRatingIcon}</li>
            <li>{testiRatingIcon}</li>
          </ul>
          <h5 className="font-Inter font-medium text-HeadingColor-0 text-xl mt-3 mb-2 transition-all duration-500 group-hover:text-white">
            {testiName}
          </h5>
          <p className="font-Poppins text-[#788AC6] transition-all duration-500 group-hover:text-white text-[15px]">
            {testiDesignation}
          </p>
        </div>
      </div>
      <h6 className="font-Inter font-medium text-SecondaryColor-0 text-lg mt-7 mb-5 transition-all duration-500 group-hover:text-white">
        {testiTilte}
      </h6>
      <p className="font-Poppins text-TextColor-0 font-light pb-12 transition-all duration-500 group-hover:text-white">
        {testiDesc}
      </p>
      <div className="absolute top-[60px] right-10 transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]">
        <img src={testiIcon} />
      </div>
    </div>
  );
};

export default TestimonialCard;
