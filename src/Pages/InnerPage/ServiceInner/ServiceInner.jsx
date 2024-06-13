/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import serviceThumb from "/images/service-img4.png";
import serviceThumb2 from "/images/service-img5.png";
import serviceThumb3 from "/images/service-img6.png";
import serviceThumb4 from "/images/service-img7.png";
import serviceThumb5 from "/images/service-img8.png";
import serviceThumb6 from "/images/service-img9.png";
import serviceShape from "/images/service-shape.png";
import serviceIcon from "/images/service-icon.png";
import serviceIcon2 from "/images/service-icon2.png";
import serviceIcon3 from "/images/service-icon3.png";
import serviceIcon4 from "/images/service-icon14.png";
import serviceIcon5 from "/images/service-icon15.png";
import serviceIcon6 from "/images/service-icon16.png";
import ServiceCard from "./ServiceCard";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import Support from "../../../Componant1/Support/Support";
import Pricing from "../../../Componant1/Pricing/Pricing";

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
  {
    id: 4,
    serviceThumb: serviceThumb4,
    serviceIcon: serviceIcon4,
    serviceShape: serviceShape,
    serviceTitle: `Glass Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
  {
    id: 5,
    serviceThumb: serviceThumb5,
    serviceIcon: serviceIcon5,
    serviceShape: serviceShape,
    serviceTitle: `Carpet Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
  {
    id: 6,
    serviceThumb: serviceThumb6,
    serviceIcon: serviceIcon6,
    serviceShape: serviceShape,
    serviceTitle: `Door Cleaning`,
    serviceListIcon: <FaCheck />,
    serviceListContent: `House Floor Cleaning`,
    serviceListContent2: `Roof Clean & Wash`,
    serviceUrl: "/",
    buttonContent: `Veiw Details`,
    buttonIcon: <FaArrowRightLong />,
  },
];

const ServiceInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Our Services"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Our Services"}
      />
      <section className="pt-28 pb-40 p relative z-10 bg-[#f3f3f7]">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <h5 className="font-Inter font-medium text-SecondaryColor-0">
                OUR SERVICES
              </h5>
              <h1 className="font-Inter font-bold text-[20px] leading-8 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3">
                Professional cleeny Services <br />
                What we Provide
              </h1>
            </div>
            <div>
              <p className="font-Poppins font-light text-TextColor-0">
                Competently repurpose go forward benefits without goal-orien
                conveniently target e-business opportunities whereas parallel
                multimedia based web services
              </p>
            </div>
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
      <Support />
      <Pricing />
    </>
  );
};

export default ServiceInner;
