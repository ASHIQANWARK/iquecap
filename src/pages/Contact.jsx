import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    investmentRange: "",
    preferredIndustries: "",
    investmentPreference: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      subject,
      message,
      investmentRange,
      preferredIndustries,
      investmentPreference,
    } = formData;

    const whatsappMessage = `Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
Investment Range: ${investmentRange}
Preferred Industries: ${preferredIndustries}
Investment Preference: ${investmentPreference}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/9071600134?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-t from-emerald-950 to-teal-950 overflow-x-hidden">
      <div className="container mx-auto px-4 pt-4 max-w-full">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Contact Us
        </h2>
        <p className="text-center text-xl mb-12 text-gray-300">
          Have questions or need assistance? We are just a message away.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-emerald-950 mr-4">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Visit Us</h5>
                <p className="text-lg">www.iquecap.com</p>
              </div>
            </div>
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-emerald-950 mr-4">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Call Us</h5>
                <p className="text-lg">9071600134</p>
              </div>
            </div>
            <div className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md">
              <div className="text-3xl text-emerald-950 mr-4">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div>
                <h5 className="font-bold text-lg">Email Us</h5>
                <p className="text-lg">ceo@iquecap.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-xl bg-opacity-80 backdrop-blur-md">
              <form onSubmit={sendWhatsAppMessage} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-emerald-950 transition-all"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-emerald-950 transition-all"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-emerald-950 transition-all"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-emerald-950 transition-all"
                  rows="4"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <select
                  name="investmentRange"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-emerald-950 transition-all"
                  required
                  value={formData.investmentRange}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Investment Range
                  </option>
                  <option value="₹10K - ₹50K">₹10K - ₹50K</option>
                  <option value="₹50K - ₹1L">₹50K - ₹1L</option>
                  <option value="₹1L - ₹5L">₹1L - ₹5L</option>
                  <option value="₹5L - ₹10L">₹5L - ₹10L</option>
                  <option value="₹10L - ₹50L">₹10L - ₹50L</option>
                  <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                  <option value="₹1Cr - ₹5Cr">₹1Cr - ₹5Cr</option>
                  <option value="₹5Cr+">₹5Cr+</option>
                </select>

                <select
                  name="preferredIndustries"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-emerald-950 transition-all"
                  required
                  value={formData.preferredIndustries}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Preferred Industries
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Consumer Goods">Consumer Goods</option>
                  <option value="Other">Other</option>
                </select>

                <select
                  name="investmentPreference"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-emerald-950 transition-all"
                  required
                  value={formData.investmentPreference}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Investment Preference
                  </option>
                  <option value="Short-Term">Short-Term</option>
                  <option value="Long-Term">Long-Term</option>
                  <option value="Equity">Equity</option>
                  <option value="Franchise">Franchise</option>
                  <option value="CIP">CIP</option>
                  <option value="OTHERS">OTHERS</option>
                </select>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-t from-emerald-950 to-teal-950 text-white text-lg font-semibold hover:bg-[#162d4f] transition-colors"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
