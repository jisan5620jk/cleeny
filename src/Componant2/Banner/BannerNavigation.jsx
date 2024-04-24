import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-7 justify-between w-full absolute top-1/2 -translate-y-1/2">
      <button
        className="w-12 h-12 overflow-visible relative bg-[#2F2F2F] flex items-center text-sm text-white justify-center transition-all duration-500 z-10 before:absolute before:-left-16 before:top-1/2 before:-translate-y-1/2 before:w-12 before:h-[2px] before:bg-[#2F2F2F] after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>
      <button
        className="w-12 h-12 overflow-visible relative bg-[#2F2F2F] flex items-center text-sm text-white justify-center transition-all duration-500 z-10 before:absolute before:-right-16 before:top-1/2 before:-translate-y-1/2 before:w-12 before:h-[2px] before:bg-[#2F2F2F] after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default BannerNavigation;
