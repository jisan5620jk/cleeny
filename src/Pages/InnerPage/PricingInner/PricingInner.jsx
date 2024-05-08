import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import Pricing from "../../../Componant1/Pricing/Pricing";
import PricingFaq from "./Accordion/PricingFaq";

const PricingInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Affordable Price"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Pricing"}
      />
      <Pricing />
      <div>
        <PricingFaq />
      </div>
    </>
  );
};

export default PricingInner;
