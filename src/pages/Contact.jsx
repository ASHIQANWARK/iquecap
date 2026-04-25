import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Building, CheckCircle, AlertCircle } from "lucide-react";
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const investmentOptions = [
    "₹1 Lakh - ₹5 Lakhs",
    "₹5 Lakhs - ₹10 Lakhs",
    "₹10 Lakhs - ₹25 Lakhs",
    "₹25 Lakhs - ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "₹1 Crore - ₹5 Crores",
    "₹5 Crores+"
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
    "International"
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
    "Bengali"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const data = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        investmentRange: formData.investmentRange,
        preferredLocation: formData.preferredLocation,
        preferredLanguage: formData.preferredLanguage,
      };

      // WhatsApp message format
      const whatsappMessage = `🆕 *NEW INVESTMENT LEAD*
━━━━━━━━━━━━━━━━━━
👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
💰 Investment: ${data.investmentRange}
📍 Location: ${data.preferredLocation}
🗣️ Language: ${data.preferredLanguage}
📝 Experience: ${data.subject}
💬 Message: ${data.message}
━━━━━━━━━━━━━━━━━━`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919036913399?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      setSubmitStatus({
        type: "success",
        message: "Opening WhatsApp... Send the message to complete.",
      });

      // Reset form
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
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-[#0d9866] to-[#01454b]">
      <div className="container mx-auto px-4 max-w-3xl">

        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Contact Us
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8">

          {submitStatus.message && (
            <div className={`mb-4 p-3 rounded ${
              submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              name="subject"
              placeholder="Startup / Investment Experience"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <select
              name="investmentRange"
              required
              value={formData.investmentRange}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Investment Range</option>
              {investmentOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>

            <select
              name="preferredLocation"
              required
              value={formData.preferredLocation}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Location</option>
              {locationOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>

            <select
              name="preferredLanguage"
              required
              value={formData.preferredLanguage}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Language</option>
              {languageOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              {isSubmitting ? "Sending..." : "Submit & Chat on WhatsApp"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;