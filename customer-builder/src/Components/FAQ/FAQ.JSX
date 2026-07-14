import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is product personalization software?",
    answer:
      "Customers are able to modify products online before making a purchase. They can add text, upload images, change colors, choose materials, and instantly preview the final product before ordering.",
  },
  {
    question: "Do I need technical skills to use KR Customizer?",
    answer:
      "No. KR Customizer is designed for everyone. Its drag-and-drop interface makes it easy to create personalized products without coding.",
  },
  {
    question:
      "Does the use of product personalization software have the potential to boost sales?",
    answer:
      "Yes. Product personalization increases customer engagement, confidence, and conversion rates by allowing shoppers to visualize their custom products before purchasing.",
  },
  {
    question: "What types of businesses can use KR Customizer?",
    answer:
      "KR Customizer works for apparel, footwear, gifts, furniture, print-on-demand stores, promotional products, jewelry, and many other industries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FCF7FF] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#171B46]">FAQs</h2>

          <p className="mt-4 text-2xl font-semibold text-[#171B46]">
            Product Personalization Software
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-[#171B46]">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp size={22} />
                ) : (
                  <ChevronDown size={22} />
                )}
              </button>

              {openIndex === index && (
                <div className="border-t px-6 py-5">
                  <p className="text-base leading-8 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
