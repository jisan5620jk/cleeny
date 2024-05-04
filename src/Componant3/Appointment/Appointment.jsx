import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { IoPlayOutline } from "react-icons/io5";
import appointmentThumb from "/public/images/appointment-thumb.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const Appointment = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section>
      <div className="Container">
        <div className="grid grid-cols-2 gap-20">
          <div className="relative">
            <img src={appointmentThumb} className="w-[inherit]"/>
            <button
              className="h-[90px] w-[90px] rounded-full bg-SecondaryColor-0 border-4 border-white text-white flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping"
              onClick={() => setToggler(!toggler)}
            >
              <IoPlayOutline />
            </button>
            <FsLightbox
              toggler={toggler}
              sources={[
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              ]}
            />
          </div>
          <div>
            <h2 className="font-Inter font-bold text-[40px] mb-11">
              Request A Quote
            </h2>
            <form action="#" method="post" className="flex flex-col gap-7">
              <div className="flex gap-7">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  required
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Your Number"
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
              </div>
              <div className="flex gap-7">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail*"
                  required
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Address"
                  className="border border-[#E3E3E3] rounded py-2 px-6 outline-none h-[56px] w-full"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write A Message..."
                className="border border-[#E3E3E3] rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
              ></textarea>
              <div className="inline-block">
                <button type="submit" className="primary-btn2">
                  Submit Now
                  <FaArrowRightLong size={"20"} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
