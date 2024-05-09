import ServiceAccordion from "./ServiceAccordion";

const ServiceFaq = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      title: "How to use modern equipment for cleaning?",
      text: "Foster visionary vortals without dynamic convergence. Interactively matrix multimedia based total linkage rather than leading-edges create technically sound",
      active: true,
    },
    {
      title: "What kinds of modern technology?",
      text: "Foster visionary vortals without dynamic convergence. Interactively matrix multimedia based total linkage rather than leading-edges create technically sound",
      active: false,
    },
    {
      title: "Do you have any custom cleaning services?",
      text: "Foster visionary vortals without dynamic convergence. Interactively matrix multimedia based total linkage rather than leading-edges create technically sound",
      active: false,
    },
  ];

  return (
    <main className="relative pt-[58px]">
      <div className="w-full mx-auto">
        <div className="mb-11">
          <h1 className="font-Inter font-bold text-[20px] leading-8 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3">
            Freequently Asked Questions
          </h1>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <ServiceAccordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </ServiceAccordion>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServiceFaq;
