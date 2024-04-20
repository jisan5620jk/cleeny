/* eslint-disable react/prop-types */
const ProcessCard = ({processIcon,processTitle,processDesc}) => {
    return (
      <div className="text-center group">
        <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-shadow m-auto relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:scale-0 before:h-full before:rounded-3xl before:bg-SecondaryColor-0 before:transition-all before:duration-500 group-hover:before:scale-100">
          <img
            src={processIcon}
            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1] "
          />
        </div>
        <h5 className="font-Inter font-semibold inline-block text-HeadingColor-0 text-2xl relative z-10 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-7 before:h-[2px] before:transition-all before:duration-500 before:bg-SecondaryColor-0 group-hover:before:w-full group-hover:left-0">
          {processTitle}
        </h5>
        <p>{processDesc}</p>
      </div>
    );
};

export default ProcessCard;