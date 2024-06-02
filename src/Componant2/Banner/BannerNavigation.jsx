import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-7 2xl:justify-between sm:justify-start lg:justify-center w-full absolute px-[2%] top-[80%] 2xl:top-[44%]">
      <button
        className="w-20 h-20 rounded-full overflow-hidden relative bg-[#ffffff2c] flex items-center text-xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>
      <button
        className="w-20 h-20 rounded-full overflow-hidden relative bg-[#ffffff2c] flex items-center text-xl text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default BannerNavigation;
