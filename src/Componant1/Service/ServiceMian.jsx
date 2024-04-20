/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import serviceThumb from "/public/images/service-img.png"
import serviceThumb2 from "/public/images/service-img2.png"
import serviceThumb3 from "/public/images/service-img3.png"
import serviceIcon from "/public/images/service-icon.png"
import serviceIcon2 from "/public/images/service-icon2.png"
import serviceIcon3 from "/public/images/service-icon3.png"
import ServiceCard from "./ServiceCard";


const serviceData = [
  {
    id: 1,
    serviceThumb: serviceThumb, 
    serviceIcon: serviceIcon,
    serviceTitle: `Office Floor Cleaning`,
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
    serviceTitle: `House Wash & Clean`,
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
    serviceTitle: `House Kitchen Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    serviceThumb: serviceThumb, 
    serviceIcon: serviceIcon,
    serviceTitle: `Office Floor Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
];

const ServiceMian = () => {
  return (
    <section className="pt-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Inter font-medium text-PrimaryColor-0">
            OUR SERVICES
          </h5>
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white mt-3 mb-3">
            Professional cleeny Services
          </h1>
        </div>
        <div>
          <div>
            {serviceData.map(
              ({
                id,
                serviceThumb,
                serviceIcon,
                serviceTitle,
                serviceListIcon,
                serviceListContent,
                serviceListContent2,
                serviceUrl,
                buttonContent,
                buttonIcon,
              }) => {
                return (
                  <div key={id} className="p-2">
                    <ServiceCard
                      serviceThumb={serviceThumb}
                      serviceIcon={serviceIcon}
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

export default ServiceMian;
