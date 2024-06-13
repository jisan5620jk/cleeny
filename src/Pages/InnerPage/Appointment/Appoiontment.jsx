import { Link } from "react-router-dom";
import boxImg from "/images/contact-icon.png";
import boxImg3 from "/images/contact-icon2.png";
import WhyChooseShape from "/images/contact-shape.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Appointment = () => {
  return (
    <section className="pb-40 bg-[#f3f4f8] relative z-10">
      <img
        src={WhyChooseShape}
        className="absolute z-10 left-20 -bottom-0 hidden 2xl:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 2xl:gap-[142px]">
          <div className="mt-28">
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              ABOUT US
            </h5>
            <h1 className="font-Inter font-bold text-[20px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-3">
              Dramatically negotiate high <br /> For Looks As a New
            </h1>
            <div className="flex flex-col sm:flex-row gap-7 mt-12">
              <div>
                <img src={boxImg} />
              </div>
              <div className="flex-1">
                <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0">
                  House cleeny
                </h5>
                <p className="font-Poppins text-TextColor-0 opacity-70 mt-3">
                  Competently repurpose go forward benefits
                  <br className="hidden sm:block lg:hidden xl:block" />
                  conveniently target e-business
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-7 mt-7">
              <div>
                <img src={boxImg3} />
              </div>
              <div className="flex-1">
                <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0">
                  instrument
                </h5>
                <p className="font-Poppins text-TextColor-0 opacity-70 mt-3">
                  Competently repurpose go forward benefits
                  <br className="hidden sm:block lg:hidden xl:block" />
                  conveniently target e-business
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
          <div className="flex lg:justify-end -mt-8">
            <div className="bg-SecondaryColor-0 w-full lg:max-w-[430px] rounded-md pt-10 pb-[60px]">
              <div className="text-center">
                <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white">
                  Get Appoinment
                </h1>
              </div>
              <form
                action="#"
                method="post"
                className="grid grid-cols-1 gap-[22px] items-center mt-9 px-5 sm:px-[60px]"
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
                  <option value="service1" className="text-HoverColor-0">
                    Select Service
                  </option>
                  <option value="service2" className="text-HoverColor-0">
                    Service1
                  </option>
                  <option value="service3" className="text-HoverColor-0">
                    Service2
                  </option>
                  <option value="service4" className="text-HoverColor-0">
                    Service3
                  </option>
                </select>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Message"
                  className="w-full bg-transparent text-white resize-none placeholder:text-white border border-white outline-0 h-[120px] rounded py-3 px-6"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-PrimaryColor-0 border border-transparent font-medium font-Inter transition-all duration-500 hover:text-white text-TextColor-0 hover:border-white outline-0 h-[60px] rounded py-3 flex items-center justify-center gap-2 relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0"
                >
                  Book Appionment <FaArrowRightLong />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
