import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import Appiontment from "./Appiontment";
import Support from "../../../Componant1/Support/Support";
import Process from "../../../Componant1/Process/Process";

const AppiontmentInner = () => {
    return (
      <>
        <Breadcamp
          breadCampTitle={"Book Appoinment"}
          breadcampIcon={<FaArrowRightLong />}
          breadCampContent={"Book Appoinment"}
        />
       <Appiontment />
       <Support />
       <Process />
      </>
    );
};

export default AppiontmentInner;