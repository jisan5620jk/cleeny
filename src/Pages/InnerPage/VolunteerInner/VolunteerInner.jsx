import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import volunteerImg from "/public/images/Componant2/volunteer/volunteer1.png";
import volunteerImg2 from "/public/images/Componant2/volunteer/volunteer2.png";
import volunteerImg3 from "/public/images/Componant2/volunteer/volunteer3.png";
import volunteerImg4 from "/public/images/Componant2/volunteer/volunteer4.png";
import volunteerImg5 from "/public/images/Componant2/volunteer/volunteer5.png";
import volunteerImg6 from "/public/images/Componant2/volunteer/volunteer6.png";
import volunteerImg7 from "/public/images/Componant2/volunteer/volunteer7.png";
import volunteerImg8 from "/public/images/Componant2/volunteer/volunteer8.png";
import shape from "/public/images/Componant2/volunteer/heart.png";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const VolunteerInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Volunteer"}
        breadCampLink={"Volunteer"}
        url={"/volunteer"}
      />
      <section className="py-28">
        <div className="Container">
          <div className="text-center">
            <h5 className="sub-title before:left-1/2 before:-translate-x-1/2">
              Our Volunteers
            </h5>
            <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              Meet Now our
              <span className="text-PrimaryColor-0"> Volunteers</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 items-center justify-between pt-12">
            <div className="text-center inline-block group mb-7">
              <div className="relative">
                <img src={volunteerImg} className="m-auto" />
                <div className="w-[165px] h-[165px] bg-[#1b3434b4] rounded-full flex items-center justify-center absolute top-1/2 left-[4.3rem] sm:left-[11.7rem] md:left-[6.2rem] lg:left-[1.9rem] xl:left-[3.2rem] 2xl:left-[4.6rem] -translate-y-1/2 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ul className="flex items-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-SecondaryColor-0">
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-SecondaryColor-0">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-SecondaryColor-0">
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-[22px] mt-6 mb-1">
                Anjelina Watson
              </h5>
              <p className="font-Manrope text-SecondaryColor-0 font-medium">
                Volunteer
              </p>
            </div>
            <div className="text-center inline-block group mb-7">
              <div className="relative">
                <img src={volunteerImg2} className="m-auto" />
                <div className="w-[165px] h-[165px] bg-[#1b3434b4] rounded-full flex items-center justify-center absolute top-1/2 left-[4.3rem] sm:left-[11.7rem] md:left-[6.2rem] lg:left-[1.9rem] xl:left-[3.2rem] 2xl:left-[4.6rem] -translate-y-1/2 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ul className="flex items-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-PrimaryColor-0">
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-PrimaryColor-0">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-PrimaryColor-0">
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-[22px] mt-6 mb-1">
                Louise Campbell
              </h5>
              <p className="font-Manrope text-PrimaryColor-0 font-medium">
                Volunteer
              </p>
            </div>
            <div className="text-center inline-block group mb-7">
              <div className="relative">
                <img src={volunteerImg3} className="m-auto" />
                <div className="w-[165px] h-[165px] bg-[#1b3434b4] rounded-full flex items-center justify-center absolute top-1/2 left-[4.3rem] sm:left-[11.7rem] md:left-[6.2rem] lg:left-[1.9rem] xl:left-[3.2rem] 2xl:left-[4.6rem] -translate-y-1/2 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ul className="flex items-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:[#42d1ef]">
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:[#42d1ef]">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:[#42d1ef]">
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-[22px] mt-6 mb-1">
                David E. Meza
              </h5>
              <p className="font-Manrope text-[#42d1ef] font-medium">
                Volunteer
              </p>
            </div>
            <div className="text-center inline-block group mb-7">
              <div className="relative">
                <img src={volunteerImg4} className="m-auto" />
                <div className="w-[165px] h-[165px] bg-[#1b3434b4] rounded-full flex items-center justify-center absolute top-1/2 left-[4.3rem] sm:left-[11.7rem] md:left-[6.2rem] lg:left-[1.9rem] xl:left-[3.2rem] 2xl:left-[4.6rem] -translate-y-1/2 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ul className="flex items-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-[#ffd841]">
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-[#ffd841]">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-[#ffd841]">
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-[22px] mt-6 mb-1">
                Amy D. Vida
              </h5>
              <p className="font-Manrope text-[#ffd841] font-medium">
                Volunteer
              </p>
            </div>
            <div className="text-center inline-block group mb-7">
              <div className="relative">
                <img src={volunteerImg5} className="m-auto" />
                <div className="w-[165px] h-[165px] bg-[#1b3434b4] rounded-full flex items-center justify-center absolute top-1/2 left-[4.3rem] sm:left-[11.7rem] md:left-[6.2rem] lg:left-[1.9rem] xl:left-[3.2rem] 2xl:left-[4.6rem] -translate-y-1/2 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ul className="flex items-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-SecondaryColor-0">
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-SecondaryColor-0">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-SecondaryColor-0">
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-[22px] mt-6 mb-1">
                Louise A. Kelly
              </h5>
              <p className="font-Manrope text-SecondaryColor-0 font-medium">
                Volunteer
              </p>
            </div>
            <div className="text-center inline-block group mb-7">
              <div className="relative">
                <img src={volunteerImg6} className="m-auto" />
                <div className="w-[165px] h-[165px] bg-[#1b3434b4] rounded-full flex items-center justify-center absolute top-1/2 left-[4.3rem] sm:left-[11.7rem] md:left-[6.2rem] lg:left-[1.9rem] xl:left-[3.2rem] 2xl:left-[4.6rem] -translate-y-1/2 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ul className="flex items-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-PrimaryColor-0">
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-PrimaryColor-0">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-PrimaryColor-0">
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-[22px] mt-6 mb-1">
                David T. Trent
              </h5>
              <p className="font-Manrope text-PrimaryColor-0 font-medium">
                Volunteer
              </p>
            </div>
            <div className="text-center inline-block group mb-7">
              <div className="relative">
                <img src={volunteerImg7} className="m-auto" />
                <div className="w-[165px] h-[165px] bg-[#1b3434b4] rounded-full flex items-center justify-center absolute top-1/2 left-[4.3rem] sm:left-[11.7rem] md:left-[6.2rem] lg:left-[1.9rem] xl:left-[3.2rem] 2xl:left-[4.6rem] -translate-y-1/2 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ul className="flex items-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:[#42d1ef]">
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:[#42d1ef]">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:[#42d1ef]">
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-[22px] mt-6 mb-1">
                Anne Latham
              </h5>
              <p className="font-Manrope text-[#42d1ef] font-medium">
                Volunteer
              </p>
            </div>
            <div className="text-center inline-block group mb-7">
              <div className="relative">
                <img src={volunteerImg8} className="m-auto" />
                <div className="w-[165px] h-[165px] bg-[#1b3434b4] rounded-full flex items-center justify-center absolute top-1/2 left-[4.3rem] sm:left-[11.7rem] md:left-[6.2rem] lg:left-[1.9rem] xl:left-[3.2rem] 2xl:left-[4.6rem] -translate-y-1/2 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ul className="flex items-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-[#ffd841]">
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-[#ffd841]">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button className="text-white transition-all duration-500 hover:text-[#ffd841]">
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-[22px] mt-6 mb-1">
                James Tobias
              </h5>
              <p className="font-Manrope text-[#ffd841] font-medium">
                Volunteer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/public/images/Componant2/counter/counter-bg.png')] bg-center bg-cover relative py-28">
        <div className="Container">
          <div className="flex flex-col lg:flex-row gap-7 lg:items-center">
            <div className="flex-1">
              <h5 className="sub-title">Join Our Volunteers</h5>
              <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[36px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6 md:w-3/4 lg:w-full">
                Join Now Our Volunteers & Help the
                <span className="text-PrimaryColor-0"> Childreens</span>
              </h1>
            </div>
            <div className="flex-1 flex lg:justify-end">
              <Link to={"/volunteer2"}>
                <button className="primary-btn">
                  Become A Volunteer
                  <RiArrowRightDoubleFill />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          draggable={false}
          src={shape}
          className="animate-zoomInOut absolute left-2/3 top-[10%] md:top-1/4"
        />
      </section>
    </>
  );
};

export default VolunteerInner;
