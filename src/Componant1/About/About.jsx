import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import aboutThumb from "/public/images/about-thumb.png";
import icon from "/public/images/counter-icon.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { CiPlay1 } from "react-icons/ci";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section>
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src={aboutThumb} />
            <div>
              <button
                className="absolute top-0 right-0 h-[90px] w-[90px] rounded-full bg-SecondaryColor-0 border-4 border-white text-white flex justify-center items-center"
                onClick={() => setToggler(!toggler)}
              >
                <CiPlay1 size={'30'}/>
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div>
          </div>
          <div>
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              ABOUT US
            </h5>
            <h1 className="font-Inter font-bold text-[44px] leading-[54px] text-HeadingColor-0">
              Making Your House Clean For Looks As a New
            </h1>
            <p className="font-Poppins text-TextColor-0 font-light">
              Competently repurpose go forward benefits without goal-oriented
              ROI conveniently target e-business opportunities whereas parallel
              task multimedia based web services
            </p>
            <div className="flex justify-between items-center">
              <div>
                <ul>
                  <li className="flex items-center gap-2 font-Inter text-sm text-HeadingColor-0">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    Cleeny Your Home or Office
                  </li>
                  <li className="flex items-center gap-2 font-Inter text-sm text-HeadingColor-0">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    24/7 Emmergency Quality Services
                  </li>
                  <li className="flex items-center gap-2 font-Inter text-sm text-HeadingColor-0">
                    <FaCircleCheck className="text-lg text-SecondaryColor-0" />
                    Online Booking System available
                  </li>
                </ul>
                <Link to={"/"}>
                  <button className="primary-btn2">
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
