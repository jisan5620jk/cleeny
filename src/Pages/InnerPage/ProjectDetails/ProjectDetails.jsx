import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import profilethumb from "/public/images/project-det-team-thumb.png";
import wedgetIcon from "/public/images/widget-icon.png";
import projectDetailsThumb from "/public/images/sidber-img.png";
import { FaArrowRight, FaFacebookF, FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ProjectDetails = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"House Floor Cleaning"}
        breadCampLink={"Project Details"}
        breadCampContent={"House Floor Cleaning"}
      />
      <section className="py-[120px] bg-[#f3f4f8]">
        <div className="Container">
          <div className="grid grid-cols-3 gap-[70px]">
            <div className="col-span-1">
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
              <div className="rounded-lg px-9 overflow-hidden bg-[url('/public/images/widget-thumb.png')] bg-cover bg-no-repeat bg-center py-[50px]">
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
            <div className="col-span-2">
              <h2 className="font-Inter font-bold text-4xl text-HeadingColor-0">
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
              <h2 className="font-Inter font-bold text-[30px] text-HeadingColor-0 mt-[74px]">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
