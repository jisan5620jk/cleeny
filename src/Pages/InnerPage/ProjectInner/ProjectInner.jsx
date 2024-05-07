import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import projectThumb from "/public/images/project-img.png"
import projectThumb2 from "/public/images/project-img2.png"
import projectThumb3 from "/public/images/project-img3.png"
import projectThumb4 from "/public/images/project-img4.png"
import projectThumb5 from "/public/images/project-img5.png"
import projectThumb6 from "/public/images/project-img6.png"
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const ProjectInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Projects"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Projects"}
      />
      <section>
        <div className="Container">
          <div className="grid lg:grid-cols-2 lg:items-center">
            <div>
              <h5 className="font-Inter font-medium text-PrimaryColor-0">
                CLEANING PORTFOLIO
              </h5>
              <h1 className="font-Inter font-bold text-[20px] leading-8 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3">
                Latest Cleaning Portfolio <br />
                from Work Gallary
              </h1>
            </div>
            <div>
              <p className="font-Poppins font-light text-TextColor-0">
                Competently repurpose go forward benefits without goal-orien
                conveniently target e-business opportunities whereas parallel
                multimedia based web services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-7">
            <div className="relative group before:absolute before:top-full inline-block before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-HoverColor-0 before:opacity-0 before:inline-block before:rounded-md before:w-[90%] before:h-[90%] before:z-0 before:transition-all before:duration-500 hover:before:opacity-70 hover:before:top-1/2 overflow-hidden">
              <img src={projectThumb} className="w-full" />
              <div className="text-center w-full z-10 absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                <h6 className="flex items-center gap-1 font-Inter text-sm text-white justify-center">
                  <MdLocationOn size={"16"} />
                  Sandigo, USA
                </h6>
                <Link to={"/"}>
                  <button className="font-Inter font-semibold text-white text-2xl pb-4 mt-4 mb-6 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-36 before:h-[1px] before:bg-white">
                    House Floor Cleaning
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="w-[48px] h-[48px] bg-PrimaryColor-0 m-auto rounded-full flex justify-center items-center text-HeadingColor-0">
                    <GoArrowUpRight size={"24"} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group before:absolute before:top-full !inline-block before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-HoverColor-0 before:opacity-0 before:inline-block before:rounded-md before:w-[90%] before:h-[90%] before:z-0 before:transition-all before:duration-500 hover:before:opacity-70 hover:before:top-1/2 overflow-hidden">
              <img src={projectThumb2} className="w-full" />
              <div className="text-center w-full z-10 absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                <h6 className="flex items-center gap-1 font-Inter text-sm text-white justify-center">
                  <MdLocationOn size={"16"} />
                  Sandigo, USA
                </h6>
                <Link to={"/"}>
                  <button className="font-Inter font-semibold text-white text-2xl pb-4 mt-4 mb-6 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-36 before:h-[1px] before:bg-white">
                    House Floor Cleaning
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="w-[48px] h-[48px] bg-PrimaryColor-0 m-auto rounded-full flex justify-center items-center text-HeadingColor-0">
                    <GoArrowUpRight size={"24"} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group before:absolute before:top-full inline-block before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-HoverColor-0 before:opacity-0 before:inline-block before:rounded-md before:w-[90%] before:h-[90%] before:z-0 before:transition-all before:duration-500 hover:before:opacity-70 hover:before:top-1/2 overflow-hidden">
              <img src={projectThumb3} className="w-full" />
              <div className="text-center w-full z-10 absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                <h6 className="flex items-center gap-1 font-Inter text-sm text-white justify-center">
                  <MdLocationOn size={"16"} />
                  Sandigo, USA
                </h6>
                <Link to={"/"}>
                  <button className="font-Inter font-semibold text-white text-2xl pb-4 mt-4 mb-6 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-36 before:h-[1px] before:bg-white">
                    House Floor Cleaning
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="w-[48px] h-[48px] bg-PrimaryColor-0 m-auto rounded-full flex justify-center items-center text-HeadingColor-0">
                    <GoArrowUpRight size={"24"} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group before:absolute before:top-full inline-block before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-HoverColor-0 before:opacity-0 before:inline-block before:rounded-md before:w-[90%] before:h-[90%] before:z-0 before:transition-all before:duration-500 hover:before:opacity-70 hover:before:top-1/2 overflow-hidden">
              <img src={projectThumb4} className="w-full" />
              <div className="text-center w-full z-10 absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                <h6 className="flex items-center gap-1 font-Inter text-sm text-white justify-center">
                  <MdLocationOn size={"16"} />
                  Sandigo, USA
                </h6>
                <Link to={"/"}>
                  <button className="font-Inter font-semibold text-white text-2xl pb-4 mt-4 mb-6 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-36 before:h-[1px] before:bg-white">
                    House Floor Cleaning
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="w-[48px] h-[48px] bg-PrimaryColor-0 m-auto rounded-full flex justify-center items-center text-HeadingColor-0">
                    <GoArrowUpRight size={"24"} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group before:absolute before:top-full inline-block before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-HoverColor-0 before:opacity-0 before:inline-block before:rounded-md before:w-[90%] before:h-[90%] before:z-0 before:transition-all before:duration-500 hover:before:opacity-70 hover:before:top-1/2 overflow-hidden">
              <img src={projectThumb5} className="w-full" />
              <div className="text-center w-full z-10 absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                <h6 className="flex items-center gap-1 font-Inter text-sm text-white justify-center">
                  <MdLocationOn size={"16"} />
                  Sandigo, USA
                </h6>
                <Link to={"/"}>
                  <button className="font-Inter font-semibold text-white text-2xl pb-4 mt-4 mb-6 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-36 before:h-[1px] before:bg-white">
                    House Floor Cleaning
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="w-[48px] h-[48px] bg-PrimaryColor-0 m-auto rounded-full flex justify-center items-center text-HeadingColor-0">
                    <GoArrowUpRight size={"24"} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative group before:absolute before:top-full inline-block before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-HoverColor-0 before:opacity-0 before:inline-block before:rounded-md before:w-[90%] before:h-[90%] before:z-0 before:transition-all before:duration-500 hover:before:opacity-70 hover:before:top-1/2 overflow-hidden">
              <img src={projectThumb6} className="w-full" />
              <div className="text-center w-full z-10 absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                <h6 className="flex items-center gap-1 font-Inter text-sm text-white justify-center">
                  <MdLocationOn size={"16"} />
                  Sandigo, USA
                </h6>
                <Link to={"/"}>
                  <button className="font-Inter font-semibold text-white text-2xl pb-4 mt-4 mb-6 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-36 before:h-[1px] before:bg-white">
                    House Floor Cleaning
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="w-[48px] h-[48px] bg-PrimaryColor-0 m-auto rounded-full flex justify-center items-center text-HeadingColor-0">
                    <GoArrowUpRight size={"24"} />
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

export default ProjectInner;
