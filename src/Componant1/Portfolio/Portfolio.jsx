/* eslint-disable no-unused-vars */
import { FaArrowRight, FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import portfolioThumb from "/images/portfolio-img.png";
import portfolioThumb2 from "/images/portfolio-img2.png";
import portfolioThumb3 from "/images/portfolio-img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";

const PortfolioData = [
  {
    id: 1,
    portfolioThumb: portfolioThumb,
    thumbTitle: "Cleaning",
    portfolioLocateIcon: <FaLocationDot />,
    portfolioLocation: "Sandigo, USA",
    portfolioTitle: "House Floor Cleaning",
    portfolioUrl: "/project_details",
    portfolioIcon: <FaArrowRight />,
  },
  {
    id: 2,
    portfolioThumb: portfolioThumb2,
    thumbTitle: "Cleaning",
    portfolioLocateIcon: <FaLocationDot />,
    portfolioLocation: "Sandigo, USA",
    portfolioTitle: "House Floor Cleaning",
    portfolioUrl: "/project_details",
    portfolioIcon: <FaArrowRight />,
  },
  {
    id: 3,
    portfolioThumb: portfolioThumb3,
    thumbTitle: "Cleaning",
    portfolioLocateIcon: <FaLocationDot />,
    portfolioLocation: "Sandigo, USA",
    portfolioTitle: "House Floor Cleaning",
    portfolioUrl: "/project_details",
    portfolioIcon: <FaArrowRight />,
  },
  {
    id: 4,
    portfolioThumb: portfolioThumb,
    thumbTitle: "Cleaning",
    portfolioLocateIcon: <FaLocationDot />,
    portfolioLocation: "Sandigo, USA",
    portfolioTitle: "House Floor Cleaning",
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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="portfolio2 bg-[url('/images/portfolio-bg.png')] bg-cover bg-center bg-no-repeat py-28 portfolio">
      <div className="Container">
        <div className="flex flex-col md:flex-row gap-7 md:items-center justify-between">
          <div>
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              CLEENY PORTFOLIO
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3">
              Latest cleeny Portfolio <br /> from Work Galary
            </h1>
          </div>
          <div>
            <Link to={"/project"}>
              <button className="primary-btn">
                Veiw All Work
                <FaArrowRightLong size={"20"} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[60px]">
        <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
          <div>
            {PortfolioData.map(
              ({
                id,
                portfolioThumb,
                thumbTitle,
                portfolioLocateIcon,
                portfolioLocation,
                portfolioUrl,
                portfolioTitle,
                portfolioIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="pb-[80px]">
                      <PortfolioCard
                        portfolioThumb={portfolioThumb}
                        thumbTitle={thumbTitle}
                        portfolioLocateIcon={portfolioLocateIcon}
                        portfolioLocation={portfolioLocation}
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
