import React from "react";
import { motion } from "framer-motion";


const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-emerald-950 flex items-center justify-center p-6 md:p-12">
      <motion.div
        className="max-w-4xl bg-white p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-emerald-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to IqueCap’s Privacy Policy
        </motion.h1>
        <p className="mt-4 text-gray-600 text-center">
          We at IqueCap ("IqueCap", "we", "us", "our") value your privacy and are committed to
          protecting your personal data.
        </p>

        {/* Sections */}
        <div className="mt-6 space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-emerald-600">{section.title}</h2>
              {section.content}
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700">For further details or inquiries, feel free to contact us.</p>
          <p className="mt-2 font-semibold text-emerald-700">Thank you for trusting IqueCap.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Sections Data
const sections = [
  {
    title: "Compliance",
    content: (
      <p className="text-gray-600">
        Our Policy complies with the Information Technology Act, 2000, the Digital Personal Data Protection Act,
        2023, and related regulations. We may update this Policy periodically to reflect legal and operational changes.
      </p>
    ),
  },
  {
    title: "What This Policy Covers",
    content: (
      <p className="text-gray-600">
        This Policy applies to Personal Data that identifies you directly or indirectly. Anonymized or publicly
        available data is excluded.
      </p>
    ),
  },
  {
    title: "What Personal Data We Collect",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>
          <strong>Identity Data:</strong> Name, email, contact, date of birth
        </li>
        <li>
          <strong>Financial Data:</strong> Bank details, payment records, income
        </li>
        <li>
          <strong>KYC Details:</strong> Aadhaar (with consent), PAN, and other identifiers
        </li>
      </ul>
    ),
  },
  {
    title: "Where We Collect Your Data From",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
        <li>Information you provide directly</li>
        <li>Third parties such as business partners and social media platforms</li>
      </ul>
    ),
  },
  {
    title: "How We Use Your Personal Data",
    content: (
      <ol className="list-decimal list-inside text-gray-600 space-y-2 mt-2">
        <li>Verify identity and process KYC</li>
        <li>Share data with service providers (e.g., banks, insurers) to deliver services</li>
        <li>Notify you of updates and alerts</li>
        <li>Improve products and services through analysis</li>
        <li>Conduct market research</li>
        <li>Send promotional content with your consent</li>
        <li>Address inquiries and complaints</li>
        <li>Meet regulatory requirements</li>
        <li>Investigate fraud or legal violations</li>
        <li>Manage employment-related processes</li>
      </ol>
    ),
  },
  {
    title: "Our Role",
    content: (
      <p className="text-gray-600">
        Depending on the context, IqueCap acts as a Data Fiduciary. In the latter case, the data controller’s
        policies apply.
      </p>
    ),
  },
  {
    title: "Stay Updated",
    content: (
      <p className="text-gray-600">
        We recommend revisiting this page periodically for updates to this Policy. Your continued use of our
        services implies acceptance of any changes.
      </p>
    ),
  },
];

export default PrivacyPolicy;
