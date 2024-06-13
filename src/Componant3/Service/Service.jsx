/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import serviceThumb from "/images/service-thumb.png";
import serviceIcon from "/images/service-icon7.png";
import serviceIcon2 from "/images/service-icon8.png";
import serviceIcon3 from "/images/service-icon9.png";
import serviceIcon4 from "/images/service-icon10.png";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: `Resort Cleaning`,
    serviceUrl: "/service_details",
    serviceBtn: `Read More`,
    serviceBtnIcon: <FaArrowRightLong />,
    serviceNumber: "01",
  },
  {
    id: 1,
    serviceIcon: serviceIcon2,
    serviceTitle: `Window Cleaning`,
    serviceUrl: "/service_details",
    serviceBtn: `Read More`,
    serviceBtnIcon: <FaArrowRightLong />,
    serviceNumber: "01",
  },
  {
    id: 1,
    serviceIcon: serviceIcon3,
    serviceTitle: `Kitchen Cleaning`,
    serviceUrl: "/service_details",
    serviceBtn: `Read More`,
    serviceBtnIcon: <FaArrowRightLong />,
    serviceNumber: "01",
  },
  {
    id: 1,
    serviceIcon: serviceIcon4,
    serviceTitle: `Garden Cleaning`,
    serviceUrl: "/service_details",
    serviceBtn: `Read More`,
    serviceBtnIcon: <FaArrowRightLong />,
    serviceNumber: "01",
  },
];

const Service = () => {
  return (
    <section className="pt-28 pb-[90px] relative bg-[url('/images/service-bg3.png')] bg-cover bg-center bg-no-repeat">
      <div className="Container">
        <div className="grid grid-cols-1 lg:items-center lg:grid-cols-2 gap-14 xl:gap-28 2xl:gap-36">
          <div>
            <h5 className="font-Inter text-lg text-PrimaryColor-0 font-medium pl-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/images/cleaning-shapes2.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2">
              CLEENY SERVICES
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-white mt-3 mb-4">
              Your Trusted <span className="text-PrimaryColor-0">Cleaning</span>
              <br />
              Service Partner
            </h1>
            <p className="font-Poppins text-white font-light mb-14">
              Services we partners you as soon as possible your home or office
              Just <br className="hidden 2xl:block" /> Feel Free contact us
              based web develop.
            </p>
            <img src={serviceThumb} />
          </div>
          <div>
            {serviceData.map(
              ({
                id,
                serviceIcon,
                serviceTitle,
                serviceUrl,
                serviceBtn,
                serviceBtnIcon,
                serviceNumber,
              }) => {
                return (
                  <div key={id}>
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceTitle={serviceTitle}
                      serviceUrl={serviceUrl}
                      serviceBtn={serviceBtn}
                      serviceBtnIcon={serviceBtnIcon}
                      serviceNumber={serviceNumber}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
