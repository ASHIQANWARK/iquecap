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
      className="relative py-16 px-4 md:px-8 lg:px-20 bg-gradient-to-br from-slate-50 to-emerald-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">
            <HelpCircle className="mr-2" size={16} />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Get Answers to Common Questions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about investing with iQue Capital. Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white p-2 rounded-2xl shadow-lg shadow-emerald-100/50 border border-emerald-100/50 transition-all duration-300 ${openIndex === index ? 'ring-2 ring-emerald-200' : ''}`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-medium text-slate-800 focus:outline-none transition-colors duration-300 hover:text-emerald-700"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-emerald-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-slate-500 flex-shrink-0" size={20} />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-5 pb-5 text-slate-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className={`bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-emerald-100">Our investment specialists are ready to help you make informed decisions.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-5 py-3 bg-white text-emerald-600 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Phone className="mr-2" size={18} />
                Call Support
              </button>
              <button className="flex items-center justify-center px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Mail className="mr-2" size={18} />
                Email Us
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-emerald-700 mb-2">100%</div>
            <div className="text-sm text-slate-600">Satisfied Investors</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-emerald-700 mb-2">24/7</div>
            <div className="text-sm text-slate-600">Support Available</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-emerald-700 mb-2">1000+</div>
            <div className="text-sm text-slate-600">Active Investments</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-emerald-700 mb-2">2+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}