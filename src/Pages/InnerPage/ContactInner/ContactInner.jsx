import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";

const ContactInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Contact Us"}
        breadCampLink={"Contact Us"}
        url={"/contact"}
      />
      <section className="bg-[#fff6f1] relative z-[1] py-28">
        <div className="Container">
          <div className="text-center">
            <h5 className="sub-title before:left-1/2 before:-translate-x-1/2">
              Contact with Us
            </h5>
            <h1 className="text-HeadingColor-0 text-[20px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              Feel free to write us Anytime
              <br />
              Your
              <span className="text-PrimaryColor-0"> Question</span>
            </h1>
          </div>
          <div className="rounded-md mt-[60px]">
            <form action="#" method="post" className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your name*"
                  required
                  className="w-full h-[62px] px-6 py-2 rounded-md outline-none"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your E-Mail*"
                  required
                  className="w-full h-[62px] px-6 py-2 rounded-md outline-none"
                />{" "}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Enter Your Number"
                  className="w-full h-[62px] px-6 py-2 rounded-md outline-none"
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Your Address*"
                  required
                  className="w-full h-[62px] px-6 py-2 rounded-md outline-none"
                />
              </div>
              <textarea
                name="message"
                id="meassage"
                placeholder="Write a message..."
                className="w-full h-[180px] resize-none px-6 py-2 rounded-md outline-none"
              ></textarea>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="w-[208px] h-[62px] overflow-hidden font-Manrope font-medium bg-PrimaryColor-0 text-white px-6 py-2 rounded-full outline-none relative z-[1] before:absolute before:top-0 before:left-1/2 before:w-0 before:transition-all before:duration-500 before:h-full before:bg-SecondaryColor-0 before:-z-[1] hover:before:left-0 hover:before:w-full"
                >
                  Submit Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
