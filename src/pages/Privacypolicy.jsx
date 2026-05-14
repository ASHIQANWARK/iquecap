import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-emerald-950 flex items-center justify-center px-6 pb-12 pt-28 md:px-12 md:pt-28">
      <motion.div
        className="max-w-5xl bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center text-emerald-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>

        <p className="mt-5 text-gray-600 text-center leading-relaxed">
          At Ique Cap, we respect your privacy and are committed to protecting
          the personal information you share with us through our website,
          forms, communications, and other digital channels.
        </p>

        <p className="mt-3 text-gray-600 text-center leading-relaxed">
          This Privacy Policy explains how we collect, use, store, and protect
          your information when you visit our website or submit your details to us.
        </p>

        {/* Sections */}
        <div className="mt-10 space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
                {section.title}
              </h2>

              <div className="text-gray-600 leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consent Section */}
        <motion.div
          className="mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">
            Consent Notice for Enquiry Forms
          </h3>

          <p className="text-gray-700 leading-relaxed">
            “I agree to be contacted by Ique Cap regarding my enquiry and
            consent to the collection and use of my information as per the
            Privacy Policy.”
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700">
            For any questions, concerns, requests, or complaints regarding this
            Privacy Policy or the handling of your personal information, you may
            contact us through the details provided on our website.
          </p>

          <p className="mt-4 font-semibold text-emerald-700">
            Thank you for trusting Ique Cap.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Sections Data
const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you visit our website or submit an enquiry, we may collect the
          following information:
        </p>

        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Mobile number</li>
          <li>City / location</li>
          <li>Investment interest or enquiry details</li>
          <li>Startup/business-related information, where applicable</li>
          <li>
            Any other information voluntarily submitted through our website
            forms or communication channels
          </li>
        </ul>

        <p className="mt-4">
          We may also collect basic technical information such as browser type,
          device details, IP address, pages visited, and cookies to improve
          website performance and user experience.
        </p>
      </>
    ),
  },

  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>
          The information collected may be used for the following purposes:
        </p>

        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>To respond to your enquiry</li>
          <li>To contact you regarding your interest in Ique Cap</li>
          <li>
            To share relevant information about our platform, services, events,
            or updates
          </li>
          <li>To understand user requirements and improve our services</li>
          <li>To maintain internal records</li>
          <li>
            To improve website functionality, communication, and user
            experience
          </li>
          <li>
            To comply with applicable legal or regulatory requirements
          </li>
        </ul>

        <p className="mt-4">
          We use your information only for legitimate business purposes
          connected to your enquiry, communication, or interaction with
          Ique Cap.
        </p>
      </>
    ),
  },

  {
    title: "3. Data Sharing and Consent",
    content: (
      <>
        <p>Ique Cap values your trust.</p>

        <p className="mt-3">
          We do not sell, rent, trade, or disclose your personal information
          to any third party for marketing or commercial purposes without your
          consent.
        </p>

        <p className="mt-4">
          Your personal information may be shared only in the following limited
          cases:
        </p>

        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>When you have given clear consent</li>
          <li>
            When sharing is required to respond to your enquiry or provide
            requested services
          </li>
          <li>
            With trusted service providers who support website hosting,
            communication, CRM, analytics, or operational functions, under
            confidentiality obligations
          </li>
          <li>
            When required by law, regulation, legal process, or government
            authority
          </li>
        </ul>

        <p className="mt-4">
          Any data shared for operational purposes is handled with appropriate
          confidentiality and security measures.
        </p>
      </>
    ),
  },

  {
    title: "4. Data Protection and Security",
    content: (
      <p>
        We take reasonable technical, administrative, and operational measures
        to protect your personal information from unauthorized access, misuse,
        loss, alteration, or disclosure. While no digital system can be
        guaranteed to be completely secure, we continuously work to maintain
        responsible data protection practices.
      </p>
    ),
  },

  {
    title: "5. Cookies and Website Tracking",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies to improve
          browsing experience, analyze website traffic, and understand visitor
          engagement.
        </p>

        <p className="mt-4">
          You may choose to disable cookies through your browser settings.
          However, some website features may not function properly if cookies
          are disabled.
        </p>
      </>
    ),
  },

  {
    title: "6. Communication Consent",
    content: (
      <>
        <p>
          By submitting your details on our website, you consent to being
          contacted by Ique Cap through phone, email, SMS, WhatsApp, or other
          communication channels regarding your enquiry, platform information,
          service updates, or related communication.
        </p>

        <p className="mt-4">
          You may request to stop receiving communication from us at any time
          by contacting us through the details provided on our website.
        </p>
      </>
    ),
  },

  {
    title: "7. Data Retention",
    content: (
      <p>
        We retain your personal information only for as long as necessary to
        fulfill the purpose for which it was collected, support business
        communication, maintain records, resolve disputes, or comply with
        applicable legal requirements.
      </p>
    ),
  },

  {
    title: "8. User Rights",
    content: (
      <>
        <p>You may contact us to:</p>

        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            Access the personal information we hold about you
          </li>
          <li>
            Request correction or updating of your information
          </li>
          <li>
            Request deletion of your information, subject to applicable legal
            and business requirements
          </li>
          <li>
            Withdraw consent for future communication
          </li>
          <li>
            Raise any privacy-related concerns
          </li>
        </ul>

        <p className="mt-4">
          We will review and respond to such requests in accordance with
          applicable laws.
        </p>
      </>
    ),
  },

  {
    title: "9. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites or platforms.
        Ique Cap is not responsible for the privacy practices, content, or
        security of such external websites. Users are encouraged to review the
        privacy policies of third-party websites before submitting any
        information.
      </p>
    ),
  },

  {
    title: "10. Policy Updates",
    content: (
      <>
        <p>
          Ique Cap may update this Privacy Policy from time to time to reflect
          changes in our practices, services, legal requirements, or website
          functionality.
        </p>

        <p className="mt-4">
          The updated version will be posted on this page with the revised
          effective date.
        </p>
      </>
    ),
  },

  {
    title: "11. Contact Us",
    content: (
      <p>
        For any questions, concerns, requests, or complaints regarding this
        Privacy Policy or the handling of your personal information, you may
        contact us through the details provided on our website.
      </p>
    ),
  },
];

export default PrivacyPolicy;