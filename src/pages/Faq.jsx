import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import business from "../assets/images/img2.jpg";

const faqs = [
  {
    question: "How do I start investing?",
    answer:
      "Simply sign up on our platform, complete your profile, and start browsing available startups. Once you find a venture that interests you, follow the steps to invest.",
  },
  {
    question: "What Deliverables/Guarantee do I get on my investment?",
    answer:
      "We provide complete transparency and detailed reports on your investments, ensuring clarity and security.",
  },
  {
    question: "How can iQue Cap help an investor?",
    answer:
      "We offer a curated selection of investment opportunities with risk assessments and potential returns.",
  },
  {
    question: "What are the risks of investing in startups?",
    answer:
      "Investing in startups comes with risks, including market fluctuations and business challenges. However, we conduct thorough due diligence to mitigate risks.",
  },
  {
    question: "Can I withdraw my investment early?",
    answer:
      "Investment terms vary depending on the agreement. Some investments may have lock-in periods, while others allow early withdrawal with certain conditions.",
  },
  {
    question: "How do I track my investments?",
    answer:
      "You can track your investments in real-time through your dashboard, where we provide reports, updates, and performance metrics.",
  },
  {
    question: "Is there a minimum investment amount?",
    answer:
      "Yes, the minimum investment amount varies by startup. You can check the investment requirements on each startup's profile page.",
  },
  {
    question: "Are there any fees for investors?",
    answer:
      "We charge a small platform fee to maintain and improve our services. Details about fees are available on our pricing page.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-semibold text-black">FAQs</h1>
          <h2 className="text-4xl font-bold  text-emerald-900 mt-2">
            Get the Answers to  Common Questions
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Section - FAQs */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-md max-h-[500px] overflow-y-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b-4 last:border-none">
                  <button
                    className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-black focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <ChevronUp className="text-black" />
                    ) : (
                      <ChevronDown className="text-black" />
                    )}
                  </button>
                  {openIndex === index && (
                    <p className="text-black pb-4">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={business}
              alt="Business meeting"
              className="rounded-lg shadow-lg w-full"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
