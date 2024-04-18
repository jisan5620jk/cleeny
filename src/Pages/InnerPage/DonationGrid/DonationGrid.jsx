import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import { BsAlarmFill } from "react-icons/bs";
import ProgressBar from "react-animated-progress-bar";
import donateImg from "/public/images/Componant2/donate/donate1.jpg";
import donateImg2 from "/public/images/Componant2/donate/donate2.png";
import donateImg3 from "/public/images/Componant2/donate/donate3.png";
import donateImg4 from "/public/images/Componant2/donate/donate4.png";
import donateImg5 from "/public/images/Componant2/donate/donate5.png";
import donateImg6 from "/public/images/Componant2/donate/donate6.png";

const DonationGrid = () => {
  return (
    <>
      <Breadcamp
        breadCampLink={"Donation Grid"}
        breadCampTitle={"Donation Grid"}
        url={"/donategrid"}
      />
      <section className="py-28">
        <div className="Container donate">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="inline-block bg-white">
              <div className="relative border-b-[5px] border-PrimaryColor-0 inline-block">
                <img src={donateImg} className="w-[600px]" />
                <h6 className="font-Manrope font-medium text-white bg-PrimaryColor-0 px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                  Foods
                </h6>
              </div>
              <div className="shadow-cases px-8 pb-9 pt-4">
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0">
                    Raise fund for clean & healthy foods
                  </button>
                </Link>
                <h6 className="flex gap-2 items-center mt-5 mb-7">
                  <BsAlarmFill className="text-PrimaryColor-0 text-lg" />
                  150 Days Remaining
                </h6>
                <div className="bg-[#edfaf5] rounded-md px-5 pt-9 pb-4">
                  <div className="px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="6px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      margin="0px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="65"
                      defColor={{
                        excellent: "#ff5e14",
                        good: "#fd7e4b",
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
            </div>
            <div className="inline-block bg-white">
              <div className="relative border-b-[5px] border-SecondaryColor-0 inline-block">
                <img src={donateImg2} className="w-[600px]" />
                <h6 className="font-Manrope font-medium text-white bg-SecondaryColor-0 px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                  Educations
                </h6>
              </div>
              <div className="shadow-cases px-8 pb-9 pt-4">
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0">
                    Give a good education orphan childreen
                  </button>
                </Link>
                <h6 className="flex gap-2 items-center mt-5 mb-7">
                  <BsAlarmFill className="text-SecondaryColor-0 text-lg" />
                  150 Days Remaining
                </h6>
                <div className="bg-[#fff2ed] rounded-md px-5 pt-9 pb-4">
                  <div className="px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="6px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      margin="0px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="70.1"
                      defColor={{
                        excellent: "#53c99f",
                        good: "#53c99f",
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
            </div>
            <div className="inline-block bg-white">
              <div className="relative border-b-[5px] border-[#1cc6e9] inline-block">
                <img src={donateImg3} className="w-[600px]" />
                <h6 className="font-Manrope font-medium text-white bg-[#1cc6e9] px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                  Foods
                </h6>
              </div>
              <div className="shadow-cases px-8 pb-9 pt-4">
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-[#1cc6e9]">
                    Build home for African poor womens
                  </button>
                </Link>
                <h6 className="flex gap-2 items-center mt-5 mb-7">
                  <BsAlarmFill className="text-[#1cc6e9] text-lg" />
                  150 Days Remaining
                </h6>
                <div className="bg-[#e7f9fd] rounded-md px-5 pt-9 pb-4">
                  <div className="px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="6px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      margin="0px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="80.5"
                      defColor={{
                        excellent: "#1cc6e9",
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
            </div>
            <div className="inline-block bg-white">
              <div className="relative border-b-[5px] border-PrimaryColor-0 inline-block">
                <img src={donateImg4} className="w-[600px]" />
                <h6 className="font-Manrope font-medium text-white bg-PrimaryColor-0 px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                  Foods
                </h6>
              </div>
              <div className="shadow-cases px-8 pb-9 pt-4">
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0">
                    Raise fund for clean & healthy foods
                  </button>
                </Link>
                <h6 className="flex gap-2 items-center mt-5 mb-7">
                  <BsAlarmFill className="text-PrimaryColor-0 text-lg" />
                  150 Days Remaining
                </h6>
                <div className="bg-[#edfaf5] rounded-md px-5 pt-9 pb-4">
                  <div className="px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="6px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      margin="0px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="65"
                      defColor={{
                        excellent: "#ff5e14",
                        good: "#fd7e4b",
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
            </div>
            <div className="inline-block bg-white">
              <div className="relative border-b-[5px] border-SecondaryColor-0 inline-block">
                <img src={donateImg5} className="w-[600px]" />
                <h6 className="font-Manrope font-medium text-white bg-SecondaryColor-0 px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                  Educations
                </h6>
              </div>
              <div className="shadow-cases px-8 pb-9 pt-4">
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0">
                    Give a good education orphan childreen
                  </button>
                </Link>
                <h6 className="flex gap-2 items-center mt-5 mb-7">
                  <BsAlarmFill className="text-SecondaryColor-0 text-lg" />
                  150 Days Remaining
                </h6>
                <div className="bg-[#fff2ed] rounded-md px-5 pt-9 pb-4">
                  <div className="px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="6px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      margin="0px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="70.1"
                      defColor={{
                        excellent: "#53c99f",
                        good: "#53c99f",
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
            </div>
            <div className="inline-block bg-white">
              <div className="relative border-b-[5px] border-[#1cc6e9] inline-block">
                <img src={donateImg6} className="w-[600px]" />
                <h6 className="font-Manrope font-medium text-white bg-[#1cc6e9] px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                  Foods
                </h6>
              </div>
              <div className="shadow-cases px-8 pb-9 pt-4">
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-[#1cc6e9]">
                    Build home for African poor womens
                  </button>
                </Link>
                <h6 className="flex gap-2 items-center mt-5 mb-7">
                  <BsAlarmFill className="text-[#1cc6e9] text-lg" />
                  150 Days Remaining
                </h6>
                <div className="bg-[#e7f9fd] rounded-md px-5 pt-9 pb-4">
                  <div className="px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="6px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      margin="0px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="80.5"
                      defColor={{
                        excellent: "#1cc6e9",
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationGrid;
