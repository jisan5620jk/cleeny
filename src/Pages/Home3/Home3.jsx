import About from "../../Componant3/About/About";
import Banner from "../../Componant3/Banner/Banner";
import Blog from "../../Componant1/Blog/Blog";
import Process from "../../Componant3/Process/Process";
import Service from "../../Componant3/Service/Service";
import Support from "../../Componant3/Support/Support";
import Portfolio from "../../Componant3/Portfolio/Portfolio";
import WhyChoose from "../../Componant3/WhyChoose/WhyChoose";
import TeamMember from "../../Componant3/TeamMember/TeamMember";
import Testimonial from "../../Componant3/Testimonial/Testimonial";
import Feature from "../../Componant3/Feature/Feature";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature/>
      <About />
      <Service />
      <Process />
      <WhyChoose />
      <Portfolio />
      <TeamMember />
      <Testimonial />
      <Support />
      <Blog />
    </>
  );
};

export default Home1;
