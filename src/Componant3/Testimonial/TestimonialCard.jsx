/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
  testiIcon,
  testiShape,
}) => {
  return (
    <div className="px-5 sm:px-10 lg:px-7 xl:px-10 pt-5 pb-8 relative shadow-lg bg-HoverColor-0 group rounded-xl z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="flex justify-between items-center">
        <div className="transition-all duration-500 group-hover:text-white">
          <h1 className="text-PrimaryColor-0 text-5xl rotate-180">
            {testiIcon}
          </h1>
        </div>
        <ul className="flex gap-1 items-center text-xl text-PrimaryColor-0">
          <li>{testiRatingIcon}</li>
          <li>{testiRatingIcon}</li>
          <li>{testiRatingIcon}</li>
          <li>{testiRatingIcon}</li>
          <li>{testiRatingIcon}</li>
        </ul>
      </div>
      <p className="font-Poppins text-white font-light transition-all duration-500 group-hover:text-white mt-5">
        {testiDesc}
      </p>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 pt-6">
        <div>
          <img src={testiImg} />
        </div>
        <div>
          <h5 className="font-Inter font-medium text-white text-xl lg:text-lg xl:text-xl">
            {testiName}
          </h5>
          <p className="font-Poppins text-white font-light transition-all duration-500 text-[15px] relative z-10 pl-4 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0">
            {testiDesignation}
          </p>
        </div>
      </div>
      <div className="absolute bottom-7 right-7 animate-rotational -z-10">
        <img src={testiShape} />
      </div>
    </div>
  );
};

export default TestimonialCard;
