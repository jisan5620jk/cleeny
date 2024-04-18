import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import blogListImg from "/public/images/Componant2/blog/blog-1.jpg";
import blogDetailsImg from "/public/images/Componant2/blog/1-blog.jpg";
import blogDetailsImg2 from "/public/images/Componant2/blog/2-blog.jpg";
import itemthumb from "/public/images/Componant2/blog/post4.jpg";
import itemthumb2 from "/public/images/Componant2/blog/post5.jpg";
import itemthumb3 from "/public/images/Componant2/blog/post6.jpg";
import logo from "/public/images/Componant2/logo/logo-icon.png";
import { VscHeart } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {
  FaCircleCheck,
  FaCommentsDollar,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCalendarCheck,
  FaXTwitter,
} from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";

const BlogDetails = () => {
  return (
    <>
      <Breadcamp
        breadCampLink={"Blog Details"}
        breadCampTitle={"Blog Details"}
        url={"/blogDetails"}
      />
      <section className="py-28">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="col-span-2">
              <div className="pb-8 mb-4">
                <div className="relative">
                  <img src={blogListImg} className="w-full" />
                  <h6 className="font-Manrope text-sm text-white px-5 py-2 rounded-se-2xl absolute bottom-0 left-0 bg-PrimaryColor-0">
                    Cherity
                  </h6>
                </div>
                <Link to={"/"}>
                  <button className="font-Manrope font-black text-xl text-left sm:text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-9 mb-6">
                    Help for Kids Education Donate Money
                  </button>
                </Link>
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7">
                  <h6 className="flex items-center gap-2 font-Manrope text-TextColor-0 text-sm">
                    <FaUserCircle className="text-4xl text-[#dedede]" />
                    Jhon Alexon
                  </h6>
                  <h6 className="flex items-center gap-2 font-Manrope text-TextColor-0 text-sm">
                    <FaRegCalendarCheck className="text-base text-PrimaryColor-0" />
                    Jan 10, 2024
                  </h6>
                  <h6 className="flex items-center gap-2 font-Manrope text-TextColor-0 text-sm">
                    <FaCommentsDollar className="text-base text-PrimaryColor-0" />
                    02 Comments
                  </h6>
                </div>
                <p className="font-Manrope text-TextColor-0 border-t border-BorderColor2-0 pt-5">
                  Dramatically matrix cross-media vortals wireless deliverables.
                  <span className="text-PrimaryColor-0">
                    {" "}
                    Phosfluorescently{" "}
                  </span>
                  underwhelm market driven e-services and 24/365
                  infrastructures. Intrinsicly incentivize resource sucking
                  markets without customer directed
                  <span className="text-PrimaryColor-0"> opportunities </span>.
                  Competently reinvent end-to-end bandwidth vis-a-vis go forward
                  strategic theme areas. Monotonectally enhance reliable
                </p>
                <p className="font-Manrope text-TextColor-0 mt-5">
                  <span className="text-PrimaryColor-0">
                    {" "}
                    Enthusiastically{" "}
                  </span>
                  productize collaborative interfaces before ethical leadership
                  skills
                  <span className="text-PrimaryColor-0"> disintermediate </span>
                  global products before real-time portals. Quickly build
                  efficient results rather than
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="h-[78px] w-[76px] rounded bg-SecondaryColor-0 text-5xl text-white flex justify-center items-center">
                  <BiDonateHeart />
                </div>
                <div className="flex-1">
                  <p className="font-Manrope text-HeadingColor-0 font-medium">
                    “Monotonectally impact reliable alignments vis-a-vis
                    corporate architectures ortals through cross functional
                    deliverables. testing procedures”
                  </p>
                  <h6 className="font-Lobster text-PrimaryColor-0 pl-9 mt-2 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">
                    Jone Alexon
                  </h6>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16">
                <div>
                  <img src={blogDetailsImg} />
                </div>
                <div>
                  <img src={blogDetailsImg2} />
                </div>
              </div>
              <Link to={"/"}>
                <button className="font-Manrope font-black text-left text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-10 mb-4">
                  Why You should Donate them?
                </button>
              </Link>
              <p className="font-Manrope text-TextColor-0">
                Dramatically matrix cross-media vortals wireless deliverables.
                <span className="text-PrimaryColor-0"> Phosfluorescently </span>
                underwhelm market driven e-services and 24/365 infrastructures.
                <span className="text-PrimaryColor-0"> Intrinsicly </span>{" "}
                incentivize resource.
              </p>
              <ul className="mt-9">
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Completely architect competitive information
                </li>
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Must be Maintain Every Rules & Regulations
                </li>
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  You should be a honest & powerful
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between border-t border-BorderColor2-0 mt-9 pt-7">
                <div>
                  <h6 className="font-Manrope text-lg font-medium">
                    Tags :{" "}
                    <Link to={"/"}>
                      <button className="font-Manrope font-normal text-base px-5 py-1 text-HeadingColor-0 rounded-full bg-[#fff5f1] transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white mr-2 ml-1">
                        Educations
                      </button>
                    </Link>
                    <Link to={"/"}>
                      <button className="font-Manrope font-normal text-base px-5 py-1 text-HeadingColor-0 rounded-full bg-[#fff5f1] transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white">
                        Foods
                      </button>
                    </Link>
                  </h6>
                </div>
                <div className="flex gap-2">
                  <h6 className="font-Manrope text-lg font-medium">Share : </h6>
                  <ul className="flex items-center justify-center gap-2 ">
                    <li>
                      <Link to={"/"}>
                        <button
                          className=" text-[#5f6a6a] transition-all duration-500  border-BorderColor2-0 text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-8 h-8 rounded-full relative z-[1] before:absolute before:top-0 before:left-0 before:-z-[1] before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                        >
                          <FaFacebookF />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button
                          className=" text-[#5f6a6a] transition-all duration-500 border border-BorderColor2-0 text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-8 h-8 rounded-full relative z-[1] before:absolute before:top-0 before:left-0 before:-z-[1] before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                        >
                          <FaXTwitter />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button
                          className=" text-[#5f6a6a] transition-all duration-500 border border-BorderColor2-0 text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-8 h-8 rounded-full relative z-[1] before:absolute before:top-0 before:left-0 before:-z-[1] before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                        >
                          <FaLinkedinIn />
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <button
                          className=" text-[#5f6a6a] transition-all duration-500 border border-BorderColor2-0 text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-8 h-8 rounded-full relative z-[1] before:absolute before:top-0 before:left-0 before:-z-[1] before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                        >
                          <FaPinterestP />
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="font-Manrope font-bold text-[28px] mt-[72px] mb-10">
                Comments (2)
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 border-b border-BorderColor2-0 pb-8">
                <div>
                  <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                </div>
                <div className="flex-1 relative">
                  <h5 className="font-Manrope font-semibold text-HeadingColor-0 text-xl">
                    David Alexon
                  </h5>
                  <p className="font-Manrope text-PrimaryColor-0 mt-[6px] mb-2">
                    March 01, 2024
                  </p>
                  <p className="font-Manrope text-TextColor-0">
                    Dramatically reinvent adaptive bandwidth vis reliable
                    infrastructures to the progressively iterate distributed
                    interfaces nice day with our fundraising donation
                  </p>
                  <Link to={"/"}>
                    <button
                      className="px-4 py-1 bg-PrimaryColor-0 text-white text-sm rounded-full
                     font-Manrope absolute top-2 right-0"
                    >
                      Reply
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <div>
                  <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                </div>
                <div className="flex-1 relative">
                  <h5 className="font-Manrope font-semibold text-HeadingColor-0 text-xl">
                    Louse Kerin
                  </h5>
                  <p className="font-Manrope text-PrimaryColor-0 mt-[6px] mb-2">
                    October 01, 2024
                  </p>
                  <p className="font-Manrope text-TextColor-0">
                    Dramatically reinvent adaptive bandwidth vis reliable
                    infrastructures to the progressively iterate distributed
                    interfaces nice day with our fundraising donation
                  </p>
                  <Link to={"/"}>
                    <button
                      className="px-4 py-1 bg-PrimaryColor-0 text-white text-sm rounded-full
                     font-Manrope absolute top-2 right-0"
                    >
                      Reply
                    </button>
                  </Link>
                </div>
              </div>
              <h3 className="font-Manrope font-bold text-[28px] mt-20 mb-10">
                Add New Comments
              </h3>
              <form action="#" method="post">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-7 mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name*"
                    required
                    className="outline-none rounded-3xl font-Manrope text-sm bg-[#fff5f1] w-full px-6 py-2 h-[60px]"
                  />
                  <input
                    type="email"
                    name="email"
                    id="eamil"
                    placeholder="Enter Your E-Mail*"
                    required
                    className="outline-none rounded-3xl font-Manrope text-sm bg-[#fff5f1] w-full px-6 py-2 h-[60px]"
                  />
                </div>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Write A Comment..."
                  required
                  className="outline-none resize-none rounded-3xl font-Manrope text-sm bg-[#fff5f1] w-full px-6 py-3 h-[160px]  mb-9"
                ></textarea>
                <button type="submit" className="primary-btn">
                  Submit Comment
                  <IoIosSend />
                </button>
              </form>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative inline-block w-full mb-7 p-7 rounded-md bg-PrimaryColor-0">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[60px] p-6 rounded font-Manrope"
                />
                <button
                  type="submit"
                  className=" text-xl text-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-12 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="px-8 bg-[#fff4f1] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-HeadingColor-0 mb-8">
                  Upcomming Events
                </h4>
                <Link to={"/blog-details"}>
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
              <div className="bg-[#fff4f1] rounded-md px-9 pt-7 pb-4 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-HeadingColor-0 mb-8">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Charity
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Donations
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Healths
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Foods
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Kid Educations
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Fund Raising
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-[#fff4f1] rounded-md px-4 sm:px-8 lg:px-4 xl:px-8 pt-7 pb-10 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-HeadingColor-0">
                  Tag Cloud
                </h4>
                <ul className="mt-8 inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-[1] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Charity
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-[1] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Educations
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-[1] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Water
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-[1] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Foods
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-[1] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Orphans
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-[1] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Donations
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-[1] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-[1] hover:before:scale-100 hover:text-white">
                        Healths
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-[url('/public/images/Componant2/others/a-1.png')] bg-right bg-cover bg-no-repeat text-center py-[75px] rounded-md mb-7">
                <Link to={"/"}>
                  <img src={logo} className="m-auto" />
                </Link>
                <h4 className="font-Manrope font-bold text-3xl text-white mt-6 mb-6">
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

export default BlogDetails;
