import About from "../../Componant3/About/About";
import Banner from "../../Componant3/Banner/Banner";
import Blog from "../../Componant3/Blog/Blog";
import Service from "../../Componant3/Service/Service";
import Brand from "../../Componant2/Brand/Brand";
import Portfolio from "../../Componant3/Portfolio/Portfolio";
import TeamMember from "../../Componant3/TeamMember/TeamMember";
import Testimonial from "../../Componant3/Testimonial/Testimonial";
import Feature from "../../Componant3/Feature/Feature";
import Appointment from "../../Componant3/Appointment/Appointment";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature/>
      <About />
      <Service />
      <TeamMember />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Appointment />
      <Brand />
    </>
  );
};

export default Home1;
