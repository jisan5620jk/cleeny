import { Link } from "react-router-dom";
import callImg from"/public/images/subscribe-icon.png"
import footerLogo from "/public/images/footer-logo.png"
import { FaChevronRight, FaFacebookF, FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-HoverColor-0">
      <div className="Container">
        <div className="grid grid-cols-3 items-center bg-[url('/public/images/subscribe-bg.png')] bg-center bg-cover bg-no-repeat">
          <div className="col-span-1">
            <div className="flex items-center gap-6">
              <div>
                <img src={callImg} />
              </div>
              <div>
                <p>Call Us Now</p>
                <Link to={"/"}>
                  <button>+980 765 (546) 900</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-right">
            <h4>Subscribe Now</h4>
            <form action="#" method="post">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter E-Mail*"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div>
            <img src={footerLogo} />
            <p className="font-Poppins text-white">
              Competently repurpose forward conveniently target e-business
              multipurpose clean
            </p>
            <ul className="flex gap-3">
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-Inter text-2xl text-white font-semibold">Company</h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <FaChevronRight className="text-[#334899] text-sm"/>Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <FaChevronRight className="text-[#334899] text-sm"/>About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <FaChevronRight className="text-[#334899] text-sm"/>Our Services
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <FaChevronRight className="text-[#334899] text-sm"/>Meet Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-Inter text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <FaChevronRight className="text-[#334899] text-sm"/>Latest Blog
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
