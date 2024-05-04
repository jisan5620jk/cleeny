/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PortfolioCard = ({
  portfolioThumb,
  portfolioSubTitle,
  portfolioTitle,
  portfolioUrl,
  portfolioIcon,
}) => {
  return (
    <div>
      <div className="relative z-10">
        <img src={portfolioThumb} />
        <div className="portfolio-content2 bg-SecondaryColor-0 rounded-s-md rounded-e-md border-b-4 border-SecondaryColor-0 hover:border-PrimaryColor-0 absolute -bottom-full transition-all duration-500 left-1/2 -translate-x-1/2 flex justify-between items-center w-10/12 pt-6 px-4 lg:px-6 2xl:px-[30px] pb-6">
          <div>
            <p className="text-white font-Inter">
              {portfolioSubTitle}
            </p>
            <Link to={portfolioUrl}>
              <button className="font-Inter font-semibold text-xl sm:text-2xl lg:text-[19px] xl:text-2xl text-white mt-2 text-left">
                {portfolioTitle}
              </button>
            </Link>
          </div>
          <div>
            <Link to={portfolioUrl}>
              <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white bg-PrimaryColor-0 relative -right-11">
                {portfolioIcon}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
