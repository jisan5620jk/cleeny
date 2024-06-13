/* eslint-disable no-unused-vars */
import testiImg from "/images/testi-thumb-3.png";
import testiImg2 from "/images/testi-thumb-4.png";
import testiImg3 from "/images/testi-thumb-5.png";
import testiShape from "/images/testi-shape4.png";
import counterIcon from "/images/counter-icon2.png";
import counterIcon2 from "/images/counter-icon3.png";
import counterIcon3 from "/images/counter-icon4.png";
import counterIcon4 from "/images/counter-icon5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { BiSolidQuoteRight } from "react-icons/bi";
import TestimonialNavigation from "./TestimonialNavigation";
import TestiCounter from "./TestiCounter";
import TestimonialCard from "./TestimonialCard";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Home Cleaner",
    testiDesc: `Sometimes goods can arrive early when to
								being brought into the solution creative for
								desig have space needs.`,
    testiIcon: <BiSolidQuoteRight />,
    testiShape: testiShape,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Mario Tina",
    testiDesignation: "Home Cleaner",
    testiDesc: `Sometimes goods can arrive early when to
								being brought into the solution creative for
								desig have space needs.`,
    testiIcon: <BiSolidQuoteRight />,
    testiShape: testiShape,
  },
  {
    id: 3,
    testiImg: testiImg3,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon Sina",
    testiDesignation: "Home Cleaner",
    testiDesc: `Sometimes goods can arrive early when to
								being brought into the solution creative for
								desig have space needs.`,
    testiIcon: <BiSolidQuoteRight />,
    testiShape: testiShape,
  },
  {
    id: 4,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D Alexon",
    testiDesignation: "Home Cleaner",
    testiDesc: `Sometimes goods can arrive early when to
								being brought into the solution creative for
								desig have space needs.`,
    testiIcon: <BiSolidQuoteRight />,
    testiShape: testiShape,
  },
];

const testiCounterData = [
  {
    id: 1,
    counterIcon: counterIcon,
    counterPrice: "520",
    counterDesc: "Happy Clients",
  },
  {
    id: 2,
    counterIcon: counterIcon2,
    counterPrice: "22",
    counterDesc: "EXPERT TEAM",
  },
  {
    id: 3,
    counterIcon: counterIcon3,
    counterPrice: "218",
    counterDesc: "ROJECT DONE",
  },
  {
    id: 4,
    counterIcon: counterIcon4,
    counterPrice: "14",
    counterDesc: "WORK EXPERIENCE",
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
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="relative bg-[url('/images/service-bg3.png')] bg-cover bg-center bg-no-repeat pt-28 pb-[120px]">
      <div className="Container">
        <div className="md:-mb-[7.6rem]">
          <h5 className="font-Inter inline-block text-lg text-PrimaryColor-0 font-medium px-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/images/cleaning-shapes2.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2">
            TESTIMONIAL
          </h5>
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-white mt-3 mb-4">
            Our Clients <span className="text-PrimaryColor-0"> Reviews</span>
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
                  testiDesc,
                  testiIcon,
                  testiShape,
                }) => {
                  return (
                    <>
                      <SwiperSlide key={id}>
                        <div className="pt-[136px]">
                          <TestimonialCard
                            testiImg={testiImg}
                            testiRatingIcon={testiRatingIcon}
                            testiName={testiName}
                            testiDesignation={testiDesignation}
                            testiDesc={testiDesc}
                            testiIcon={testiIcon}
                            testiShape={testiShape}
                          />
                        </div>
                      </SwiperSlide>
                    </>
                  );
                }
              )}
            </div>
            <TestimonialNavigation />
          </Swiper>
        </div>
      </div>
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[108px]">
          {testiCounterData.map(
            ({ id, counterIcon, counterPrice, counterDesc }) => {
              return (
                <>
                  <div className="pt-3" key={id}>
                    <TestiCounter
                      counterIcon={counterIcon}
                      counterPrice={counterPrice}
                      counterDesc={counterDesc}
                    />
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
