import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import blogListImg from "/images/sidber-thumb.png";
import blogDetailsImg from "/images/blog-thumb8.png";
import blogDetailsImg2 from "/images/blog-thumb9.png";
import itemthumb from "/images/post1.png";
import itemthumb2 from "/images/post2.png";
import itemthumb3 from "/images/post3.png";
import { IoSearch } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaArrowRightLong,
  FaCircleCheck,
  FaCommentsDollar,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCalendarCheck,
  FaRegFolderOpen,
  FaXTwitter,
} from "react-icons/fa6";
import { BiSolidQuoteAltRight, BiSolidShare } from "react-icons/bi";

const BlogDetails = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Blog Details"}
        url={"/blog"}
        breadcampIcon={<FaArrowRightLong />}
        breadcampIcon2={<FaArrowRightLong />}
        breadCampLink={"Blog"}
        breadCampContent={"Floor Cleaning Using New Equipment"}
      />
      <section className="py-28">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
              <div className="border border-BorderColor-0 rounded-md overflow-hidden">
                <div className="relative">
                  <img src={blogListImg} className="w-full" />
                  <h6 className="font-Inter text-white px-5 py-2 rounded absolute top-5 left-5 bg-SecondaryColor-0">
                    Cleaning
                  </h6>
                </div>
                <div className="px-4 sm:px-8">
                  <Link to={"/"}>
                    <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0 mt-9 mb-6">
                      Newest Cleaning Equipment for House 2024
                    </button>
                  </Link>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7">
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaUserCircle className="text-4xl text-[#dedede]" />
                      Jhon Alexon
                    </h6>
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaRegCalendarCheck className="text-lg text-SecondaryColor-0" />
                      Jan 10, 2024
                    </h6>
                    <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
                      <FaCommentsDollar className="text-lg text-SecondaryColor-0" />
                      02 Comments
                    </h6>
                  </div>
                  <p className="font-Poppins font-light text-TextColor-0 border-t border-BorderColor1-0 pt-5">
                    Dramatically matrix cross-media vortals wireless
                    deliverables. Phosfluorescently underwhelm market driven
                    e-services and 24/365 infrastructures. Intrinsicly
                    incentivize resource sucking markets without customer
                    directed opportunities . Competently reinvent end-to-end
                    bandwidth vis-a-vis go forward strategic theme areas.
                    Monotonectally enhance reliable
                  </p>
                  <p className="font-Poppins font-light text-TextColor-0 mt-5">
                    Enthusiastically productize collaborative interfaces before
                    ethical leadership skills disintermediate global products
                    before real-time portals. Quickly build efficient results
                    rather than
                  </p>
                  <div className="flex flex-col bg-[#f3f4f8] sm:flex-row gap-7 px-4 sm:px-11 py-4 sm:py-10 rounded-md mt-12">
                    <div className="text-6xl text-SecondaryColor-0">
                      <BiSolidQuoteAltRight />
                    </div>
                    <div className="flex-1">
                      <p className="font-Poppins text-HeadingColor-0 sm:text-lg italic">
                        “Monotonectally impact reliable alignments vis-a-vis
                        corporate architectures ortals through cross functional
                        deliverables. testing procedures”
                      </p>
                      <h6 className="font-Inter text-HeadingColor-0 pl-16 mt-4 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-14 before:h-[1px] before:bg-SecondaryColor-0">
                        CEO & Founder
                      </h6>
                    </div>
                  </div>
                  <Link to={"/"}>
                    <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0 mt-14 mb-4">
                      Modern Equipment 2024
                    </button>
                  </Link>
                  <p className="font-Poppins font-light text-TextColor-0">
                    Dramatically matrix cross-media vortals wireless
                    deliverables. Phosfluorescently underwhelm market driven
                    e-services and 24/365 infrastructures. Intrinsicly
                    incentivize resource.
                  </p>
                  <ul className="flex flex-col gap-[14px] mt-7">
                    <li className="flex gap-3 items-center font-Poppins font-light text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-SecondaryColor-0"
                      />
                      Innovate wireless market
                    </li>
                    <li className="flex gap-3 items-center font-Poppins font-light text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-SecondaryColor-0"
                      />
                      Productivate resource sucking
                    </li>
                    <li className="flex gap-3 items-center font-Poppins font-light text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-SecondaryColor-0"
                      />
                      Proactively unleash oriented communities
                    </li>
                    <li className="flex gap-3 items-center font-Poppins font-light text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-SecondaryColor-0"
                      />
                      Credibly develop progressive archi
                    </li>
                    <li className="flex gap-3 items-center font-Poppins font-light text-TextColor-0">
                      <FaCircleCheck
                        size={"20"}
                        className="text-SecondaryColor-0"
                      />
                      Phosfluorescently to customer
                    </li>
                  </ul>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
                    <div>
                      <img src={blogDetailsImg} />
                    </div>
                    <div>
                      <img src={blogDetailsImg2} />
                    </div>
                  </div>
                  <Link to={"/"}>
                    <button className="font-Inter font-semibold text-left text-xl sm:text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0 mt-10 mb-4">
                      Improve Cleaning System
                    </button>
                  </Link>
                  <p className="font-Poppins font-light text-TextColor-0">
                    Dramatically matrix cross-media vortals wireless
                    deliverables. Phosfluorescently underwhelm market driven
                    e-services and 24/365 infrastructures. Intrinsicly
                    incentivize resource.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:justify-between border-t border-BorderColor1-0 mt-9 py-5 px-4 sm:px-8">
                  <div>
                    <h6 className="font-Poppins text-lg font-medium">
                      <Link to={"/"}>
                        <button className="font-Poppins font-normal text-sm px-5 py-2 text-HeadingColor-0 rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-SecondaryColor-0 hover:text-white mr-2 ml-1">
                          Cleaning
                        </button>
                      </Link>
                      <Link to={"/"}>
                        <button className="font-Poppins font-normal text-sm px-5 py-2 text-HeadingColor-0 rounded bg-[#f3f4f8] transition-all duration-500 hover:bg-SecondaryColor-0 hover:text-white">
                          Washing
                        </button>
                      </Link>
                    </h6>
                  </div>
                  <div>
                    <ul className="flex justify-center items-center gap-2">
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-SecondaryColor-0 flex justify-center items-center">
                            <FaFacebookF size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#38ceff] flex justify-center items-center">
                            <FaXTwitter size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#0b4ab1] flex justify-center items-center">
                            <FaLinkedinIn size={"13"} />
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <button className="text-white w-9 h-9 rounded-full bg-[#e92928] flex justify-center items-center">
                            <FaPinterestP size={"13"} />
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-[60px]">
                <div className="rounded-md bg-[#f3f4f8] pt-8 pb-10 px-9">
                  <Link to={"/"}>
                    <button className="font-Inter font-medium text-lg text-HoverColor-0 flex items-center gap-2">
                      <FaAnglesLeft size={"14"} />
                      Previous Post
                    </button>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center gap-5 sm:items-center lg:items-start mt-5"
                  >
                    <div>
                      <img src={itemthumb} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-Inter font-medium sm:text-lg md:text-base 2xl:text-lg text-HoverColor-0 sm:leading-[26px]">
                        Newest Cleaning Equipment for House 2024
                      </h4>
                      <p className="font-Poppins text-sm text-SecondaryColor-0 mt-1">
                        01 Jan, 2024
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="rounded-md bg-[#f3f4f8] pt-8 pb-10 px-9 flex flex-col items-end">
                  <Link to={"/"}>
                    <button className="font-Inter font-medium text-lg text-HoverColor-0 flex items-center gap-2">
                      Next Post
                      <FaAnglesRight size={"14"} />
                    </button>
                  </Link>
                  <Link
                    to={"/"}
                    className="flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center gap-5 sm:items-center lg:items-start mt-5 text-right"
                  >
                    <div className="flex-1">
                      <h4 className="font-Inter font-medium sm:text-lg md:text-base 2xl:text-lg text-HoverColor-0 sm:leading-[26px]">
                        10 Most Popular Cleaning Tips for House
                      </h4>
                      <p className="font-Poppins text-sm text-SecondaryColor-0 mt-1">
                        09 Jan, 2024
                      </p>
                    </div>
                    <div>
                      <img src={itemthumb3} />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-[#f3f4f8] px-4 sm:px-[62px] py-14 rounded-md mt-[60px]">
                <h3 className="font-Inter font-semibold text-HeadingColor-0 text-2xl mb-10">
                  Comments 02
                </h3>
                <div className="flex flex-col sm:flex-row gap-6 border-b border-BorderColor1-0 pb-8">
                  <div>
                    <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                  </div>
                  <div className="flex-1 relative">
                    <h5 className="font-Inter font-medium text-HeadingColor-0 text-lg">
                      David Alexon
                    </h5>
                    <p className="font-Poppins font-light text-TextColor-0 mt-3">
                      Dramatically reinvent adaptive bandwidth vis reliable
                      infrastructures to the progressively iterate distributed
                      interfaces nice day with our fundraising donation
                    </p>
                    <Link to={"/"}>
                      <button className="text-HeadingColor-0 text-sm rounded-full flex items-center gap-2 font-Poppins absolute top-2 right-0">
                        <BiSolidShare
                          size={"18"}
                          className="text-SecondaryColor-0"
                        />
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 mt-10 md:pl-[90px]">
                  <div>
                    <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                  </div>
                  <div className="flex-1 relative">
                    <h5 className="font-Inter font-medium text-HeadingColor-0 text-lg">
                      Michel Hemilton
                    </h5>
                    <p className="font-Poppins font-light text-TextColor-0 mt-3">
                      Dramatically reinvent adaptive bandwidth vis reliable
                      infrastructures to the progressively iterate distributed
                      interfaces nice day with our fundraising donation
                    </p>
                    <Link to={"/"}>
                      <button className="text-HeadingColor-0 text-sm rounded-full flex items-center gap-2 font-Poppins absolute top-2 right-0">
                        <BiSolidShare
                          size={"18"}
                          className="text-SecondaryColor-0"
                        />
                        Reply
                      </button>
                    </Link>
                  </div>
                </div>
                <h3 className="font-Inter font-semibold text-HeadingColor-0 text-xl sm:text-2xl mt-20 mb-10">
                  Post A Comments
                </h3>
                <form action="#" method="post">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-7 mb-5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name*"
                      required
                      className="outline-none rounded-md font-Poppins text-sm placeholder:text-TextColor-0 bg-white w-full px-6 py-2 h-[56px]"
                    />
                    <input
                      type="email"
                      name="email"
                      id="eamil"
                      placeholder="Enter Your E-Mail*"
                      required
                      className="outline-none rounded-md font-Poppins text-sm placeholder:text-TextColor-0 bg-white w-full px-6 py-2 h-[56px]"
                    />
                  </div>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Write A Comment..."
                    required
                    className="outline-none resize-none rounded-md font-Poppins placeholder:text-TextColor-0 text-sm bg-white w-full px-6 py-3 h-[160px]"
                  ></textarea>
                  <div className="flex items-center gap-2 my-7">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      className="text-SecondaryColor-0 cursor-pointer"
                    />
                    <p className="font-Poppins font-light text-TextColor-0">
                      I agree with the handling of your data by this data*
                    </p>
                  </div>
                  <button type="submit" className="primary-btn">
                    Submit Comment
                    <IoIosSend />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative inline-block w-full mb-7 p-4 sm:p-8 lg:p-6 xl:p-8 rounded-md bg-[#f3f4f8]">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[56px] p-6 rounded font-Poppins"
                />
                <button
                  type="submit"
                  className=" text-xl text-white rounded h-[56px] w-[56px] bg-SecondaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-7 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/service_details"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Floor Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details2"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        House Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details3"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Office Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details4"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Cleaning Specialist
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details5"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Window Cleaning
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details6"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center gap-2 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                        kitchen Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:px-8 lg:px-6 xl:px-8 bg-[#f3f4f8] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Popular Post
                </h4>
                <Link to={"/blog-details"}>
                  <button className="group flex gap-4 mb-6">
                    <div>
                      <img src={itemthumb} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        How to Proper Cleaning Floor Carpet
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        01 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb2} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        New cleaning Equipment for House...
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        16 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <Link to={"/blog_details"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb3} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Poppins font-medium text-lg lg:text-base 2xl:text-lg leading-6 text-HeadingColor-0 transition-all duration-500 group-hover:text-SecondaryColor-0">
                        How to Carpet Cleaning Use New Equipment
                      </h6>
                      <p className="font-Poppins text-SecondaryColor-0 text-sm mt-1">
                        27 Jan, 2024
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-10 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Tags
                </h4>
                <ul className="inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Floor Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        House Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Window Cleaning
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Inter text-sm relative z-[1] before:absolute before:top-0 before:left-0 before:rounded before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Pool Cleaning
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
