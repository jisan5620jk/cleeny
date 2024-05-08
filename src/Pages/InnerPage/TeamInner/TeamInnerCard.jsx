/* eslint-disable react/prop-types */
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TeamInnerCard = ({ teamInnerThumb, teamInnerTitle, teamInnerDesig }) => {
  return (
    <div className="group p-[30px] rounded-md overflow-hidden bg-white relative z-10 before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:rounded-e-md before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:h-full hover:before:top-0">
      <div className="rounded overflow-hidden">
        <div>
          <img src={teamInnerThumb} className="w-full" />
        </div>
        <div className="w-10/12 -mt-[45px] bg-[#f4f4f8] rounded-e-md text-center pb-8 transition-all duration-500 relative z-10 before:absolute before:right-0 before:w-0 before:h-full before:rounded-e-md before:bg-white before:-z-10 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 group-hover:-mt-[107px]">
          <h5 className="font-Inter font-semibold text-HeadingColor-0 text-[22px] transition-all duration-500 pt-7">
            {teamInnerTitle}
          </h5>
          <p className="font-Poppins font-light text-TextColor-0 pt-[6px]">
            {teamInnerDesig}
          </p>
          <ul className="-mt-[40px] transition-all duration-500 opacity-0 group-hover:mt-[22px] group-hover:border-white group-hover:opacity-100 flex justify-center items-center gap-2">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamInnerCard;
