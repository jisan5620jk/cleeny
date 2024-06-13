import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { IoPlayOutline } from "react-icons/io5";
import appointmentThumb from "/images/appointment-thumb.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Appointment = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-SecondaryColor-0 before:-z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-SecondaryColor-0 after:-z-10">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src={appointmentThumb}
              className="w-full lg:w-[inherit] lg:max-w-[inherit] lg:-ml-[28.8rem] xl:-ml-[24rem] 2xl:-ml-[19.5rem]"
            />
            <div className="absolute top-0 right-0 2xl:right-7 bg-SecondaryColor-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-es-xl flex justify-center items-center">
              <button
                className="w-[70px] h-[70px] md:h-[92px] md:w-[92px] text-white rounded-2xl bg-transparent flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border before:border-dashed before:border-white before:-z-10 before:rounded-full before:animate-rotational"
                onClick={() => setToggler(!toggler)}
              >
                <IoPlayOutline size={"50"} />
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div>
          </div>
          <div className="mr-2">
            <h2 className="font-Inter font-bold text-3xl md:text-[40px] mb-11">
              Request A Quote
            </h2>
            <form action="#" method="post" className="flex flex-col gap-7">
              <div className="flex flex-col md:flex-row gap-7">
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
              <div className="flex flex-col md:flex-row gap-7">
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
