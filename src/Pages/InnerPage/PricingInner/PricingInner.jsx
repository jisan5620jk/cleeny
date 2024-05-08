import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import Pricing from "../../../Componant1/Pricing/Pricing";
import PricingFaq from "./Accordion/PricingFaq";

const PricingInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Projects"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Projects"}
      />
      <Pricing />
      <div>
        <PricingFaq />
      </div>
    </>
  );
};

export default PricingInner;
