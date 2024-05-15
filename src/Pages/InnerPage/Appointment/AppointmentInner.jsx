import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import Support from "../../../Componant1/Support/Support";
import Process from "../../../Componant1/Process/Process";
import Appointment from "./Appoiontment";

const AppointmentInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Book Appoinment"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Book Appoinment"}
      />
      <Appointment />
      <Support />
      <Process />
    </>
  );
};

export default AppointmentInner;
