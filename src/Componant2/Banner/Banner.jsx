import { Link } from "react-router-dom";
import bannerShape1 from "/images/hero-shape2.png";
import bannerShape2 from "/images/hero-shape.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BannerNavigation from "./BannerNavigation";

const Banner = () => {
  const settings = {
    loop: true,
    speed: 2000,
    autoplay: true,
    duration: 3000,
  };
  return (
    <div className="relative">
      <Swiper {...settings}>
        <SwiperSlide>
          <section className="bg-[url('/images/slider-bg.png')] bg-cover bg-center bg-no-repeat h-[800px] flex items-center">
            <div className="Container">
              <div className="relative">
                <h5 className="font-Inter text-lg text-PrimaryColor-0 font-medium">
                  BEST CLEENY AGENCY
                </h5>
                <h1 className="font-Inter font-bold text-white text-[26px] leading-[44px] sm:text-5xl sm:leading-[68px] lg:text-[58px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
                  Enjoy The Quality Full
                  <br />
                  Cleaning Services
                  <br />
                  And Stay Safe
                </h1>
                <Link to={"/about"}>
                  <button className="primary-btn2">
                    Get Started Now
                    <FaArrowRightLong size={"20"} />
                  </button>
                </Link>
                <img
                  src={bannerShape1}
                  className="absolute left-2/4 -top-24 animate-zoomInOut"
                />
                <img
                  src={bannerShape2}
                  className="absolute left-2/4 bottom-0 animate-rotational"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/images/slider-bg2.png')] bg-cover bg-center bg-no-repeat h-[800px] flex items-center">
            <div className="Container">
              <div className="relative">
                <h5 className="font-Inter text-lg text-PrimaryColor-0 font-medium">
                  BEST CLEENY AGENCY
                </h5>
                <h1 className="font-Inter font-bold text-white text-[34px] leading-[44px] sm:text-6xl sm:leading-[70px] lg:text-[58px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
                  Enjoy The Quality Full
                  <br />
                  Cleaning Services
                  <br />
                  And Stay Safe
                </h1>
                <Link to={"/about"}>
                  <button className="primary-btn2">
                    Get Started Now
                    <FaArrowRightLong size={"20"} />
                  </button>
                </Link>
                <img
                  src={bannerShape1}
                  className="absolute left-2/4 -top-24 animate-zoomInOut"
                />
                <img
                  src={bannerShape2}
                  className="absolute left-2/4 bottom-0 animate-rotational"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <BannerNavigation />
      </Swiper>
    </div>
  );
};

export default Banner;
