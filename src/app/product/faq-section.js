import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@mui/material/Container";
import vehicleData from "@/data/vehicle-data.json";
export default function BasicFAQ() {
  const { faq } = vehicleData.vehicleShowcase;
  const leftColumnFAQs = faq.questions.slice(0, 6);
  const rightColumnFAQs = faq.questions.slice(6, 12);

  return (
    <Container maxWidth="xl">
      <div className="grid grid-cols-2 mb-10">
        <div className="mb-5">
          <h2 className=" font-bold mb-6">{faq.header.title}</h2>
          <p>{faq.header.subtitle}</p>
        </div>

        <div className="">
          <p className="text-gray-500 max-w-3xl leading-relaxed">
            {faq.header.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - First 6 FAQs */}
        <div className="space-y-2">
          <Accordion type="single" collapsible className="w-full">
            {leftColumnFAQs.map((item, index) => (
              <AccordionItem key={index} value={`left-item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-xl ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Column - Last 6 FAQs */}
        <div className="space-y-2">
          <Accordion type="single" collapsible className="w-full">
            {rightColumnFAQs.map((item, index) => (
              <AccordionItem key={index + 6} value={`right-item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-xl ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-lg ">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
}
