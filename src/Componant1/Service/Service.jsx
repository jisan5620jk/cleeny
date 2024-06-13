import Appoinment from "./Appoinment";
import ServiceMain from "./ServiceMain";
import serviceShape from "/images/service-shape-1.png";

const Service = () => {
  return (
    <div className="bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat py-28 relative z-10">
      <img
        src={serviceShape}
        className="absolute top-0 left-0 right-0 animate-zoomInOut -z-10"
      />
      <Appoinment />
      <ServiceMain />
    </div>
  );
};

export default Service;
