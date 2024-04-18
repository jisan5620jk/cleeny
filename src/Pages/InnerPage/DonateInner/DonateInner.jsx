import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import donateImg from "/public/images/Componant2/donate/donations2.png";
import donateProfile from "/public/images/Componant2/donate/organiz.png";
import itemthumb from "/public/images/Componant2/blog/post1.png";
import itemthumb2 from "/public/images/Componant2/blog/post2.png";
import itemthumb3 from "/public/images/Componant2/blog/post3.png";
import logo from "/public/images/Componant2/logo/logo-icon.png";
import ProgressBar from "react-animated-progress-bar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { VscHeart } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const DonateInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Donations"}
        breadCampLink={"Donations"}
        url={"/donate"}
      />
      <section className="py-28 donate">
        <div className="Container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="col-span-2">
              <div className="border rounded-md border-BorderColor2-0 pb-7">
                <img src={donateImg} className="w-full" />
                <div className="mt-16 px-9">
                  <div className="px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="9px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      margin="0px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="50"
                      defColor={{
                        excellent: "#ff5e14",
                        good: "#fe7f4c",
                        fair: "green",
                        poor: "red",
                      }}
                      trackPathColor="#e8e9e9"
                      trackBorderColor="transparent"
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <h6 className="font-Manrope text-TextColor-0 text-sm">
                      Achived :
                      <span className="text-HeadingColor-0 font-semibold text-[15px]">
                        {" "}
                        $50,000
                      </span>
                    </h6>
                    <h6 className="font-Manrope text-TextColor-0 text-sm">
                      Goal :
                      <span className="text-HeadingColor-0 font-semibold text-[15px]">
                        {" "}
                        $90,000
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <Tabs>
                <div
                  className="bg-SecondaryColor-0 rounded-md
                   px-9 py-4 mb-5 mt-12"
                >
                  <TabPanel className=" flex justify-between items-center">
                    <h5 className="font-Manrope font-medium text-lg text-white">
                      Your Donations :
                    </h5>
                    <h3 className="font-Manrope font-bold text-white text-3xl">
                      $10
                    </h3>
                  </TabPanel>
                  <TabPanel className=" flex justify-between items-center">
                    <h5 className="font-Manrope font-medium text-lg text-white">
                      Your Donations :
                    </h5>
                    <h3 className="font-Manrope font-bold text-white text-3xl">
                      $20
                    </h3>
                  </TabPanel>
                  <TabPanel className=" flex justify-between items-center">
                    <h5 className="font-Manrope font-medium text-lg text-white">
                      Your Donations :
                    </h5>
                    <h3 className="font-Manrope font-bold text-white text-3xl">
                      $30
                    </h3>
                  </TabPanel>
                  <TabPanel className=" flex justify-between items-center">
                    <h5 className="font-Manrope font-medium text-lg text-white">
                      Your Donations :
                    </h5>
                    <h3 className="font-Manrope font-bold text-white text-3xl">
                      $50
                    </h3>
                  </TabPanel>
                  <TabPanel className=" flex justify-between items-center">
                    <h5 className="font-Manrope font-medium text-lg text-white">
                      Your Donations :
                    </h5>
                    <h3 className="font-Manrope font-bold text-white text-3xl">
                      $70
                    </h3>
                  </TabPanel>
                  <TabPanel className=" flex justify-between items-center">
                    <h5 className="font-Manrope font-medium text-lg text-white">
                      Your Donations :
                    </h5>
                    <h3 className="font-Manrope font-bold text-white text-3xl">
                      $100
                    </h3>
                  </TabPanel>
                </div>
                <TabList className="flex gap-2">
                  <Tab className="outline-none w-[90px] h-[52px] bg-[#FFF6F1] cursor-pointer flex items-center justify-center rounded-sm font-Manrope text-HeadingColor-0 transition-all duration-500 hover:text-white hover:bg-PrimaryColor-0">
                    $10
                  </Tab>
                  <Tab className="outline-none w-[90px] h-[52px] bg-[#FFF6F1] cursor-pointer flex items-center justify-center rounded-sm font-Manrope text-HeadingColor-0 transition-all duration-500 hover:text-white hover:bg-PrimaryColor-0">
                    $20
                  </Tab>
                  <Tab className="outline-none w-[90px] h-[52px] bg-[#FFF6F1] cursor-pointer flex items-center justify-center rounded-sm font-Manrope text-HeadingColor-0 transition-all duration-500 hover:text-white hover:bg-PrimaryColor-0">
                    $30
                  </Tab>
                  <Tab className="outline-none w-[90px] h-[52px] bg-[#FFF6F1] cursor-pointer flex items-center justify-center rounded-sm font-Manrope text-HeadingColor-0 transition-all duration-500 hover:text-white hover:bg-PrimaryColor-0">
                    $50
                  </Tab>
                  <Tab className="outline-none w-[90px] h-[52px] bg-[#FFF6F1] cursor-pointer flex items-center justify-center rounded-sm font-Manrope text-HeadingColor-0 transition-all duration-500 hover:text-white hover:bg-PrimaryColor-0">
                    $70
                  </Tab>
                  <Tab className="outline-none w-[90px] h-[52px] bg-[#FFF6F1] cursor-pointer flex items-center justify-center rounded-sm font-Manrope text-HeadingColor-0 transition-all duration-500 hover:text-white hover:bg-PrimaryColor-0">
                    $100
                  </Tab>
                </TabList>
              </Tabs>
              <div>
                <h4 className="font-Manrope font-semibold text-xl text-HeadingColor-0 mb-6 mt-12">
                  Details of You
                </h4>
                <form action="#" method="post">
                  <div className="grid sm:grid-cols-2 gap-7 mb-6">
                    <label htmlFor="name" className="font-Manrope ">
                      First Name*
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter First Name*"
                        required
                        className="border rounded-sm border-BorderColor2-0 w-full h-[58px] px-6 py-2 mt-3"
                      />
                    </label>
                    <label htmlFor="lastname" className="font-Manrope ">
                      Last Name*
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter Last Name*"
                        required
                        className="border rounded-sm border-BorderColor2-0 w-full h-[58px] px-6 py-2 mt-3"
                      />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-7 mb-6">
                    <label htmlFor="email" className="font-Manrope ">
                      E-Mail*
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter E-Mail*"
                        required
                        className="border rounded-sm border-BorderColor2-0 w-full h-[58px] px-6 py-2 mt-3"
                      />
                    </label>
                    <label htmlFor="phone" className="font-Manrope ">
                      Phone*
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter Phone No*"
                        required
                        className="border rounded-sm border-BorderColor2-0 w-full h-[58px] px-6 py-2 mt-3"
                      />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-7 mb-6">
                    <label htmlFor="address1" className="font-Manrope ">
                      Address One*
                      <input
                        type="text"
                        name="address1"
                        id="address1"
                        placeholder="Enter Address One*"
                        required
                        className="border rounded-sm border-BorderColor2-0 w-full h-[58px] px-6 py-2 mt-3"
                      />
                    </label>
                    <label htmlFor="address2" className="font-Manrope ">
                      Address Two
                      <input
                        type="text"
                        name="address2"
                        id="address2"
                        placeholder="Enter Address Two*"
                        required
                        className="border rounded-sm border-BorderColor2-0 w-full h-[58px] px-6 py-2 mt-3"
                      />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-7 mb-6">
                    <label htmlFor="city" className="font-Manrope ">
                      City*
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter Your City*"
                        required
                        className="border rounded-sm border-BorderColor2-0 w-full h-[58px] px-6 py-2 mt-3"
                      />
                    </label>
                    <label htmlFor="zipcode" className="font-Manrope ">
                      Zipcode*
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        placeholder="Enter Zipcode*"
                        required
                        className="border rounded-sm border-BorderColor2-0 w-full h-[58px] px-6 py-2 mt-3"
                      />
                    </label>
                  </div>
                  <h4 className="font-Manrope font-semibold text-xl text-HeadingColor-0 mb-6">
                    Select Payment Method
                  </h4>
                  <button type="submit" className="primary-btn">
                    Donate Now
                    <VscHeart />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="bg-PrimaryColor-0 rounded-md text-center py-10 mb-7">
                <img src={donateProfile} className="m-auto" />
                <h5 className="font-Manrope font-bold text-2xl text-white mt-5 mb-3">
                  Louise A. Kelly
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
                        className="text-white transition-all duration-500 border text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-10 h-10 rounded-full relative z-[1] before:absolute before:top-0 before:left-0 before:-z-[1] before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
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
                <Link to={"/"}>
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
                <Link to={"/"}>
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
                <Link to={"/"}>
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
              <div className="bg-[url('/public/images/Componant2/others/a-1.png')] bg-right bg-cover bg-no-repeat text-center py-[75px] rounded-md">
                <Link to={"/"}>
                  <img src={logo} className="m-auto" />
                </Link>
                <h4 className="font-Manrope font-bold text-3xl text-white mt-6 mb-6">
                  Helping Orphan
                  <br />
                  People
                </h4>
                <Link to={"/"} className="flex justify-center">
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

export default DonateInner;
