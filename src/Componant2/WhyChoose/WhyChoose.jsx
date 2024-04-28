import { FaArrowRightLong } from "react-icons/fa6";
import boxImg from "/public/images/feature-icon.png";
import boxImg3 from "/public/images/feature-icon3.png";
import WhyChooseShape from "/public/images/contact-shape.png";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <section className="pt-[120px] bg-[url('/public/images/contact-bg.png')] bg-cover bg-center bg-no-repeat relative">
      <img src={WhyChooseShape} className="absolute left-20 -bottom-[88px] hidden 2xl:block" />
      <div className="Container">
        <div className="grid grid-cols-2 gap-24 2xl:gap-[142px]">
          <div className="bg-SecondaryColor-0 rounded-t-md pt-10 pb-[60px]">
            <div className="text-center">
              <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white">
                Get Appoinment
              </h1>
            </div>
            <form
              action="#"
              method="post"
              className="grid grid-cols-1 gap-[22px] items-center mt-9 px-[60px]"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name*"
                required
                className="w-full bg-transparent text-white placeholder:text-white border border-white outline-0 h-[57px] rounded py-3 px-6"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone No."
                required
                className="w-full bg-transparent text-white placeholder:text-white border border-white outline-0 h-[57px] rounded py-3 px-6"
              />
              <select
                name="select"
                id="select"
                className="w-full bg-transparent text-white border border-white outline-0 h-[57px] rounded py-3 px-6"
              >
                <option value="service1">Select Service</option>
                <option value="service2">Service1</option>
                <option value="service3">Service2</option>
                <option value="service4">Service3</option>
              </select>
              <textarea
                name="message"
                id="message"
                placeholder="Write Message"
                className="w-full bg-transparent text-white resize-none placeholder:text-white border border-white outline-0 h-[120px] rounded py-3 px-6"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-PrimaryColor-0 font-medium font-Inter transition-all duration-500 hover:text-white text-TextColor-0 border-white outline-0 h-[60px] rounded py-3 flex items-center justify-center gap-2 relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0"
              >
                Book Appionment <FaArrowRightLong />
              </button>
            </form>
          </div>
          <div>
            <h5 className="font-Inter font-medium text-PrimaryColor-0">
              CLEENY PORTFOLIO
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white mt-3">
              Dramatically negotiate high <br /> payoff services cleaning
            </h1>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-7 mt-12">
              <div>
                <img src={boxImg} />
              </div>
              <div className="flex-1">
                <h5 className="font-Inter font-semibold text-[22px] text-white">
                  House cleeny
                </h5>
                <p className="font-Poppins text-white opacity-70 text-[15px] mt-3">
                  Competently repurpose go forward benefits conveniently target
                  e-business
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-7 mt-7">
              <div>
                <img src={boxImg3} />
              </div>
              <div className="flex-1">
                <h5 className="font-Inter font-semibold text-[22px] text-white">
                  instrument
                </h5>
                <p className="font-Poppins text-white opacity-70 text-[15px] mt-3">
                  Competently repurpose go forward benefits conveniently target
                  e-business
                </p>
              </div>
            </div>
            <Link to={"/"}>
              <button className="primary-btn mt-12">
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

export default WhyChoose;
