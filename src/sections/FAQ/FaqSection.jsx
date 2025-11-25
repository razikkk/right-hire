import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/Accordion";
import FadeInView from "../../components/FadeInView";

const FAQPage = () => {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center text-center">

  {/* Heading */}
  <FadeInView delay={0.2}>
    <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
      Frequently Asked Questions
    </h1>
  </FadeInView>

  {/* Subtext */}
  <FadeInView delay={0.5}>
    <p className="text-gray-400 max-w-2xl mb-12">
      Answers to the most common questions about our services, pricing, and policies —
      all in one place.
    </p>
  </FadeInView>

  {/* FAQ Cards */}
  <div className="w-full max-w-3xl flex flex-col gap-6">
    <Accordion type="multiple" className="flex flex-col gap-6">

      {/* Card 1 */}
      <FadeInView delay={0.8}>
        <AccordionItem
          value="faq-1"
          className="bg-black border border-white/10 rounded-xl overflow-hidden"
        >
          <AccordionTrigger className="text-white text-base py-5 px-6 hover:no-underline">
            What documents do I need to rent a car?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 px-6 pb-5">
            You need a valid driving license, ID proof, and a security deposit
            depending on the vehicle type.
          </AccordionContent>
        </AccordionItem>
      </FadeInView>

      {/* Card 2 */}
      <FadeInView delay={1.0}>
        <AccordionItem
          value="faq-2"
          className="bg-black border border-white/10 rounded-xl overflow-hidden"
        >
          <AccordionTrigger className="text-white text-base py-5 px-6 hover:no-underline">
            Is there a security deposit?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 px-6 pb-5">
            Yes, the deposit amount varies by vehicle category. It is returned
            after the car is dropped off safely.
          </AccordionContent>
        </AccordionItem>
      </FadeInView>

      {/* Card 3 */}
      <FadeInView delay={1.2}>
        <AccordionItem
          value="faq-3"
          className="bg-black border border-white/10 rounded-xl overflow-hidden"
        >
          <AccordionTrigger className="text-white text-base py-5 px-6 hover:no-underline">
            Can I rent a car without a credit card?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 px-6 pb-5">
            Absolutely. You can pay via debit card, UPI, or cash depending on availability.
          </AccordionContent>
        </AccordionItem>
      </FadeInView>

      {/* Card 4 */}
      <FadeInView delay={1.4}>
        <AccordionItem
          value="faq-4"
          className="bg-black border border-white/10 rounded-xl overflow-hidden"
        >
          <AccordionTrigger className="text-white text-base py-5 px-6 hover:no-underline">
            Do you offer long-term rentals?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 px-6 pb-5">
            Yes, we offer weekly, monthly, and long-term Lease-to-Own rental plans.
          </AccordionContent>
        </AccordionItem>
      </FadeInView>

      {/* Card 5 */}
      <FadeInView delay={1.6}>
        <AccordionItem
          value="faq-5"
          className="bg-black border border-white/10 rounded-xl overflow-hidden"
        >
          <AccordionTrigger className="text-white text-base py-5 px-6 hover:no-underline">
            What happens if the car breaks down?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 px-6 pb-5">
            We provide immediate roadside assistance and a replacement vehicle
            based on availability.
          </AccordionContent>
        </AccordionItem>
      </FadeInView>

    </Accordion>
  </div>
</section>

  );
};

export default FAQPage;
