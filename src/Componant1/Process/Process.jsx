/* eslint-disable no-unused-vars */
import processIcon from "/public/images/work-icon.png";
import processIcon2 from "/public/images/work-icon2.png";
import processIcon3 from "/public/images/work-icon3.png";
import ProcessCard from "./ProcessCard";

const serviceData = [
  {
    id: 1,
    processIcon: processIcon,
    processTitle: "Find Us Online",
    processDesc: "Repurpose go forward benefits more conveniently e-business",
  },
  {
    id: 2,
    processIcon: processIcon2,
    processTitle: "Choose Services",
    processDesc: "Repurpose go forward benefits more conveniently e-business",
  },
  {
    id: 3,
    processIcon: processIcon3,
    processTitle: "Book Appoinment",
    processDesc: "Repurpose go forward benefits more conveniently e-business",
  },
];

const ServiceMian = () => {
  return (
    <section className="pt-28">
      <div className="Container">
        <div className="text-center">
          <div>
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              ABOUT US
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3 mb-3">
              Making Your House Clean For Looks As a New
            </h1>
            <p className="font-Poppins text-TextColor2 font-light">
              Competently repurpose go forward benefits without goal-oriented
              ROI conveniently target e-business opportunities whereas parallel
              task multimedia based web services
            </p>
          </div>
        </div>
        <div className="pb-16 mt-[60px]">
          <div className="grid grid-cols-3 gap-7">
            {serviceData.map(
              ({ id, processIcon, processTitle, processDesc }) => {
                return (
                  <div key={id}>
                    <ProcessCard
                      processIcon={processIcon}
                      processTitle={processTitle}
                      processDesc={processDesc}
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
