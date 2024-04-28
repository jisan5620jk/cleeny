import { FaArrowRightLong } from "react-icons/fa6";

const Appoinment = () => {
  return (
    <div className="Container">
      <div className="text-center">
        <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white">
          Get A Free Appoinment
        </h1>
      </div>
      <form
        action="#"
        method="post"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 items-center mt-14"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name*"
          required
          className="w-full bg-white text-TextColor-0 placeholder:text-TextColor-0 border-none outline-0 h-[60px] rounded py-3 px-6"
        />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone No."
          required
          className="w-full bg-white text-TextColor-0 placeholder:text-TextColor-0 border-none outline-0 h-[60px] rounded py-3 px-6"
        />
        <select
          name="select"
          id="select"
          className="w-full bg-white text-TextColor-0 border-none outline-0 h-[60px] rounded py-3 px-6"
        >
          <option value="service1">Select Service</option>
          <option value="service2">Service1</option>
          <option value="service3">Service2</option>
          <option value="service4">Service3</option>
        </select>
        <button
          type="submit"
          className="w-full bg-PrimaryColor-0 font-medium font-Inter transition-all duration-500 hover:text-white text-TextColor-0 border-none outline-0 h-[60px] rounded py-3 flex items-center justify-center gap-2 relative z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0"
        >
          Book Appionment <FaArrowRightLong />
        </button>
      </form>
    </div>
  );
};

export default Appoinment;
