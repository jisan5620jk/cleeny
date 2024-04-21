import Appoinment from "./Appoinment";
import ServiceMian from "./ServiceMian";
import serviceShape from "/public/images/service-shape-1.png"

const Service = () => {
    return (
      <div className="bg-[url('/public/images/service-bg.png')] bg-cover bg-center bg-no-repeat py-28 relative">
        <img src={serviceShape} className="absolute top-0 left-0 right-0 animate-zoomInOut"/>
        <Appoinment />
        <ServiceMian />
      </div>
    );
};

export default Service;