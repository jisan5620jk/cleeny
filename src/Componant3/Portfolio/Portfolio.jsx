/* eslint-disable no-unused-vars */
import { FaArrowRight, FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import portfolioThumb from "/images/portfolio-img5.png";
import portfolioThumb2 from "/images/portfolio-img7.png";
import portfolioThumb3 from "/images/portfolio-img6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PortfolioCard from "./PortfolioCard";

const PortfolioData = [
  {
    id: 1,
    portfolioThumb: portfolioThumb,
    portfolioSubTitle: "RENEWABLE POWER",
    portfolioTitle: "Window Cleaning",
    portfolioUrl: "/project_details",
    portfolioIcon: <FaArrowRight />,
  },
  {
    id: 2,
    portfolioThumb: portfolioThumb2,
    portfolioSubTitle: "RENEWABLE POWER",
    portfolioTitle: "Window Cleaning",
    portfolioUrl: "/project_details",
    portfolioIcon: <FaArrowRight />,
  },
  {
    id: 3,
    portfolioThumb: portfolioThumb3,
    portfolioSubTitle: "RENEWABLE POWER",
    portfolioTitle: "Window Cleaning",
    portfolioUrl: "/project_details",
    portfolioIcon: <FaArrowRight />,
  },
  {
    id: 4,
    portfolioThumb: portfolioThumb,
    portfolioSubTitle: "RENEWABLE POWER",
    portfolioTitle: "Window Cleaning",
    portfolioUrl: "/project_details",
    portfolioIcon: <FaArrowRight />,
  },
];

const Portfolio = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="py-28 portfolio2 relative">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Inter inline-block text-lg text-SecondaryColor-0 font-medium px-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/images/cleaning-shapes.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2 after:absolute after:top-1/2 after:right-0 after:w-6 after:h-3 after:bg-[url(/images/cleaning-shapes.png)] after:bg-no-repeat after:bg-[inherit] after:-translate-y-1/2">
            CLEENY PORTFOLIO
          </h5>
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-HeadingColor-0 mt-3 mb-4">
            Latest cleeny<span className="text-PrimaryColor-0"> Portfolio</span>
            <br />
            From Work Gallary
          </h1>
          <p className="font-Poppins text-TextColor-0 font-light mb-14">
            Services we partners you as soon as possible your home or office
            Just
            <br className="hidden md:block" /> Feel Free contact us based web
            develop Expert.
          </p>
        </div>
      </div>
      <div className="mt-[60px]">
        <Swiper {...settings}>
          <div>
            {PortfolioData.map(
              ({
                id,
                portfolioThumb,
                portfolioSubTitle,
                portfolioUrl,
                portfolioTitle,
                portfolioIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="pb-10">
                      <PortfolioCard
                        portfolioThumb={portfolioThumb}
                        portfolioSubTitle={portfolioSubTitle}
                        portfolioUrl={portfolioUrl}
                        portfolioTitle={portfolioTitle}
                        portfolioIcon={portfolioIcon}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
