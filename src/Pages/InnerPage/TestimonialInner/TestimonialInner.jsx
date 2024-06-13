import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import TestimonialInnerCard from "./TestimonialInnerCard";
import testiImg from "/images/testi-thumb.png";
import testiImg2 from "/images/testi-thumb-2.png";
import testiImg3 from "/images/testi-thumb-6.png";
import testiImg4 from "/images/testi-thumb-7.png";
import testiImg5 from "/images/testi-thumb-8.png";
import testiImg6 from "/images/testi-thumb-9.png";
import testiImg7 from "/images/testi-thumb-10.png";
import testiImg8 from "/images/testi-thumb-11.png";
import testiImg9 from "/images/testi-thumb-12.png";
import { MdOutlineStarPurple500 } from "react-icons/md";

const TestimonialInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Testimonial"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Testimonial"}
      />
      <section className="py-[120px] bg-[url('/images/testimonial-bg-four.png')] bg-cover bg-no-repeat bg-center">
        <div className="Container">
          <div className="text-center mb-[60px]">
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              TESTIMONIALS
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3">
              Our Customer’s Feedback
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div>
              <TestimonialInnerCard
                testiImg={testiImg}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"Anjelina Joli"}
                testiDesignation={"Carpenter"}
                testiDesc={`“Competently cultivate worldwide e-tail professionally engineer high-payoff to Rapidiously network”`}
              />
            </div>
            <div>
              <TestimonialInnerCard
                testiImg={testiImg2}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"John D. Alexon"}
                testiDesignation={"Web Designer"}
                testiDesc={`“Competently customize timely action items with B2B leadership. Efficiently re alternative collaboration and idea-shar rather than turnkey interfaces. Rapid administrate cross”`}
              />
            </div>
            <div className="md:-mt-[72px] lg:mt-0">
              <TestimonialInnerCard
                testiImg={testiImg3}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"John Rohoads"}
                testiDesignation={"Web Developer"}
                testiDesc={`“Competently cultivate worldwide e-tail professionally engineer high-payoff to Rapidiously network”`}
              />
            </div>
            <div className="lg:-mt-[70px] xl:-mt-12">
              <TestimonialInnerCard
                testiImg={testiImg4}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"Mark Stewward"}
                testiDesignation={"Electrician"}
                testiDesc={`“Competently cultivate worldwide e-tail professionally engineer high-payoff to Rapidiously network”`}
              />
            </div>
            <div className="md:-mt-[70px] lg:mt-0">
              <TestimonialInnerCard
                testiImg={testiImg5}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"David Watson"}
                testiDesignation={"Carpenter"}
                testiDesc={`“Competently cultivate worldwide e-tail professionally engineer high-payoff to Rapidiously network”`}
              />
            </div>
            <div className="lg:-mt-[70px] xl:-mt-12">
              <TestimonialInnerCard
                testiImg={testiImg6}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"Tinna E. Rose"}
                testiDesignation={"Engineer"}
                testiDesc={`“Competently customize timely action items with B2B leadership. Efficiently re alternative collaboration and idea-shar rather than turnkey”`}
              />
            </div>
            <div className="md:-mt-[94px] lg:-mt-[72px] xl:-mt-12">
              <TestimonialInnerCard
                testiImg={testiImg7}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"Alvin J. Butlaar"}
                testiDesignation={"Technecian"}
                testiDesc={`“Competently customize timely action items with B2B leadership. Efficiently re alternative collaboration and idea-shar rather than turnkey”`}
              />
            </div>
            <div>
              <TestimonialInnerCard
                testiImg={testiImg8}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"Anjelina Shanta"}
                testiDesignation={"Designer"}
                testiDesc={`“Competently cultivate worldwide e-tail professionally engineer high-payoff to Rapidiously network”`}
              />
            </div>
            <div className="md:-mt-16 lg:-mt-12 xl:-mt-6">
              <TestimonialInnerCard
                testiImg={testiImg9}
                testiRatingIcon={<MdOutlineStarPurple500 />}
                testiName={"Lonei Songer"}
                testiDesignation={"Developer"}
                testiDesc={`“Competently cultivate worldwide e-tail professionally engineer high`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialInner;
