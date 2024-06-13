import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import aboutThumb from "/images/about-thumb2.png";
import aboutShape from "/images/about-shape3.png";
import aboutShape2 from "/images/about-shape4.png";
import icon from "/images/counter-icon.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const About = () => {
  return (
    <section className="py-[120px] bg-[url('/images/about-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
          <div className="relative z-10">
            <img src={aboutThumb} />
            <img
              src={aboutShape}
              className="absolute top-0 right-0 -z-10 animate-movebtn"
            />
            <img
              src={aboutShape2}
              className="absolute bottom-0 left-[10%] -z-10 animate-movebtn"
            />
          </div>
          <div>
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              ABOUT US
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3 mb-3">
              Making Your House Clean <br /> For Looks As a New
            </h1>
            <p className="font-Poppins text-TextColor-0 font-light">
              Competently repurpose go forward benefits without goal-oriented
              ROI conveniently target e-business opportunities whereas parallel
              task multimedia based web services
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-between mt-7">
              <div>
                <ul>
                  <li className="flex items-center gap-2 font-Inter text-HeadingColor-0 mb-[14px]">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    Cleeny Your Home or Office
                  </li>
                  <li className="flex items-center gap-2 font-Inter text-HeadingColor-0 mb-[14px]">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    24/7 Emmergency Quality Services
                  </li>
                  <li className="flex items-center gap-2 font-Inter text-HeadingColor-0 mb-[14px]">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    Online Booking System available
                  </li>
                </ul>
                <Link to={"/about"}>
                  <button className="primary-btn2 mt-9">
                    More About Us
                    <FaArrowRightLong size={"20"} />
                  </button>
                </Link>
              </div>
              <div className="bg-PrimaryColor-0 rounded-lg w-[192px] h-[192px] flex justify-center items-center flex-col">
                <img src={icon} />
                <CountUp
                  start={-11}
                  end={12}
                  suffix="+"
                  className="text-[36px] font-Inter font-bold text-HeadingColor-0"
                />
                <p className="font-Poppins text-TextColor-0 font-light">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
