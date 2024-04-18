import boxImg from "/public/images/feature-icon.png";
import boxImg2 from "/public/images/feature-icon2.png";
import boxImg3 from "/public/images/feature-icon3.png";

const Feature = () => {
  return (
    <section className="relative z-10 -mt-[42px]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7">
          <div className="flex items-center gap-7 bg-BodyBg-0 px-9 py-8 rounded">
            <div>
              <img src={boxImg} />
            </div>
            <div className="flex-1">
              <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0">
                House cleeny
              </h5>
              <p className="font-Poppins text-TextColor-0 text-[15px]">
                Competently repurpose clean conveniently target
              </p>
            </div>
          </div>
          <div className="flex items-center gap-7 bg-BodyBg-0 px-9 py-8 rounded">
            <div>
              <img src={boxImg2} />
            </div>
            <div className="flex-1">
              <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0">
                Windwo cleeny
              </h5>
              <p className="font-Poppins text-TextColor-0 text-[15px]">
                Competently repurpose clean conveniently target
              </p>
            </div>
          </div>
          <div className="flex items-center gap-7 bg-BodyBg-0 px-9 py-8 rounded">
            <div>
              <img src={boxImg3} />
            </div>
            <div className="flex-1">
              <h5 className="font-Inter font-semibold text-[22px] text-HeadingColor-0">
                 instrument
              </h5>
              <p className="font-Poppins text-TextColor-0 text-[15px]">
                Competently repurpose clean conveniently target
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
