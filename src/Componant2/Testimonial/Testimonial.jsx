/* eslint-disable no-unused-vars */
import testiImg from "/images/testi-thumb-2.png";
import testiImg2 from "/images/testi-thumb.png";
import testiIcon from "/images/testi-icon2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Web Developer",
    testiTitle: "Service Quality",
    testiDesc: `“Competently cultivate worldwide e-tailers through to principles
                professionally engineer high-payoff deliverables without excet
                Rapidiously network effective”`,
    testiIcon: testiIcon,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "UI/UX Designer",
    testiTitle: "Service Quality",
    testiDesc: `“Competently cultivate worldwide e-tailers through to principles
                professionally engineer high-payoff deliverables without excet
                Rapidiously network effective”`,
    testiIcon: testiIcon,
  },
  {
    id: 3,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Web Developer",
    testiTitle: "Service Quality",
    testiDesc: `“Competently cultivate worldwide e-tailers through to principles
                professionally engineer high-payoff deliverables without excet
                Rapidiously network effective”`,
    testiIcon: testiIcon,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section className="bg-[url('/images/testi-bg2.png')] bg-cover bg-center bg-no-repeat pt-28 pb-[120px]">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Inter font-medium text-PrimaryColor-0">
            TESTIMONIALS
          </h5>
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3">
            Our Customer’s Feedback
          </h1>
        </div>
        <div className="mt-[40px]">
          <Swiper {...settings}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiImg,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiTitle,
                  testiDesc,
                  testiIcon,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pt-3">
                        <TestimonialCard
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiTilte={testiTitle}
                          testiDesc={testiDesc}
                          testiIcon={testiIcon}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
