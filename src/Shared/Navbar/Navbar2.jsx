/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import {
  FaArrowRightLong,
  FaBars,
  FaFacebookF,
  FaHandsClapping,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaRegClock,
  FaXTwitter,
} from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import Logo from "/images/logo.png";
import { useState, useEffect } from "react";
import { IoMdCall, IoMdClose } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent relativee text-[#7d7f8c] z-[99999]`}
    >
      {/* top Navbar */}
      <header className="bg-[#021233] overflow-hidden md:block relative z-10">
        <div className="Container flex items-center justify-between">
          <div className="flex items-center gap-10">
            <p className="font-Poppins text-[15px] text-white sm:flex items-center gap-2 relative before:absolute before:top-1/2 before:right-0 before:w-[1px] before:h-5 before:bg-BorderColor-0 before-:translate-1/2 hidden">
              <FaHandsClapping className="text-xl relative bottom-[2px] text-PrimaryColor-0" />
              Welcome to Cleeny Cleaing Service
            </p>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center">
              <li>
                <Link
                  to={"/"}
                  className="text-sm flex justify-center items-center h-[50px] w-[35px] bg-[#1773ea] transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-sm flex justify-center items-center h-[50px] w-[35px] bg-[#2ca5da] transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-sm flex justify-center items-center h-[50px] w-[35px] bg-[#0073b1] transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-sm flex justify-center items-center h-[50px] w-[35px] bg-[#e11a21] transition-all duration-500 text-white hover:text-PrimaryColor-0"
                >
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
            <div className="lg:flex items-center gap-2 hidden">
              <h6 className="flex items-center gap-2 text-sm text-white font-Poppins font-light">
                <IoMdCall className="w-[14px] h-[14px] rounded-sm bg-white text-xs text-SecondaryColor-0" />
                Call :
              </h6>
              <Link
                to={"/"}
                className="font-Poppins font-medium text-sm text-white"
              >
                {" "}
                +980 234 4567
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* top Navbar */}
      <header data-aos="zoom-in" data-aos-duration="1000">
        <div className="bg-white relative z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-[30%] before:bg-[#f3f4f8] before:-z-10 hidden lg:block">
          <div className="Container">
            <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px]">
              {/* website Logo */}
              <div className=" w-48 lg:w-52">
                <Link to="/">
                  <img
                    src={Logo}
                    className="hidden lg:block w-full"
                    alt="website_logo"
                  />
                </Link>
              </div>
              <div className="flex items-center lg:gap-[18px] xl:gap-[60px]">
                <Link
                  to={"/"}
                  className="font-Poppins font-medium text-HeadingColor-0 sm:flex items-center gap-2"
                >
                  <FaPhone size={"20"} className="text-SecondaryColor-0" />
                  +123 (4567) 890
                </Link>
                <Link
                  to={"/"}
                  className="font-Poppins font-medium text-HeadingColor-0 sm:flex items-center gap-2 relative before:absolute before:top-1 before:-left-[30px] before:w-[1px] before:h-5 before:bg-BorderColor-0"
                >
                  <BsEnvelope size={"20"} className="text-SecondaryColor-0" />
                  example@gmail.com
                </Link>
                <p className="font-Poppins font-medium text-HeadingColor-0 md:flex items-center gap-2 relative before:absolute before:top-1 before:-left-[30px] before:w-[1px] before:h-5 before:bg-BorderColor-0">
                  <FaRegClock size={"20"} className="text-SecondaryColor-0" />
                  Mon - Fri 9am to 5pm
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-section">
          <div className="Container">
            {/* main Navbar */}
            <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[80px] bg-SecondaryColor-0 rounded-b-md -mb-[80px] relative z-50">
              {/* website Logo */}
              <div className="w-48 lg:w-52 hidden">
                <Link to="/">
                  <img
                    src={Logo}
                    className="hidden lg:block w-full"
                    alt="website_logo"
                  />
                </Link>
              </div>
              {/* small screen size */}
              <div className="px-3 w-full lg:hidden flex justify-between bg-khaki h-[70px] items-center p-3">
                <div className="w-28">
                  <Link to={"/"}>
                    <img
                      src={Logo}
                      className="block lg:hidden brightness-0 invert-[1]"
                      alt="constre_website_logo"
                    />
                  </Link>
                </div>
                {/* toggle bar mode. */}
                <button
                  className="lg:hidden block focus:outline-none "
                  onClick={toggleNavbar}
                >
                  {/* modal open and close */}
                  {isOpen ? (
                    <IoMdClose className="w-6 h-6 text-white" />
                  ) : (
                    <FaBars className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
              {/* All navLink are hear with active */}
              <div className="flex items-center justify-between w-full px-10">
                <div className="text-white flex items-center gap-7">
                  <ul
                    className={`${
                      isOpen ? "block" : "hidden"
                    } text-right lg:w-fit ease-in-out flex-1 lg:flex flex flex-col lg:flex-row capitalize text-base lg:bg-transparent py-3 lg:py-0 font-Poppins font-medium text-white transition-all duration-500
                `}
                  >
                    <NavLink
                      to={"/"}
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-Poppins font-medium text-[15px] hover:text-PrimaryColor-0 lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative`}
                    >
                      <span className="flex items-center">
                        Home
                        <BiChevronDown className="ml-1" />
                      </span>
                      <div
                        className="absolute pt-5 lg:pt-8 z-[1]"
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                      >
                        <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm py-4 bg-HoverColor-0 ">
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/"} className="py-2 block">
                                Home One
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/home2"} className="py-2 block">
                                Home Two
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/home3"} className="py-2 block">
                                Home Three
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </NavLink>
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-Poppins font-medium text-[15px]hover:text-PrimaryColor-0 lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative `}
                      to={"/about"}
                    >
                      <span>about</span>
                    </NavLink>
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""}text-white text-left font-Poppins font-medium text-[15px] hover:text-PrimaryColor-0 lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative `}
                      to={"#"}
                    >
                      <span className="flex items-center">
                        Service
                        <BiChevronDown className="ml-1" />
                      </span>
                      <div className="absolute pt-5 lg:pt-8 z-20">
                        <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm py-4 bg-HeadingColor-0 ">
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/service"} className="py-2 block">
                                Our Service
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link
                                to={"/service_details"}
                                className="py-2 block"
                              >
                                Service Details
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </NavLink>
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-Poppins font-medium text-[15px] hover:text-PrimaryColor-0 lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative `}
                      to={"#"}
                    >
                      <span className="flex items-center">
                        Pages
                        <BiChevronDown className="ml-1" />
                      </span>
                      <div className="absolute pt-5 lg:pt-8 z-20">
                        <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm py-4 bg-HeadingColor-0 ">
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/about"} className="py-2 block">
                                About Us
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/service"} className="py-2 block">
                                Our Service
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link
                                to={"/service_details"}
                                className="py-2 block"
                              >
                                Service Details
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/team_inner"} className="py-2 block">
                                Team Member
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/project"} className="py-2 block">
                               Our Projects
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link
                                to={"/project_details"}
                                className="py-2 block"
                              >
                                Project Details
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/pricing_inner"} className="py-2 block">
                                Pricing Plan
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/testimonial"} className="py-2 block">
                                Testimonial
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/appointment"} className="py-2 block">
                                Appointment
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </NavLink>
                    {/* blog sub menu link */}
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-Poppins font-medium text-[15px] hover:text-PrimaryColor-0 lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative `}
                      to={"#"}
                    >
                      <span className="flex items-center">
                        Blog
                        <BiChevronDown className="ml-1" />
                      </span>
                      <div className="absolute pt-5 lg:pt-8 z-20">
                        <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm py-4 bg-HoverColor-0 ">
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/blog_grid"} className="py-2 block">
                                Blog Grid
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/blog_list"} className="py-2 block">
                                Blog List
                              </Link>
                            </li>
                          </div>
                          <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/blog_details"} className="py-2 block">
                                Blog Details
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </NavLink>
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-Poppins font-medium text-[15px] lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300`}
                      to={"/contact"}
                    >
                      Contact
                    </NavLink>
                  </ul>
                </div>
                <div className="hidden lg:flex items-center gap-14">
                  <Link to={"/"}>
                    <IoSearch className="text-xl text-white transition-all duration-500 hover:text-PrimaryColor-0" />
                  </Link>
                  <Link to={"/appointment"}>
                    <button className="font-Inter font-medium text-white relative before:absolute before:top-[2px] before:-left-[30px] before:w-[2px] before:h-5 before:bg-white flex items-center gap-2">
                      Free Appoinment <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
