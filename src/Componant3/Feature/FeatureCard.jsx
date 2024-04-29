/* eslint-disable react/prop-types */

const FeatureCard = ({ featureIcon, featureTitle, featureDesc }) => {
  return (
    <div className="group relative bg-white rounded-md pt-6 pb-7 z-10 before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-SecondaryColor-0 before:rounded-md before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-[90px] h-[90px] bg-[#f3f4f8] border-[5px] border-white flex items-center justify-center transition-all duration-500 rounded-full group-hover:border-SecondaryColor-0">
        <img src={featureIcon} />
      </div>
      <div className="pl-[72px] lg:pl-16 2xl:pl-[72px]">
        <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
          {featureTitle}
        </h5>
        <p className="font-Poppins text-TextColor-0 transition-all duration-500 group-hover:text-white mt-2">
          {featureDesc}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
