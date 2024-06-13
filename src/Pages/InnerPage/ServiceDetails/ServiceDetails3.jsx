import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import wedgetIcon from "/images/widget-icon.png";
import projectDetailsIcon from "/images/sidber-icon.png";
import projectDetailsIcon2 from "/images/sidber-icon2.png";
import projectDetailsThumb from "/images/sidber-thumb.png";
import compareImg from "/images/sidber-img2.png";
import compareImg2 from "/images/sidber-img.png";
import {
  FaArrowRight,
  FaArrowRightLong,
  FaRegFolderOpen,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import ReactCompareImage from "react-compare-image";
import ServiceFaq from "./Accordion/ServiceFaq";

const ServiceDetails3 = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Office cleaning"}
        breadCampLink={"Serivces"}
        breadcampIcon={<FaArrowRightLong />}
        breadcampIcon2={<FaArrowRightLong />}
        breadCampContent={"Office cleaning"}
      />
      <section className="py-[120px] bg-white">
        <div className="Container">
          <div className="grid grid-cols-3 gap-[70px]">
            <div className="col-span-3 lg:col-span-1">
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/service_details"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Floor Cleaning
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details2"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                          House Cleaning
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details3"}>
                      <button className="w-full font-Inter text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-SecondaryColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-white transition-all duration-500 group-hover:text-white" />
                          Office Cleaning
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details4"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Cleaning Specialist
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details5"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                          Window Cleaning
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/service_details6"}>
                      <button className="w-full font-Inter text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-white mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <FaRegFolderOpen className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white" />
                          kitchen Cleaning
                        </span>
                        <FaArrowRightLong className="text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-[#f3f4f8] rounded-md px-4 sm:px-8 lg:px-6 xl:px-8 pt-7 pb-4 mb-7">
                <h4 className="font-Inter font-semibold text-2xl text-HeadingColor-0 pb-3 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-SecondaryColor-0">
                  Downloads
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Inter text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-HoverColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <BsFileEarmarkPdf
                            size={"20"}
                            className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white"
                          />
                          Service Report
                        </span>
                        <HiDownload size={"24"} className="text-white" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Inter text-left text-white transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded bg-HoverColor-0 mb-3 overflow-hidden z-[1] relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-[1] before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        <span className="flex items-center gap-3">
                          <BsFileEarmarkPdf
                            size={"20"}
                            className="text-SecondaryColor-0 transition-all duration-500 group-hover:text-white"
                          />
                          Service List
                        </span>
                        <HiDownload size={"24"} className="text-white" />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg px-9 overflow-hidden bg-[url('/images/widget-thumb.png')] bg-cover bg-no-repeat bg-center py-[50px]">
                <img src={wedgetIcon} />
                <h6 className="font-Inter font-medium text-lg text-white mt-5 mb-2">
                  Call Us Anytime
                </h6>
                <Link to={"/"}>
                  <button className="font-Inter font-semibold text-2xl text-white">
                    +123 (4567) 890
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="font-Inter text-white flex items-center mt-4 mb-[52px]">
                    <MdEmail className="text-xl text-SecondaryColor-0" />
                    example@gmail.com
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="font-Inter text-white flex items-center bg-SecondaryColor-0 w-full h-[58px] rounded-md justify-center">
                    Contact Us
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <h2 className="font-Inter font-bold text-[26px] sm:text-4xl text-HeadingColor-0">
                Appropriately engage leading-edge
              </h2>
              <p className="font-Poppins font-light text-TextColor-0 mt-6">
                Alternative innovation to ethical network environmental
                whiteboard pursue compelling results premier methods
                empowerment. Dramatically architect go forward opportunities
                before user-centric partner Credibly implement exceptional
              </p>
              <p className="font-Poppins font-light text-TextColor-0 mt-7 mb-9">
                Continually fashion orthogonal leadership skills whereas
                wireless metrics. Uniquely syndicate exceptio opportunities with
                interdependent users. Globally enhance fully tested
                meta-services rather than pan solutions. Proactively integrate
                client-integrate go forward architectures and turnkey
                meta-services. Interactively harness integrated ROI whereas
                frictionless products.
              </p>
              <img src={projectDetailsThumb} className="w-full" />
              <h2 className="font-Inter font-bold text-2xl sm:text-3xl text-HeadingColor-0 mt-[74px]">
                What the Benifits?
              </h2>
              <p className="font-Poppins font-light text-TextColor-0 mt-6">
                Alternative innovation to ethical network environmental
                whiteboard pursue compelling results for premier methods
                empowerment. Dramatically architect go forward opportunities
                credibly revolutionize front-end initiatives for interoperable
                outsourcing. Conveniently repurpose market-driven deliverables
                without holistic potentialitiess distinctively integrate
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-7">
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={projectDetailsIcon} />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Inter font-semibold text-[22px] text-HeadingColor-0">
                      Proper Washing
                    </h6>
                    <p className="font-Poppins font-light text-TextColor-0 mt-3">
                      Ethical network environmental architect go forward opportu
                      credibly implement
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-[#f3f4f8] rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-white flex justify-center items-center">
                    <img src={projectDetailsIcon2} />
                  </div>
                  <div className="flex-1">
                    <h6 className="font-Inter font-semibold text-[22px] text-HeadingColor-0">
                      Proper cleeny
                    </h6>
                    <p className="font-Poppins font-light text-TextColor-0 mt-3">
                      Ethical network environmental architect go forward opportu
                      credibly implement
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="font-Inter font-bold text-2xl sm:text-3xl text-HeadingColor-0 mt-[74px]">
                Service Quality
              </h2>
              <p className="font-Poppins font-light text-TextColor-0 mt-6">
                Methods empowerment. Dramatically architect go forward
                opportunities credibly revolutionize front-end initiatives for
                interoperable outsourcing. Conveniently repurpose market-driven
                deliverables without holistic potentialitiess distinctively
                integrate
              </p>
              <div className="rounded-md overflow-hidden mt-7">
                <ReactCompareImage
                  leftImage={compareImg}
                  rightImage={compareImg2}
                />
              </div>
              <ServiceFaq />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails3;
