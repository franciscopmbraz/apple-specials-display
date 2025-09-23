import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChatBot from "./ChatBot";

const FAQ = () => {
  const faqs = [
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards (Visa, Mastercard, etc.), PayPal, MB Way, and bank transfer."
    },
    {
      question: "Is shipping free?",
      answer: "We offer free shipping for orders above a certain amount (e.g., €50) or during specific promotional campaigns."
    },
    {
      question: "How long does delivery take?",
      answer: "Orders are usually delivered within 1 to 3 business days after payment confirmation, depending on your location."
    },
    {
      question: "Can I pick up my order in-store?",
      answer: "Yes, you can choose the Click & Collect option to pick up your purchase at one of our physical stores at no extra cost."
    },
    {
      question: "Do the products come with a warranty?",
      answer: "All new products include a 2-year warranty in accordance with EU regulations."
    },
    {
      question: "How can I return or exchange a product?",
      answer: "Returns can be requested within 14 days after receiving the order. The product must be in its original packaging and unused."
    },
    {
      question: "Are the iPhones sold genuine and brand new?",
      answer: "Yes, all iPhones are 100% genuine, brand new, and factory sealed with the official manufacturer warranty."
    },
    {
      question: "Do you sell refurbished iPhones?",
      answer: "Currently, we only sell new products, but we may offer refurbished campaigns in the future."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes, we provide interest-free installment plans of up to 12 monthly payments on selected credit cards."
    },
    {
      question: "How can I track my order?",
      answer: "After purchase, we send an email with a tracking code so you can monitor delivery in real time."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      
      <div className="max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <ChatBot />
    </section>
  );
};

export default FAQ;