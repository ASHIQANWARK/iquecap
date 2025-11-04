import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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
        {/* Heading Section */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white font-medium text-sm mb-4">
            <HelpCircle className="mr-2" size={16} />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Get Answers to Common Questions
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Everything you need to know about investing with iQue Capital. Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 transition-all duration-300 ${openIndex === index ? 'ring-2 ring-white/30' : ''}`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium text-black focus:outline-none transition-colors duration-300 hover:text-white"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-emerald-200 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-white/70 flex-shrink-0" size={20} />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-5 pb-5 text-white/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-white/80">Satisfied Investors</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-white/80">Support Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-sm text-white/80">Active Investments</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-sm text-white/80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}