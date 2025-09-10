// src/pages/Career.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import BgImage from "../assets/images/CAP1.jpg"; // <-- add your background image in assets

const Career = () => {
  const jobs = [
    {
      title: "Regional Manager - Kerala",
      description:
        "Lead our regional operations in Kerala, drive business growth, and manage client relationships with strategic leadership.",
    },
    {
      title: "HR Manager / HRBP",
      description:
        "Shape our people strategy, oversee recruitment, and support employee engagement while acting as a trusted business partner.",
    },
    {
      title: "Digital Transformation Lead",
      description:
        "Drive innovation by leading digital initiatives, optimizing business processes, and ensuring seamless technology adoption.",
    },
  ];

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSetzGv8lnuDvLRSEBWyUEpb3jT-XRFFfTbIqzvd_F8IX3n10g/viewform?usp=dialog";

  return (
    <section
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-teal-950/70"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative py-20 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center text-gray-300 text-sm mb-6">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <ChevronRight className="mx-2 w-4 h-4" />
              <span className="text-white font-medium">Careers</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
              Join Our Team at Ique Cap
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              We’re in an exciting phase of growth and looking for ambitious,
              innovative professionals who want to make an impact. Check out our
              urgent openings below and apply today.
            </p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-emerald-900/90 backdrop-blur-md border border-emerald-700 rounded-xl p-6 flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-extrabold mb-3 text-center text-white">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-200 mb-6 text-center leading-relaxed">
                  {job.description}
                </p>
                <a
                  href={formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-5 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          {/* Extra CTA */}
          <div className="mt-20 text-center">
            <p className="text-gray-200 mb-4 text-base">
              Didn’t find a role that fits? We’re always excited to meet
              talented people.
            </p>
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-teal-500 text-gray-900 text-sm font-semibold rounded-lg shadow hover:bg-teal-600 transition"
            >
              Submit Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
