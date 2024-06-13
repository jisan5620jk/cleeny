import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import aboutThumb from "/images/about-thumb.png";
import aboutShape from "/images/about-shape2.png";
import icon from "/images/counter-icon.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { CiPlay1 } from "react-icons/ci";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="py-[120px]">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-24 items-center">
          <div className="relative">
            <img src={aboutThumb} />
            <div className="absolute top-[4.5rem] right-[3rem]">
              <button
                className="h-[90px] w-[90px] rounded-full bg-SecondaryColor-0 border-4 border-white text-white flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping"
                onClick={() => setToggler(!toggler)}
              >
                <CiPlay1 size={"30"} />
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutShape}
              className="absolute -top-6 right-0 animate-rotational"
            />
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              ABOUT US
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3 mb-3">
              Making Your House Clean For Looks As a New
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
