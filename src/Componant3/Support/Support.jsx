import { MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import supportShape from "/images/address-thumb.png";

const Support = () => {
  return (
    <div className="bg-[url('/images/address-bg.png')] bg-cover bg-center bg-no-repeat py-[60px] relative">
      <img
        src={supportShape}
        className="absolute bottom-0 w-[inherit] h-[inherit] left-1/2 hidden lg:block"
      />
      <div className="Container grid grid-cols-1 gap-7 lg:grid-cols-2 items-center ">
        <div>
          <h1 className="font-Inter font-bold text-xl leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white">
            Please Call Us to Take the <br /> Extraordinary Service!
          </h1>
        </div>
        <div className="flex lg:justify-end">
          <Link to={"/"}>
            <button className="primary-btn">
              <MdPhone size={"20"} />
              Call : 123 (4567) 890
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
