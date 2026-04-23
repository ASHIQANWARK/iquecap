import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Building } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    investmentRange: "",
    preferredLocation: "",
    preferredLanguage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Investment range options starting from 1 Lakh
  const investmentOptions = [
    "₹1 Lakh - ₹5 Lakhs",
    "₹5 Lakhs - ₹10 Lakhs",
    "₹10 Lakhs - ₹25 Lakhs",
    "₹25 Lakhs - ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "₹1 Crore - ₹5 Crores",
    "₹5 Crores+"
  ];

  // Location options (Indian cities/states)
  const locationOptions = [
    "Mumbai",
    "Delhi NCR",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Other - North India",
    "Other - South India",
    "Other - East India",
    "Other - West India",
    "International"
  ];

  // Language options
  const languageOptions = [
    "English",
    "Hindi",
    "Kannada",
    "Tamil",
    "Telugu",
    "Marathi",
    "Gujarati",
    "Bengali",
    "Malayalam"
  ];

  const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbwLAGp1W742Fv57EeHlc2acjm9Y-hTkVKr0RrLQj75Ys5fqIXIFVLvORz4eP_qt0Wqy/exec"; // Replace with your deployed script URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("investmentRange", formData.investmentRange);
      formDataToSend.append("preferredLocation", formData.preferredLocation);
      formDataToSend.append("preferredLanguage", formData.preferredLanguage);
      formDataToSend.append("timestamp", new Date().toISOString());

      const response = await fetch(GOOGLE_SHEETS_API_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your information has been submitted successfully. We'll contact you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        investmentRange: "",
        preferredLocation: "",
        preferredLanguage: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ type: "", message: "" });
      }, 5000);
    }
  };

  const companyAddress = {
    doorNo: "Startup Park,",
    landmark: "near Madiwala Police Station",
    area: "Sidharata Colony, Santhosapuram, Koramangala 2nd Block,",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560068"
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-[#0d9866] to-[#01454b] overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact Us
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Have questions or need assistance? We are just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info & Map Side */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-emerald-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-emerald-500 p-3 rounded-xl">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">Visit Our Office</h3>
                  <div className="text-emerald-100 space-y-1 text-sm">
                    <p>{companyAddress.doorNo}</p>
                    <p>{companyAddress.landmark}</p>
                    <p>{companyAddress.area}</p>
                    <p>{companyAddress.city}, {companyAddress.state}</p>
                    <p className="font-semibold">{companyAddress.pincode}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Find Us Here</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Startup Park, Sidharata Colony, Santhosapuram, Koramangala 2nd
                Block, Koramangala, Bengaluru, Karnataka 560068
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7832!2d77.6246!3d12.9356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150058b75f01%3A0xd3b7950ec31e6322!2sStartup%20park!5e0!3m2!1sen!2sin!4v1719724986017!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Incube Nation Office Location - Koramangala, Bengaluru"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://maps.google.com/maps?q=84,+3rd+Cross+Rd,+KHB+Block,+Koramangala,+Bengaluru,+Karnataka+560095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-white transition-colors text-sm font-medium flex items-center space-x-2"
                >
                  <FaMapMarkerAlt size={16} />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-emerald-400 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Call Us</h4>
                    <p className="text-emerald-100 text-xs">+918095041714</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-emerald-400 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Email Us</h4>
                    <p className="text-emerald-100 text-xs">support@iquecap.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-emerald-400 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Website</h4>
                    <p className="text-emerald-100 text-xs">www.iquecap.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-emerald-400 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Location</h4>
                    <p className="text-emerald-100 text-xs">Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                Ready to start your investment journey? Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success" 
                    ? "bg-green-100 text-green-700 border border-green-200" 
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Any previous Experience in startups/any investment
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                    placeholder="What is this regarding?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none text-sm"
                    rows="3"
                    placeholder="Tell us about your requirements..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Range *
                    </label>
                    <select
                      name="investmentRange"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                      required
                      value={formData.investmentRange}
                      onChange={handleChange}
                    >
                      <option value="">Select investment range</option>
                      {investmentOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <select
                      name="preferredLocation"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                      required
                      value={formData.preferredLocation}
                      onChange={handleChange}
                    >
                      <option value="">Select your location</option>
                      {locationOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Language *
                    </label>
                    <select
                      name="preferredLanguage"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                      required
                      value={formData.preferredLanguage}
                      onChange={handleChange}
                    >
                      <option value="">Select language</option>
                      {languageOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Form"}
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