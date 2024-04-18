import { Link } from "react-router-dom";
import serviceIcon from "/public/images/Componant2/service/service1.png";
import serviceIcon2 from "/public/images/Componant2/service/service2.png";
import serviceIcon3 from "/public/images/Componant2/service/service3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutService = () => {
  return (
    <section className="bg-[#fff7f5] py-28">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div>
            <h5 className="sub-title">Change Everything</h5>
            <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[38px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              We’re here to
              <br /> Help
              <span className="text-PrimaryColor-0"> Theme</span>
            </h1>
          </div>
          <div className="text-center bg-white pt-10">
            <img src={serviceIcon} className="m-auto" />
            <h6 className="font-Manrope font-bold text-xl text-HeadingColor-0 mt-6 mb-5">
              Kids Education
            </h6>
            <p className="font-Manrope text-TextColor-0 text-[15px] mb-9 md:px-10 lg:px-0 2xl:px-10">
              Phosfluorescently to cultivate distinctively empower
            </p>
            <Link to={"/events"}>
              <button className="flex items-center justify-between w-full font-Manrope text-[14px] text-HeadingColor-0 font-medium py-4 px-6 border-t border-BorderColor2-0 transition-all duration-500 hover:text-PrimaryColor-0">
                Read More <FaArrowRightLong className="text-PrimaryColor-0" />
              </button>
            </Link>
          </div>
          <div className="text-center bg-white pt-10">
            <img src={serviceIcon2} className="m-auto" />
            <h6 className="font-Manrope font-bold text-xl text-HeadingColor-0 mt-6 mb-5">
              Good Health
            </h6>
            <p className="font-Manrope text-TextColor-0 text-[15px] mb-9 md:px-10 lg:px-0 2xl:px-10">
              Phosfluorescently to cultivate distinctively empower
            </p>
            <Link to={"/events"}>
              <button className="flex items-center justify-between w-full font-Manrope text-[14px] text-HeadingColor-0 font-medium py-4 px-6 border-t border-BorderColor2-0 transition-all duration-500 hover:text-SecondaryColor-0">
                Read More <FaArrowRightLong className="text-SecondaryColor-0" />
              </button>
            </Link>
          </div>
          <div className="text-center bg-white pt-10 group">
            <img
              src={serviceIcon3}
              className="m-auto transition-all duration-500 transform group-hover:rotate-x-360"
            />
            <h6 className="font-Manrope font-bold text-xl text-HeadingColor-0 mt-6 mb-5">
              Healthy Food
            </h6>
            <p className="font-Manrope text-TextColor-0 text-[15px] mb-9 md:px-10 lg:px-0 2xl:px-10">
              Phosfluorescently to cultivate distinctively empower
            </p>
            <Link to={"/events"}>
              <button className="flex items-center justify-between w-full font-Manrope text-[14px] text-HeadingColor-0 font-medium py-4 px-6 border-t border-BorderColor2-0 transition-all duration-500 hover:text-[#19c7eb]">
                Read More <FaArrowRightLong className="text-[#19c7eb]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
