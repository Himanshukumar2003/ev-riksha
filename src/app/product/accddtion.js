import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days. Express shipping options are available for 1-2 day delivery.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping times vary by location, typically 7-14 business days.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this to track your package on our website or the carrier's site.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers for enterprise customers.",
  },
  {
    question: "Can I modify my order after placing it?",
    answer:
      "You can modify your order within 1 hour of placing it. After that, please contact customer service for assistance.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes, we offer volume discounts for orders over 50 units. Contact our sales team for custom pricing.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "All products come with a 1-year manufacturer warranty. Extended warranty options are available at checkout.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click the 'Sign Up' button in the top right corner, fill in your details, and verify your email address to get started.",
  },
  {
    question: "Can I save items for later?",
    answer:
      "Yes, you can add items to your wishlist or save them in your cart for up to 30 days.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "Yes, our mobile app is available for both iOS and Android devices. Download it from your device's app store.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via email, live chat, or phone. Our support team is available 24/7 to assist you.",
  },
];

export default function BasicFAQ() {
  const leftColumnFAQs = faqData.slice(0, 6);
  const rightColumnFAQs = faqData.slice(6, 12);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-2 mb-10">
        <div className="mb-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            НАШ КОНТИНГЕНТ
          </h2>
          <p>
            Логистическая компания «CARGO EXPERT» <br></br>работает с 2015 года.
          </p>
        </div>

        <div className="">
          <p className="text-gray-500 max-w-3xl leading-relaxed">
            Логистическая компания «CARGO EXPERT» работает с 2015 года. Мы
            оказываем услуги по доставке грузов по всей России и в страны СНГ.
            За время работы мы зарекомендовали себя как надежный партнер,
            который всегда выполняет свои обязательства в срок. Наша команда
            состоит из опытных специалистов, которые знают все тонкости
            логистического бизнеса и готовы решить любые задачи наших клиентов.
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
    </div>
  );
}
