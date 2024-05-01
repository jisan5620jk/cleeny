/* eslint-disable no-unused-vars */
import testiImg from "/public/images/testi-thumb-3.png";
import testiImg2 from "/public/images/testi-thumb-4.png";
import testiImg3 from "/public/images/testi-thumb-5.png";
import testiShape from "/public/images/testi-shape4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestmonialCard from "./TestmonialCard";
import { BiSolidQuoteRight } from "react-icons/bi";

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
    <section className="bg-[url('/public/images/service-bg3.png')] bg-cover bg-center bg-no-repeat pt-28 pb-[120px]">
      <div className="Container">
        <div>
          <h5 className="font-Inter inline-block text-lg text-PrimaryColor-0 font-medium px-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/public/images/cleaning-shapes2.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2">
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
                    <SwiperSlide key={id}>
                      <div className="pt-3">
                        <TestmonialCard
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
