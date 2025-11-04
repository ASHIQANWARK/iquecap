import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Navigation, Building } from "lucide-react";

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
    window.open(`https://wa.me/9036354890?text=${encodedMessage}`, "_blank");
  };

  // Company address
  const companyAddress = {
    doorNo: "Door no : 84, 3rd cross",
    landmark: "near Jyoti Nivas College Road",
    area: "Koramangala Industrial Layout, 5th Block, Koramangala",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560095"
  };

  const fullAddress = `${companyAddress.doorNo}, ${companyAddress.landmark}, ${companyAddress.area}, ${companyAddress.city}, ${companyAddress.state} ${companyAddress.pincode}`;
  
  // Google Maps embed URL for iQue Cap office
  // Updated Google Maps embed URL for iQue Cap office
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.881678306033!2d77.6129163!3d12.9325834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15902e8891a7%3A0x96a43ede2ca92611!2siQue%20cap!5e0!3m2!1sen!2sin!4v1700000000000";

  // Updated openInGoogleMaps function with the correct link
  const openInGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/iQue+cap/@12.9325834,77.6129163,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15902e8891a7:0x96a43ede2ca92611!8m2!3d12.9325834!4d77.6154912!16s%2Fg%2F11ltl9yhl1?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-[#0d9866]  to-[#01454b] overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact Us
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Have questions or need assistance? We are just a message away.
          </p>
        </div>

        {/* Main Content Grid - Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info & Map Side */}
          <div className="space-y-6">
            {/* Address Card with Small Map */}
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
                  <button
                    onClick={openInGoogleMaps}
                    className="mt-3 flex items-center text-emerald-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </button>
                </div>
              </div>
              
              {/* Small Map */}
              <div className="mt-4 bg-white rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ique Cap Office Location"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Phone */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-emerald-400 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Call Us</h4>
                    <p className="text-emerald-100 text-xs">+91 90363 54890</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-emerald-400 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Email Us</h4>
                    <p className="text-emerald-100 text-xs">info@iquecap.com</p>
                  </div>
                </div>
              </div>

              {/* Website */}
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

              {/* Location */}
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
              
              <form onSubmit={sendWhatsAppMessage} className="space-y-4">
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
                    Subject *
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
                      <option value="">Select Range</option>
                      <option value="₹10K - ₹50K">₹10K - ₹50K</option>
                      <option value="₹50K - ₹1L">₹50K - ₹1L</option>
                      <option value="₹1L - ₹5L">₹1L - ₹5L</option>
                      <option value="₹5L - ₹10L">₹5L - ₹10L</option>
                      <option value="₹10L - ₹50L">₹10L - ₹50L</option>
                      <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                      <option value="₹1Cr - ₹5Cr">₹1Cr - ₹5Cr</option>
                      <option value="₹5Cr+">₹5Cr+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Industries *
                    </label>
                    <select
                      name="preferredIndustries"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                      required
                      value={formData.preferredIndustries}
                      onChange={handleChange}
                    >
                      <option value="">Select Industry</option>
                      <option value="Technology">Technology</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Consumer Goods">Consumer Goods</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Preference 
                    </label>
                    <select
                      name="investmentPreference"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm"
                      required
                      value={formData.investmentPreference}
                      onChange={handleChange}
                    >
                      <option value="">Select Preference</option>
                      <option value="Short-Term">Short-Term</option>
                      <option value="Long-Term">Long-Term</option>
                      <option value="Equity">Equity</option>
                      <option value="Franchise">Franchise</option>
                      <option value="CIP">CIP</option>
                      <option value="OTHERS">OTHERS</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm mt-4"
                >
                  Send Message via WhatsApp
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