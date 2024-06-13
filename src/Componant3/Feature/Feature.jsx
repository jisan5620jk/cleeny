/* eslint-disable no-unused-vars */
import featureIcon from "/images/feature-icon-4.png";
import featureIcon2 from "/images/feature-icon-5.png";
import featureIcon3 from "/images/feature-icon-6.png";
import FeatureCard from "./FeatureCard";

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: "House Cleaning",
    featureDesc: "Competently repurpose clean conveniently target",
  },
  {
    id: 1,
    featureIcon: featureIcon2,
    featureTitle: "Office Cleaning",
    featureDesc: "Competently repurpose clean conveniently target",
  },
  {
    id: 1,
    featureIcon: featureIcon3,
    featureTitle: "Door Cleaning",
    featureDesc: "Competently repurpose clean conveniently target",
  },
];

const Feature = () => {
  return (
    <section className="py-[120px] bg-[#f3f4f8]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[78px] sm:gap-7 md:gap-7 xl:gap-[78px]">
          {processData.map(({ id, featureIcon, featureTitle, featureDesc }) => {
            return (
              <div key={id}>
                <FeatureCard
                  featureIcon={featureIcon}
                  featureTitle={featureTitle}
                  featureDesc={featureDesc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
