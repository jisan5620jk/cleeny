import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import donateImg from "/public/images/Componant2/event/event.png";
import donateProfile from "/public/images/Componant2/event/organiz2.png";
import itemthumb from "/public/images/Componant2/blog/post1.png";
import itemthumb2 from "/public/images/Componant2/blog/post2.png";
import itemthumb3 from "/public/images/Componant2/blog/post3.png";
import logo from "/public/images/Componant2/logo/logo-icon.png";
import eventImg from "/public/images/Componant2/event/1-event.png";
import eventImg2 from "/public/images/Componant2/event/2-event.png";
import { VscHeart } from "react-icons/vsc";
import {
  FaCircleCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";

const EventDetails = () => {
  return (
    <>
      <Breadcamp
        breadCampLink={"Event Details"}
        breadCampTitle={"Event Details"}
        url={"/eventdetails"}
      />
      <section className="py-28 donate">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="col-span-2">
              <div>
                <img src={donateImg} className="w-full" />
              </div>
              <Link to={"/"}>
                <h2 className="font-Manrope font-bold text-2xl sm:text-3xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-9 mb-4">
                  Give a good education orphan childreen
                </h2>
              </Link>
              <p className="font-Manrope text-TextColor-0">
                Assertively harness ethical networks and business networks.
                Monotonectally integrate highly effic initiatives vis-a-vis
                strategic markets. Proactively matrix enterprise functionalities
                rather extensive benefits. Energistically pontificate
                cutting-edge paradigms with 2.0 e-tailers. Uniquely syndicate
                installed base web services whereas enabled
              </p>
              <p className="font-Manrope text-PrimaryColor-0 text-lg my-7">
                Dynamically actualize professional mindshare through error-free
                opportunities coordinate optimal action items vis-a-vis tactical
                paradigms.
              </p>
              <p className="font-Manrope text-TextColor-0">
                Initiatives vis-a-vis strategic markets. Proactively matrix
                enterprise functionalities rather extensive benefits.
                Energistically pontificate cutting-edge paradigms with 2.0
                e-tailers. Uniquely syndicate new event to available in new
                yourk. But Suddently It’s Clossed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
                <div>
                  <img src={eventImg} />
                </div>
                <div>
                  <img src={eventImg2} />
                </div>
              </div>
              <Link to={"/"}>
                <h2 className="font-Manrope font-bold text-2xl sm:text-3xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-10 mb-4">
                  Donation’s Summary
                </h2>
              </Link>
              <p className="font-Manrope text-TextColor-0 mt-6">
                Credibly deliver empowered leadership skills with go forward
                materials. Synergistically parallel task empowered mindshare
                after leading-edge results.
              </p>
              <ul className="mt-9">
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
              <p className="font-Manrope border-l-[3px] rounded border-PrimaryColor-0 bg-[#fff6f1] px-5 py-3 text-sm text-TextColor-0 mt-12 mb-[53px]">
                <span className="text-PrimaryColor-0">NOTE: </span>Credibly
                deliver empowered leadership skills with go forward materials
                new Events
              </p>
              <Link to={"/donate"}>
                <button className="primary-btn">
                  Donate Now
                  <VscHeart />
                </button>
              </Link>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="bg-[url('/public/images/Componant2/event/event_bg.png')] bg-center bg-cover bg-no-repeat px-9 border-t-[5px] border-PrimaryColor-0 rounded-md pt-11 pb-12 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-white ml-12 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-12 before:h-[2px] before:w-10 before:bg-PrimaryColor-0 mb-10">
                  Event Info
                </h4>
                <div className="mb-8">
                  <h6 className="flex items-center gap-2 font-Manrope text-[#D1D2D4] text-[15px]">
                    <AiOutlineClockCircle className="text-PrimaryColor-0 text-lg" />
                    Time
                  </h6>
                  <h5 className="font-Manrope text-white font-semibold mt-2">
                    8:00 AM to 6.30 PM
                  </h5>
                </div>
                <div className="mb-8">
                  <h6 className="flex items-center gap-2 font-Manrope text-[#D1D2D4] text-[15px]">
                    <AiOutlineClockCircle className="text-PrimaryColor-0 text-lg" />
                    Date
                  </h6>
                  <h5 className="font-Manrope text-white font-semibold mt-2">
                    December 10, 2023
                  </h5>
                </div>
                <div>
                  <h6 className="flex items-center gap-2 font-Manrope text-[#D1D2D4] text-[15px]">
                    <AiOutlineClockCircle className="text-PrimaryColor-0 text-lg" />
                    Locations
                  </h6>
                  <h5 className="font-Manrope text-white font-semibold mt-2">
                    Sandigo, California, USA
                  </h5>
                </div>
              </div>
              <div className="bg-PrimaryColor-0 rounded-md text-center py-10 mb-7">
                <img src={donateProfile} className="m-auto" />
                <h5 className="font-Manrope font-bold text-2xl text-white mt-5 mb-3">
                  Jhon Alexon
                </h5>
                <h6 className="font-Lobster text-white">Organizer</h6>
                <p className="font-Manrope text-white text-[15px] mt-2 mb-5">
                  Created : Nov 28, 2022
                </p>
                <ul className="flex items-center justify-center gap-2 ">
                  <li>
                    <Link to={"/"}>
                      <button
                        className="text-white transition-all duration-500 border text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-10 h-10 rounded-full relative z-[1] before:absolute before:top-0 before:left-0 before:-z-[1] before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                      >
                        <FaFacebookF />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button
                        className="text-white transition-all duration-500 border text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-10 h-10 rounded-full relative z-[1] before:absolute before:top-0 before:left-0 before:-z-[1] before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                      >
                        <FaXTwitter />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button
                        className="text-white transition-all duration-500 border text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-10 h-10 rounded-full relative z-[1] before:absolute before:top-0 before:left-0 before:rounded-full before:-z-[1] before:w-full before:h-full before:bg-white before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                      >
                        <FaLinkedinIn />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-8 bg-[#fff4f1] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-HeadingColor-0 mb-8">
                  Category
                </h4>
                <Link to={"/blogDetails"}>
                  <button className="group flex gap-4 mb-6">
                    <div>
                      <img src={itemthumb} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Manrope font-bold text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Raise fund for clean & healthy foods
                      </h6>
                      <p className="font-Manrope text-TextColor-0 text-[15px] mt-1">
                        January 01, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <hr className="text-BorderColor2-0" />
                <Link to={"/blogDetails"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb2} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Manrope font-bold text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Collect Funds for Kids Foods & Bevarage
                      </h6>
                      <p className="font-Manrope text-TextColor-0 text-[15px] mt-1">
                        January 16, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <hr className="text-BorderColor2-0" />
                <Link to={"/blogDetails"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb3} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Manrope font-bold text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Donate Money for Kids Educations
                      </h6>
                      <p className="font-Manrope text-TextColor-0 text-[15px] mt-1">
                        January 27, 2024
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-[url('/public/images/Componant2/others/a-1.png')] bg-right bg-cover bg-no-repeat text-center py-[75px] rounded-md mb-7">
                <Link to={"/"}>
                  <img src={logo} className="m-auto" />
                </Link>
                <h4 className="font-Manrope font-bold text-2xl sm:text-3xl text-white mt-6 mb-6">
                  Helping Orphan
                  <br />
                  People
                </h4>
                <Link to={"/donate"} className="flex justify-center">
                  <button type="submit" className="primary-btn">
                    Donate Now
                    <VscHeart />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
