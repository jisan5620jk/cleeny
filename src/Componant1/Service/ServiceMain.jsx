/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import serviceThumb from "/images/service-img.png";
import serviceThumb2 from "/images/service-img2.png";
import serviceThumb3 from "/images/service-img3.png";
import serviceShape from "/images/service-shape.png";
import serviceIcon from "/images/service-icon.png";
import serviceIcon2 from "/images/service-icon2.png";
import serviceIcon3 from "/images/service-icon3.png";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const serviceData = [
  {
    id: 1,
    serviceThumb: serviceThumb,
    serviceIcon: serviceIcon,
    serviceShape: serviceShape,
    serviceTitle: `Office Floor Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/service_details",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    serviceThumb: serviceThumb2,
    serviceIcon: serviceIcon2,
    serviceShape: serviceShape,
    serviceTitle: `House Wash & Clean`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/service_details",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    serviceThumb: serviceThumb3,
    serviceIcon: serviceIcon3,
    serviceShape: serviceShape,
    serviceTitle: `House Kitchen Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/service_details",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    serviceThumb: serviceThumb,
    serviceIcon: serviceIcon,
    serviceShape: serviceShape,
    serviceTitle: `Office Floor Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/service_details",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
];

const ServiceMain = () => {
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
    <section className="pt-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Inter font-medium text-PrimaryColor-0">
            OUR SERVICES
          </h5>
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white mt-3">
            Professional cleeny Services
          </h1>
        </div>
        <div className="mt-[60px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            <div>
              {serviceData.map(
                ({
                  id,
                  serviceThumb,
                  serviceIcon,
                  serviceShape,
                  serviceTitle,
                  serviceListIcon,
                  serviceListContent,
                  serviceListContent2,
                  serviceUrl,
                  buttonContent,
                  buttonIcon,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pb-[80px]">
                        <ServiceCard
                          serviceThumb={serviceThumb}
                          serviceIcon={serviceIcon}
                          serviceShape={serviceShape}
                          serviceTitle={serviceTitle}
                          serviceListIcon={serviceListIcon}
                          serviceListContent={serviceListContent}
                          serviceListContent2={serviceListContent2}
                          serviceUrl={serviceUrl}
                          buttonContent={buttonContent}
                          buttonIcon={buttonIcon}
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

export default ServiceMain;
