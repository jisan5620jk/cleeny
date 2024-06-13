import { Link } from "react-router-dom";
import bannerThumb from "/images/hero-thumb.png";
import bannerShape1 from "/images/hero-shape2.png";
import bannerShape2 from "/images/hero-shape.png";
import { FaArrowRightLong, FaPhone } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[75rem] lg:h-[814px] flex items-center">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 md:gap-32 lg:gap-0 items-center">
          <div>
            <h5 className="font-Inter text-lg text-PrimaryColor-0 font-medium">
              BEST CLEENY AGENCY
            </h5>
            <h1 className="font-Inter font-extrabold text-white text-[34px] leading-[44px] sm:text-6xl sm:leading-[70px] lg:text-[58px] 2xl:text-[65px] 2xl:leading-[72px] mt-6 mb-6">
              NEED CLEENY? CALL
              <span className="text-PrimaryColor-0">US TODAY</span>
            </h1>
            <p className="font-Poppins text-white opacity-80 mb-9 w-10/12">
              Need Clean of your home or office? Just Feel Free to Contact us.
              We try to Help you as soon as possible.
            </p>
            <Link to={"/contact"}>
              <button className="primary-btn">
                Get Started Now
                <FaArrowRightLong size={"20"} />
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-[url('/images/hero-shape3.png')] bg-no-repeat bg-contain bg-right h-[130px] w-[205px] flex flex-col items-center justify-center gap-1 absolute left-0 sm:-top-[6rem] -top-[8rem] lg:-left-[6rem] lg:-top-[5rem] xl:-top-[2rem]">
              <TypeAnimation
                sequence={["Help Line", 1000, "Call Us", 1000]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  color: "#fff",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
              <div className="flex items-center gap-2">
                <FaPhone size={"20"} className="text-PrimaryColor-0" />
                <h6 className="font-Inter font-bold text-white text-2xl">
                  246900
                </h6>
              </div>
            </div>
            <img src={bannerThumb} />
            <img
              src={bannerShape1}
              className="absolute right-0 top-0 animate-zoomInOut"
            />
            <img
              src={bannerShape2}
              className="absolute left-0 bottom-0 animate-rotational"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
