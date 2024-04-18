import { FaCircleCheck } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import volunteerImg from "/public/images/Componant2/about/about3.png";
import contactImg from "/public/images/Componant2/contact/contact.png";
import CountUp from "react-countup";
import { HiOutlinePhone } from "react-icons/hi2";

const VolunteerInner2 = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Become Volunteer"}
        breadCampLink={"Become Volunteer"}
        url={"/volunteer2"}
      />
      <section className="py-28">
        <div className="Container">
          <div className="flex gap-20 flex-col lg:flex-row">
            <div className="flex-1 relative">
              <img src={volunteerImg} />
              <div className="bg-[url('/public/images/Componant2/about/about-cuntr.png')] h-[176px] w-[176px] flex flex-col justify-center items-center text-center absolute top-9 left-9">
                <CountUp
                  start={-9}
                  end={10}
                  suffix="K+"
                  className="text-[40px] font-Lobster font-normal text-white"
                />
                <h6 className="font-Manrope font-semibold text-white">
                  Volunteers
                </h6>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="sub-title">Become a Volunteers</h5>
              <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[32px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
                Let’s Join our Community
                <br /> Become a
                <span className="text-PrimaryColor-0"> Volunteers</span>
              </h1>
              <p className="text-TextColor-0 font-Manrope mt-6">
                Monotonectally enable quality users via stand-alone strategic
                theme areas. Quickly productize timely synergy with compelling
                processes. Rapidiously provide access holistic results with user
                friendly.
              </p>
              <ul className="border-b border-BorderColor2-0 mt-8 pb-8">
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />{" "}
                  Completely architect competitive information
                </li>
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" /> Must
                  be Maintain Every Rules & Regulations
                </li>
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" /> You
                  should be a honest & powerful
                </li>
              </ul>
              <div className="flex items-center gap-5 mt-8">
                <div className="w-[60px] h-[60px] bg-SecondaryColor-0 rounded-full flex items-center justify-center">
                  <HiOutlinePhone className="text-white text-3xl" />
                </div>
                <div>
                  <h6 className="font-Manrope text-TextColor-0">
                    Call Anytime
                  </h6>
                  <h5 className="font-Manrope font-semibold text-xl text-HeadingColor-0">
                    +98 678 (960) 280
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white relative z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('../../../public/images/Componant2/contact/contact-inf.jpg')] before:-z-[1] before:bg-cover before:bg-bottom py-28">
        <div className="Container">
          <div className="text-center">
            <h5 className="sub-title before:left-1/2 before:-translate-x-1/2">
              Join Community
            </h5>
            <h1 className="text-white text-[20px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              Fill Up the Form and Join our
              <br />
              Biggest
              <span className="text-PrimaryColor-0"> Community</span>
            </h1>
          </div>
          <div className="flex flex-col gap-7 lg:flex-row bg-PrimaryColor-0 rounded-md mt-[60px]">
            <div className="flex-1 py-6 xl:pt-12 2xl:pt-16 px-8 sm:px-12">
              <h2 className="font-Manrope font-extrabold text-xl sm:text-3xl text-white mb-7">
                Write Your Information
              </h2>
              <form action="#" method="post" className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your name*"
                  required
                  className="w-full h-[52px] px-6 py-2 rounded-md outline-none"
                />
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your E-Mail*"
                    required
                    className="w-full h-[52px] px-6 py-2 rounded-md outline-none"
                  />
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter Your Number"
                    className="w-full h-[52px] px-6 py-2 rounded-md outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Your Address*"
                  required
                  className="w-full h-[52px] px-6 py-2 rounded-md outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter Your Subject*"
                  required
                  className="w-full h-[52px] px-6 py-2 rounded-md outline-none"
                />
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Enter Your Date*"
                  required
                  className="w-full h-[52px] px-6 py-2 rounded-md outline-none"
                />
                <button
                  type="submit"
                  className="w-full h-[52px] border-2 border-white font-Manrope font-semibold text-white px-6 py-2 rounded-md outline-none relative z-[1] transition-all duration-500 before:absolute before:top-0 before:left-1/2 before:w-0 before:transition-all before:duration-500 before:h-full before:bg-white before:-z-[1] hover:before:left-0 hover:before:w-full hover:text-HeadingColor-0"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex-1 justify-end flex ">
              <img src={contactImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerInner2;
