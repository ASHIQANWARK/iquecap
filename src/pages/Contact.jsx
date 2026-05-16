import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Building,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

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
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const investmentOptions = [
    "₹1 Lakh - ₹5 Lakhs",
    "₹5 Lakhs - ₹10 Lakhs",
    "₹10 Lakhs - ₹25 Lakhs",
    "₹25 Lakhs - ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "₹1 Crore - ₹5 Crores",
    "₹5 Crores+",
  ];

  const locationOptions = [
    "Kerala",
    "Tamil Nadu",
    "Karnataka",
    "Andhra Pradesh",
    "Telangana",
    "Maharashtra (Mumbai)",
    "Delhi NCR",
    "Other - North India",
    "Other - East India",
    "Other - West India",
    "International",
  ];

  const languageOptions = [
    "Malayalam",
    "Tamil",
    "Kannada",
    "Telugu",
    "Hindi",
    "English",
    "Marathi",
    "Gujarati",
    "Bengali",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setSubmitStatus({
        type: "error",
        message: "Please accept the consent checkbox to continue.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const data = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        investmentRange: formData.investmentRange,
        preferredLocation: formData.preferredLocation,
        preferredLanguage: formData.preferredLanguage,
        timestamp: new Date().toISOString(),
      };

      const whatsappMessage = `🆕 *NEW INVESTMENT LEAD* 🆕
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
💰 *Investment:* ${data.investmentRange}
📍 *Location:* ${data.preferredLocation}
🗣️ *Language:* ${data.preferredLanguage}
📝 *Experience:* ${data.subject}
💬 *Message:* ${data.message}
⏰ *Time:* ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━
🔔 *Action Required: Contact lead within 24 hours*`;

      const encodedMessage = encodeURIComponent(whatsappMessage);

      const whatsappUrl = `https://wa.me/919036913399?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      setSubmitStatus({
        type: "success",
        message:
          "✓ Opening WhatsApp! Send the message to connect with us instantly.",
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
        consent: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      setSubmitStatus({
        type: "error",
        message:
          "⚠️ Please click the WhatsApp button below to contact us directly.",
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
    area:
      "Sidharata Colony, Santhosapuram, Koramangala 2nd Block,",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560068",
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-[#0d9866] to-[#01454b] overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact Us
          </h2>

          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Have questions or need assistance? We are just a
            message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md rounded-2xl p-6 border border-green-400/30 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-500 p-3 rounded-xl animate-pulse">
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Chat with us on WhatsApp
                  </h3>

                  <p className="text-emerald-100 text-sm mb-3">
                    Quick response within minutes
                  </p>

                  <a
                    href="https://wa.me/919036913399?text=Hello%21%20I%27m%20interested%20in%20investing%20with%20iQuecap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Click to WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-emerald-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-emerald-500 p-3 rounded-xl">
                  <Building className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Visit Our Office
                  </h3>

                  <div className="text-emerald-100 space-y-1 text-sm">
                    <p>{companyAddress.doorNo}</p>
                    <p>{companyAddress.landmark}</p>
                    <p>{companyAddress.area}</p>
                    <p>
                      {companyAddress.city},{" "}
                      {companyAddress.state}
                    </p>
                    <p className="font-semibold">
                      {companyAddress.pincode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
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
                  title="Office Location - Koramangala, Bengaluru"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://maps.google.com/maps?q=Startup+Park+Koramangala+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-white transition-colors text-sm font-medium flex items-center space-x-2"
                >
                  <FaMapMarkerAlt size={16} />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      Call Us
                    </h4>

                    <p className="text-emerald-100 text-xs">
                      +919036913399
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      Email Us
                    </h4>

                    <p className="text-emerald-100 text-xs">
                      support@iquecap.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Globe className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      Website
                    </h4>

                    <p className="text-emerald-100 text-xs">
                      www.iquecap.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      Location
                    </h4>

                    <p className="text-emerald-100 text-xs">
                      Bengaluru
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Get In Touch
              </h3>

              <p className="text-gray-600 mb-6">
                Ready to start your investment journey?
                Fill out the form and connect instantly
                through WhatsApp.
              </p>

              {submitStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  )}

                  <span>{submitStatus.message}</span>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Startup / Investment Experience *
                  </label>

                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tell us about your experience"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Range *
                    </label>

                    <select
                      name="investmentRange"
                      required
                      value={formData.investmentRange}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                    >
                      <option value="">
                        Select investment range
                      </option>

                      {investmentOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>

                    <select
                      name="preferredLocation"
                      required
                      value={formData.preferredLocation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                    >
                      <option value="">
                        Select your location
                      </option>

                      {locationOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Language *
                    </label>

                    <select
                      name="preferredLanguage"
                      required
                      value={formData.preferredLanguage}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                    >
                      <option value="">
                        Select language
                      </option>

                      {languageOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* CONSENT CHECKBOX */}
                <div className="flex items-start space-x-3 pt-2">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />

                  <label
                    htmlFor="consent"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    I agree to be contacted via WhatsApp,
                    phone call, or email regarding
                    investment opportunities and platform
                    updates.
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 
                          0 0 5.373 0 12h4zm2 
                          5.291A7.962 7.962 0 
                          014 12H0c0 3.042 1.135 
                          5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>

                      <span>Submitting...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <FaWhatsapp className="w-5 h-5" />
                      <span>
                        Submit & Chat on WhatsApp
                      </span>
                    </span>
                  )}
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