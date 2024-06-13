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

const serviceData = [
  {
    id: 1,
    serviceThumb: serviceThumb,
    serviceIcon: serviceIcon,
    serviceShape: serviceShape,
    serviceTitle: `House Wash & Clean`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    serviceThumb: serviceThumb2,
    serviceIcon: serviceIcon2,
    serviceShape: serviceShape,
    serviceTitle: `Office Floor Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    serviceThumb: serviceThumb3,
    serviceIcon: serviceIcon3,
    serviceShape: serviceShape,
    serviceTitle: `Kitchen Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
];

const Service = () => {
  return (
    <section className="pt-28 relative z-10 before:absolute before:w-full before:h-[80%] before:-z-10 before:top-0 before:left-0 before:bg-[url('/images/service-bg2.png')] before:bg-cover before:bg-center before:bg-no-repeat">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Inter font-medium text-PrimaryColor-0">
            OUR SERVICES
          </h5>
          <h1 className="font-Inter font-bold text-[20px] leading-8 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white mt-3">
            Professional cleeny Services <br />
            What we Provide
          </h1>
        </div>
        <div className="mt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
                  <div key={id}>
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
