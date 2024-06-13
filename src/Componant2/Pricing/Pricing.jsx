/* eslint-disable no-unused-vars */
import pricingShape from "/images/pricing-shape.png";
import { FaCheck } from "react-icons/fa6";
import PricingCard from "./PricingCard";

const pricingData = [
  {
    id: 1,
    currency: "$",
    price: 39,
    pricingDateLine: "Monthly",
    pricingTitle: "Starter Plans",
    pricingIcon: <FaCheck />,
    pricingContent1: "15% OFF All Service",
    pricingContent2: "Floor Wash & cleeny",
    pricingContent3: "Maintaince Equipment",
    pricingContent4: "Schedule Working",
    pricingContent5: "24/7 Supports",
    pricingUrl: "/pricing",
    pricingBtn: "Choose Plan",
    pricingShape: pricingShape,
  },
  {
    id: 2,
    currency: "$",
    price: 59,
    pricingDateLine: "Monthly",
    pricingTitle: "Standard Plans",
    pricingIcon: <FaCheck />,
    pricingContent1: "15% OFF All Service",
    pricingContent2: "Floor Wash & cleeny",
    pricingContent3: "Maintaince Equipment",
    pricingContent4: "Schedule Working",
    pricingContent5: "24/7 Supports",
    pricingUrl: "/pricing",
    pricingBtn: "Choose Plan",
    pricingShape: pricingShape,
  },
  {
    id: 3,
    currency: "$",
    price: 89,
    pricingDateLine: "Monthly",
    pricingTitle: "Premium Plans",
    pricingIcon: <FaCheck />,
    pricingContent1: "15% OFF All Service",
    pricingContent2: "Floor Wash & cleeny",
    pricingContent3: "Maintaince Equipment",
    pricingContent4: "Schedule Working",
    pricingContent5: "24/7 Supports",
    pricingUrl: "/pricing",
    pricingBtn: "Choose Plan",
    pricingShape: pricingShape,
  },
];

const Pricing = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="text-center">
          <div>
            <h5 className="font-Inter font-medium text-SecondaryColor-0">
              PRICING PLAN
            </h5>
            <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3 mb-3">
              Affordable Pricing Plan
            </h1>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {pricingData.map(
              ({
                id,
                currency,
                price,
                pricingDateLine,
                pricingTitle,
                pricingIcon,
                pricingContent1,
                pricingContent2,
                pricingContent3,
                pricingContent4,
                pricingContent5,
                pricingUrl,
                pricingBtn,
                pricingShape,
              }) => {
                return (
                  <div key={id}>
                    <PricingCard
                      currency={currency}
                      price={price}
                      pricingDateLine={pricingDateLine}
                      pricingTitle={pricingTitle}
                      pricingIcon={pricingIcon}
                      pricingContent1={pricingContent1}
                      pricingContent2={pricingContent2}
                      pricingContent3={pricingContent3}
                      pricingContent4={pricingContent4}
                      pricingContent5={pricingContent5}
                      pricingUrl={pricingUrl}
                      pricingBtn={pricingBtn}
                      pricingShape={pricingShape}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
