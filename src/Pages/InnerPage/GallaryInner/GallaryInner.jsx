import { Link } from "react-router-dom";
import gallaryImg from "/public/images/Componant2/gallary/galary1.jpg";
import gallaryImg2 from "/public/images/Componant2/gallary/galary2.jpg";
import gallaryImg3 from "/public/images/Componant2/gallary/galary3.jpg";
import gallaryImg4 from "/public/images/Componant2/gallary/galary4.jpg";
import gallaryImg5 from "/public/images/Componant2/gallary/galary5.jpg";
import gallaryImg6 from "/public/images/Componant2/gallary/galary6.jpg";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";

const GallaryInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Gallary"}
        breadCampLink={"Gallary"}
        url={"/gallary"}
      />
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-28">
          <div
            className="group relative z-[1] rounded-md inline-block text-center overflow-hidden
           before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-70 hover:before:h-full hover:before:top-0"
          >
            <img src={gallaryImg} className="w-full" />
            <div className="absolute z-[1] transition-all duration-500 opacity-0 bottom-0 left-1/2 group-hover:opacity-100 group-hover:bottom-1/2 -translate-x-1/2 translate-y-1/2">
              <h5 className="font-Lobster text-lg text-white mb-1">Cherity</h5>
              <Link to={"/"}>
                <button className="font-Manrope font-bold text-[22px] sm:text-[26px] lg:text-[22px] xl:text-[26px]  text-white w-[300px]">
                  Education for Childreen
                </button>
              </Link>
            </div>
          </div>
          <div
            className="group relative z-[1] rounded-md inline-block text-center overflow-hidden
           before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-70 hover:before:h-full hover:before:top-0"
          >
            <img src={gallaryImg2} className="w-full" />
            <div className="absolute z-[1] transition-all duration-500 opacity-0 bottom-0 left-1/2 group-hover:opacity-100 group-hover:bottom-1/2 -translate-x-1/2 translate-y-1/2">
              <h5 className="font-Lobster text-lg text-white mb-1">Cherity</h5>
              <Link to={"/"}>
                <button className="font-Manrope font-bold text-[22px] sm:text-[26px] lg:text-[22px] xl:text-[26px]  text-white w-[300px]">
                  Organic Foods for Kids
                </button>
              </Link>
            </div>
          </div>
          <div
            className="group relative z-[1] rounded-md inline-block text-center overflow-hidden
           before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-70 hover:before:h-full hover:before:top-0"
          >
            <img src={gallaryImg3} className="w-full" />
            <div className="absolute z-[1] transition-all duration-500 opacity-0 bottom-0 left-1/2 group-hover:opacity-100 group-hover:bottom-1/2 -translate-x-1/2 translate-y-1/2">
              <h5 className="font-Lobster text-lg text-white mb-1">Cherity</h5>
              <Link to={"/"}>
                <button className="font-Manrope font-bold text-[22px] sm:text-[26px] lg:text-[22px] xl:text-[26px]  text-white w-[300px]">
                  Donate Homeless Kids
                </button>
              </Link>
            </div>
          </div>
          <div
            className="group relative z-[1] rounded-md inline-block text-center overflow-hidden
           before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-70 hover:before:h-full hover:before:top-0"
          >
            <img src={gallaryImg4} className="w-full" />
            <div className="absolute z-[1] transition-all duration-500 opacity-0 bottom-0 left-1/2 group-hover:opacity-100 group-hover:bottom-1/2 -translate-x-1/2 translate-y-1/2">
              <h5 className="font-Lobster text-lg text-white mb-1">Cherity</h5>
              <Link to={"/"}>
                <button className="font-Manrope font-bold text-[22px] sm:text-[26px] lg:text-[22px] xl:text-[26px]  text-white w-[300px]">
                  Food for Orphan People
                </button>
              </Link>
            </div>
          </div>
          <div
            className="group relative z-[1] rounded-md inline-block text-center overflow-hidden
           before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-70 hover:before:h-full hover:before:top-0"
          >
            <img src={gallaryImg5} className="w-full" />
            <div className="absolute z-[1] transition-all duration-500 opacity-0 bottom-0 left-1/2 group-hover:opacity-100 group-hover:bottom-1/2 -translate-x-1/2 translate-y-1/2">
              <h5 className="font-Lobster text-lg text-white mb-1">Cherity</h5>
              <Link to={"/"}>
                <button className="font-Manrope font-bold text-[22px] sm:text-[26px] lg:text-[22px] xl:text-[26px]  text-white w-[300px]">
                  Donate for Happiness
                </button>
              </Link>
            </div>
          </div>
          <div
            className="group relative z-[1] rounded-md inline-block text-center overflow-hidden
           before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-70 hover:before:h-full hover:before:top-0"
          >
            <img src={gallaryImg6} className="w-full" />
            <div className="absolute z-[1] transition-all duration-500 opacity-0 bottom-0 left-1/2 group-hover:opacity-100 group-hover:bottom-1/2 -translate-x-1/2 translate-y-1/2">
              <h5 className="font-Lobster text-lg text-white mb-1">Cherity</h5>
              <Link to={"/"}>
                <button className="font-Manrope font-bold text-[22px] sm:text-[26px] lg:text-[22px] xl:text-[26px]  text-white w-[300px]">
                  Education for Childreen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallaryInner;
