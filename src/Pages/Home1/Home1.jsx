import About from "../../Componant1/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Blog from "../../Componant1/Blog/Blog";
import Brand from "../../Componant1/Brand/Brand";
import Feature from "../../Componant1/Feature/Feature";
import Portfolio from "../../Componant1/Portfolio/Portfolio";
import Pricing from "../../Componant1/Pricing/Pricing";
import ProcessCard from "../../Componant1/Process/Process";
import Service from "../../Componant1/Service/Service";
import Support from "../../Componant1/Support/Support";
import Testimonial from "../../Componant1/Testimonial/Testimonial";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Service />
      <ProcessCard/>
      <Portfolio/>
      <Support />
      <Pricing />
      <Testimonial />
      <Blog />
      <Brand/>
    </>
  );
};

export default Home1;
