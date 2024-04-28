import About from "../../Componant2/About/About";
import Banner from "../../Componant2/Banner/Banner";
import Blog from "../../Componant1/Blog/Blog";
import Process from "../../Componant2/Process/Process";
import Service from "../../Componant2/Service/Service";
import Support from "../../Componant2/Support/Support";
import Portfolio from "../../Componant2/Portfolio/Portfolio";
import WhyChoose from "../../Componant2/WhyChoose/WhyChoose";
import TeamMember from "../../Componant2/TeamMember/TeamMember";
import Testimonial from "../../Componant2/Testimonial/Testimonial";

const Home1 = () => {
  return (
    <>
      <Banner />
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
