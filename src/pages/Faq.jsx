import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What investment plans do you offer?",
    answer:
      "We offer structured, fixed-return investment plans designed for predictable and transparent income over defined short-term tenures.",
  },
  {
    question: "What is the minimum and maximum investment amount?",
    answer:
      "The minimum investment starts from ₹1 Lakh. There is no fixed upper limit, and higher investments may qualify for enhanced return brackets or customized terms.",
  },
  {
    question: "What kind of returns can I expect and how are they calculated?",
    answer:
      "Our plans offer fixed returns agreed at the time of investment. Returns are calculated based on the invested principal and tenure, with a detailed return schedule shared in your agreement.",
  },
  {
    question: "Are the returns guaranteed?",
    answer:
      "Yes, returns under our active plans are fixed and guaranteed for the chosen tenure, ensuring steady and predictable growth regardless of market conditions.",
  },
  {
    question: "What is the lock-in period for these investments?",
    answer:
      "The lock-in period depends on the plan you choose. During this period, your capital remains committed to ensure operational stability and predictable returns.",
  },
  {
    question: "Can I withdraw before maturity?",
    answer:
      "Yes, early withdrawal is permitted under certain conditions. In such cases, only the principal amount is refunded and no profit is distributed.",
  },
  {
    question: "How can I make my investment payment?",
    answer:
      "We accept payments via NEFT, RTGS, IMPS, cheque, or demand draft. Online payment options are also available for select plans. Your BDE will share the details after confirmation.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes, partial payments are accepted. The agreement can be drafted after receiving at least 80%, but the investment activates only after full payment.",
  },
  {
    question: "When is my investment considered active?",
    answer:
      "Your investment becomes active on the date the full payment is credited to our account. This date is reflected in your agreement and return schedule.",
  },
  {
    question: "When will I receive payment confirmation?",
    answer:
      "Official confirmation is shared via email or WhatsApp within 24–48 hours of the amount being credited.",
  },
  {
    question: "When will my agreement be prepared?",
    answer:
      "Agreements are prepared once payment is confirmed and KYC documents are verified to ensure all details are accurate before signing.",
  },
  {
    question: "What details are included in the agreement?",
    answer:
      "The agreement includes investor details, investment amount, tenure, rate of return, payout schedule, withdrawal terms, and authorized signatures.",
  },
  {
    question: "How long does it take to receive the signed agreement?",
    answer:
      "The signed agreement is usually issued within 3–5 working days after payment and KYC verification.",
  },
  {
    question: "When do I start receiving returns?",
    answer:
      "Returns begin from the month following your investment activation date, as mentioned in your agreement.",
  },
  {
    question: "How are returns credited?",
    answer:
      "Returns are transferred directly to your registered bank account based on your plan’s payout schedule.",
  },
  {
    question: "Are KYC documents mandatory?",
    answer:
      "Yes, submission of PAN card and valid address proof is mandatory before finalizing your investment.",
  },
  {
    question: "How long has IQueCap been in operation?",
    answer:
      "IQueCap has been operational since 2019 and has served over 2,000 investors with a strong track record of transparency and compliance.",
  },
  {
    question: "Is IQueCap registered with SEBI or RBI?",
    answer:
      "IQueCap is registered under the Ministry of Corporate Affairs (MCA). Our business model does not require SEBI or RBI registration.",
  },
  {
    question: "Can investors visit the office or meet a Relationship Manager?",
    answer:
      "Yes, investors are welcome to meet our Relationship Managers or visit our office for discussions, agreement clarifications, and payout reviews.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-4 md:px-8 lg:px-20 overflow-hidden bg-gradient-to-r from-[#015c64] to-[#0eca85]"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white font-medium text-sm mb-4">
            <HelpCircle className="mr-2" size={16} />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Investor FAQs
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Everything you need to know about investing with iQueCap.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 transition-all duration-300 ${
                openIndex === index ? "ring-2 ring-white/30" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium text-black focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-emerald-400" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {[
            ["100%", "Satisfied Investors"],
            ["24/7", "Support Available"],
            ["1000+", "Active Investments"],
            ["5+", "Years Experience"],
          ].map(([value, label], i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {value}
              </div>
              <div className="text-sm text-white/80">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
