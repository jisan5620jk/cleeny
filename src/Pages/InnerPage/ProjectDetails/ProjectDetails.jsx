import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import profilethumb from "/images/project-det-team-thumb.png";
import wedgetIcon from "/images/widget-icon.png";
import projectDetailsIcon from "/images/sidber-icon.png";
import projectDetailsIcon2 from "/images/sidber-icon2.png";
import projectDetailsThumb from "/images/sidber-img.png";
import projectDetailsListThumb from "/images/project-det-thumb.png";
import {
  FaArrowRight,
  FaArrowRightLong,
  FaCircleCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ProjectDetails = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"House Floor Cleaning"}
        breadCampLink={"Project Details"}
        breadcampIcon={<FaArrowRightLong />}
        breadcampIcon2={<FaArrowRightLong />}
        breadCampContent={"House Floor Cleaning"}
      />
      <section className="py-[120px] bg-[#f3f4f8]">
        <div className="Container">
          <div className="grid grid-cols-3 gap-[70px]">
            <div className="col-span-3 lg:col-span-1">
              <div className="rounded-lg overflow-hidden bg-white mb-7">
                <h4 className="font-Inter font-medium text-white text-2xl bg-SecondaryColor-0 pt-5 px-9 pb-5">
                  Project Details
                </h4>
                <div className="mx-9 pt-7 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Inter font-light text-TextColor-0">
                    Clients :
                  </p>
                  <h5 className="font-Inter font-medium text-HeadingColor-0 pt-1">
                    Holquim Group & Company
                  </h5>
                </div>
                <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Inter font-light text-TextColor-0">
                    Category :
                  </p>
                  <h5 className="font-Inter font-medium text-HeadingColor-0 pt-1">
                    House Cleaning
                  </h5>
                </div>
                <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
                  <p className="font-Inter font-light text-TextColor-0">
                    Start Date :
                  </p>
                  <h5 className="font-Inter font-medium text-HeadingColor-0 pt-1">
                    05 June, 2024
                  </h5>
                </div>
                <div className="mx-9 pt-3">
                  <p className="font-Inter font-light text-TextColor-0">
                    Project Value :
                  </p>
                  <h5 className="font-Inter font-medium text-HeadingColor-0 pt-1 pb-8">
                    $5,000
                  </h5>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden bg-white mb-7 text-center pt-9 pb-6">
                <img src={profilethumb} className="m-auto" />
                <h6 className="font-Inter font-semibold text-[22px] text-HeadingColor-0 mt-5 mb-1">
                  Abrahum Khan
                </h6>
                <p className="font-Poppins text-TextColor-0 font-light mb-7">
                  Maneger
                </p>
                <ul className="flex justify-center items-center gap-2 border-t border-[#E5E7EA] pt-6">
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
                  <button className="font-Inter text-white flex items-center gap-2 mt-4 mb-[52px]">
                    <MdEmail className="text-xl text-SecondaryColor-0" />
                    example@gmail.com
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="font-Inter text-white flex items-center gap-2 bg-SecondaryColor-0 w-full h-[58px] rounded-md justify-center">
                    Contact Us
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <h2 className="font-Inter font-bold text-3xl sm:text-4xl text-HeadingColor-0">
                Perfectly Cleaning Your House
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
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-white rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#f3f4f8] flex justify-center items-center">
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
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 bg-white rounded-md px-6 py-7">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#f3f4f8] flex justify-center items-center">
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
                Quickly Parallel Task
              </h2>
              <p className="font-Poppins font-light text-TextColor-0 mt-6">
                Methods empowerment. Dramatically architect go forward
                opportunities credibly revolutionize front-end initiatives for
                interoperable outsourcing. Conveniently repurpose market-driven
                deliverables without holistic potentialitiess distinctively
                integrate
              </p>
              <div className="grid gap-7 grid-cols-1 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-11">
                <div>
                  <h2 className="font-Inter font-bold text-2xl sm:text-3xl text-HeadingColor-0">
                    Quickly Parallel Task
                  </h2>
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
                </div>
                <div className="mt-3">
                  <img src={projectDetailsListThumb} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
