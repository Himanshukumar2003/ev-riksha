import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@mui/material/Container";

export default function BasicFAQ({ product }) {
  const { faq } = product;
  const leftColumnFAQs = faq.questions.slice(
    0,
    Math.ceil(faq.questions.length / 2)
  );
  const rightColumnFAQs = faq.questions.slice(
    Math.ceil(faq.questions.length / 2)
  );

  return (
    <div className="bg-gray-100 section ">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8">
          <div className="mb-5">
            <h2 className="text-4xl font-bold mb-6">{faq.header.title}</h2>
            <p className="text-xl text-gray-700">{faq.header.subtitle}</p>
          </div>

          <div>
            <p className="text-gray-500 max-w-3xl leading-relaxed">
              {faq.header.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-2">
            <Accordion type="single" collapsible className="w-full">
              {leftColumnFAQs.map((item, index) => (
                <AccordionItem key={index} value={`left-item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <Accordion type="single" collapsible className="w-full">
              {rightColumnFAQs.map((item, index) => (
                <AccordionItem
                  key={index + leftColumnFAQs.length}
                  value={`right-item-${index}`}
                >
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}
