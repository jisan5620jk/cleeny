import { FaArrowRightLong } from "react-icons/fa6";
import aboutThumb from "/images/about-thumb3.png";
import aboutShape from "/images/about-shape5.png";
import aboutIcon from "/images/about-icon.png";
import aboutIcon2 from "/images/about-icon2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="pb-[120px] bg-[#f3f4f8] bg-cover bg-center bg-no-repeat">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
          <div className="relative z-10">
            <img src={aboutThumb} />
            <div className="absolute bottom-0 left-0">
              <div className="relative before:w-full before:h-full before:border before:rounded-full before:border-dashed before:absolute before:top-0 before:left-0 before:border-PrimaryColor-0 before:animate-rotational">
                <img src={aboutShape} />
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-Inter text-lg text-SecondaryColor-0 font-medium pl-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/images/cleaning-shapes.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2">
              ABOUT CLEENY
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[46px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-HeadingColor-0 mt-3 mb-4">
              Your Trusted <span className="text-PrimaryColor-0">Cleaning</span>{" "}
              <br /> Service Partner
            </h1>
            <p className="font-Poppins text-TextColor-0 font-light">
              Need Clean of your home or office Just Feel Free contact us based
              web services we try to Help you as soon as possible your home or
              office Just Feel Free contact us based web develop.
            </p>
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center mt-8">
              <div className="w-[75px] h-[75px] rounded-full border-[5px] border-white">
                <img src={aboutIcon} />
              </div>
              <div className="flex-1">
                <h6 className="font-Inter font-semibold text-xl text-HeadingColor-0">
                  Customer Focused Reviews
                </h6>
                <p className="font-Poppins text-TextColor-0 font-light mt-3">
                  Need Clean of your home or Feel Free contact us based web
                  services we to you as soon as possible trusted.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center mt-8">
              <div className="w-[75px] h-[75px] rounded-full border-[5px] border-white">
                <img src={aboutIcon2} />
              </div>
              <div className="flex-1">
                <h6 className="font-Inter font-semibold text-xl text-HeadingColor-0">
                  Regular & Monthly cleaning
                </h6>
                <p className="font-Poppins text-TextColor-0 font-light mt-3">
                  Need Clean of your home or Feel Free contact us based web
                  services we to you as soon as possible trusted.
                </p>
              </div>
            </div>
            <Link to={"/about"}>
              <button className="primary-btn2 mt-9">
                More About Us
                <FaArrowRightLong size={"20"} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
