import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import EventInnerMain from "./EventInnerMain";
import eventImg from "/public/images/Componant2/event/events-1.jpg";
import eventImg2 from "/public/images/Componant2/event/events-2.jpg";
import eventImg3 from "/public/images/Componant2/event/events-3.jpg";
import eventImg4 from "/public/images/Componant2/event/events-4.jpg";
import eventImg5 from "/public/images/Componant2/event/events-5.jpg";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const EventInner = () => {
  return (
    <>
      <Breadcamp
        breadCampLink={"Our Events"}
        breadCampTitle={"Our Events"}
        url={"/events"}
      />
      <section className="py-28">
        <div className="Container">
          <EventInnerMain
            eventImg={eventImg}
            eventDate="10 Dec"
            eventTitle="Learn Exactly how we Arrange a Event"
            eventDesc="Completely create leveraged best practices and B2B interfaces events productivate cutting-edge solutions with go forward supply chains has supply."
            eventTime="December 10 , 12.00 PM"
            eventLocation="102/B New Road, Sandigo, USA"
            url="/eventdetails"
            eventButton="Join Events"
          />
          <EventInnerMain
            eventImg={eventImg2}
            eventDate="10 Dec"
            eventTitle="Medical Campaigns for Childreens"
            eventDesc="Completely create leveraged best practices and B2B interfaces events productivate cutting-edge solutions with go forward supply chains has supply."
            eventTime="December 10 , 12.00 PM"
            eventLocation="102/B New Road, Sandigo, USA"
            url="/eventdetails"
            eventButton="Join Events"
          />
          <EventInnerMain
            eventImg={eventImg3}
            eventDate="10 Dec"
            eventTitle="100+ Orphan Childreen’s Bootcampaigns"
            eventDesc="Completely create leveraged best practices and B2B interfaces events productivate cutting-edge solutions with go forward supply chains has supply."
            eventTime="December 10 , 12.00 PM"
            eventLocation="102/B New Road, Sandigo, USA"
            url="/eventdetails"
            eventButton="Join Events"
          />
          <EventInnerMain
            eventImg={eventImg4}
            eventDate="10 Dec"
            eventTitle="Organic Foods Supply for Orphan Kids"
            eventDesc="Completely create leveraged best practices and B2B interfaces events productivate cutting-edge solutions with go forward supply chains has supply."
            eventTime="December 10 , 12.00 PM"
            eventLocation="102/B New Road, Sandigo, USA"
            url="/eventdetails"
            eventButton="Join Events"
          />
          <EventInnerMain
            eventImg={eventImg5}
            eventDate="10 Dec"
            eventTitle="Blood Donation for Street’s Childreen"
            eventDesc="Completely create leveraged best practices and B2B interfaces events productivate cutting-edge solutions with go forward supply chains has supply."
            eventTime="December 10 , 12.00 PM"
            eventLocation="102/B New Road, Sandigo, USA"
            url="/eventdetails"
            eventButton="Join Events"
          />
          <div className="flex justify-center mt-14">
            <ul className="flex gap-3">
              <li>
                <Link to={"/"}>
                  <button className="text-[17px] font-Manrope h-12 w-12 flex justify-center items-center rounded-full border border-BorderColor2-0 transition-all duration-500 z-[1] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-[1] before:bg-PrimaryColor-0 before:rounded-full before:scale-0 before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                    01
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="text-[17px] font-Manrope h-12 w-12 flex justify-center items-center rounded-full border border-BorderColor2-0 transition-all duration-500 z-[1] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-[1] before:bg-PrimaryColor-0 before:rounded-full before:scale-0 before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                    02
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="text-[17px] font-Manrope h-12 w-12 flex justify-center items-center rounded-full border border-BorderColor2-0 transition-all duration-500 z-[1] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-[1] before:bg-PrimaryColor-0 before:rounded-full before:scale-0 before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                    03
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="text-lg font-Manrope h-12 w-12 flex justify-center items-center rounded-full border border-BorderColor2-0 transition-all duration-500 z-[1] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-[1] before:bg-PrimaryColor-0 before:rounded-full before:scale-0 before:transition-all before:duration-500 hover:before:scale-100 hover:text-white">
                    <RiArrowRightDoubleFill />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventInner;
