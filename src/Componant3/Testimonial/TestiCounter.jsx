/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const TestiCounter = ({counterIcon,counterPrice,counterDesc}) => {
    return (
      <div className="flex flex-row lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-4 2xl:gap-6 px-6 2xl:px-[30px] py-7 rounded-md relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:border before:border-dashed before:border-SecondaryColor-0">
        <div className="w-[70px] h-[70px] rounded-full bg-SecondaryColor-0 flex justify-center items-center">
          <img src={counterIcon} />
        </div>
        <div className="flex-1">
          <CountUp
            start={-11}
            end={counterPrice}
            suffix="+"
            className="text-[45px] lg:text-[38px] 2xl:text-[45px] leading-[50px] text-white font-Inter font-bold"
          />
          <p className="uppercase text-white lg:text-xs 2xl:text-[15px] font-Inter font-medium mt-1">{counterDesc}</p>
        </div>
      </div>
    );
};

export default TestiCounter;