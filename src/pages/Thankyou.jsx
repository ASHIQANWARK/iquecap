// ThankYou.js (Modern Professional Design - No False Promises)
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaArrowLeft, FaHome, FaDownload, FaShare } from 'react-icons/fa';

export default function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};
  const [countdown, setCountdown] = useState(300); // 5 minutes = 300 seconds
  const [showShare, setShowShare] = useState(false);

  // Format time to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Auto redirect to karnataka page after 5 minutes
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/karnataka');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleDownloadReceipt = () => {
    const receiptContent = `
      iQueCap Karnataka - Investment Enquiry Receipt
      ===========================================
      Name: ${formData.name || 'Not provided'}
      Email: ${formData.email || 'Not provided'}
      Phone: ${formData.phone || 'Not provided'}
      Location: ${formData.place || 'Not provided'}
      Submission Date: ${new Date().toLocaleString()}
      ===========================================
      Thank you for choosing iQueCap Karnataka!
      Our team will contact you shortly.
    `;
    
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `iQueCap_Receipt_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'iQueCap Karnataka',
        text: 'I just submitted my enquiry with iQueCap Karnataka!',
        url: window.location.origin + '/karnataka',
      }).catch(console.error);
    } else {
      setShowShare(true);
      setTimeout(() => setShowShare(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 flex items-center justify-center p-4 sm:p-6">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-emerald-500/20">
          {/* Success Header with Pattern */}
          <div className="relative bg-gradient-to-r from-emerald-700 to-emerald-800 p-8 md:p-10 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-lg transform transition-all duration-500 hover:scale-110">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                <FaCheckCircle className="w-12 h-12 text-emerald-600 relative z-10" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Thank You, <span className="text-emerald-200">{formData.name || 'Investor'}!</span>
              </h1>
              
              <p className="text-emerald-100 text-base sm:text-lg max-w-md mx-auto">
                Your enquiry has been received successfully
              </p>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Quick Navigation Bar */}
            <div className="flex flex-wrap gap-3 justify-end mb-8 pb-4 border-b border-gray-200">
              <button
                onClick={() => navigate('/karnataka')}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-lg hover:bg-emerald-50"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to iQueCap Karnataka</span>
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-lg hover:bg-emerald-50"
              >
                <FaHome className="w-4 h-4" />
                <span className="text-sm font-medium">Home</span>
              </button>
            </div>

            {/* Welcome Message */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                We'll Get Back to You Shortly! 📞
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Our team at iQueCap Karnataka has received your enquiry. We will review your details and contact you as soon as possible.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* What Happens Next - Updated without false promises */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
                  Next Steps
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Application Review</p>
                      <p className="text-sm text-gray-600">Our team will review your investment enquiry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Verification Process</p>
                      <p className="text-sm text-gray-600">We'll verify the information you've provided</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Team Contact</p>
                      <p className="text-sm text-gray-600">One of our representatives will reach out to you</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Details Summary */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
                  Your Submitted Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Full Name</span>
                    <span className="font-semibold text-gray-800">{formData.name || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Email Address</span>
                    <span className="font-semibold text-gray-800 break-all text-right">{formData.email || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Phone Number</span>
                    <span className="font-semibold text-gray-800">{formData.phone || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-gray-800">{formData.place || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Submission Time</span>
                    <span className="font-semibold text-gray-800 text-sm">{new Date().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note - No false promises */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-800">Important Information</p>
                  <p className="text-sm text-amber-700 mt-1">
                    Our team will review your enquiry and contact you on the provided phone number or email address. 
                    Please ensure your contact details are correct.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">24/7</p>
                <p className="text-xs text-gray-600">Customer Support</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">100%</p>
                <p className="text-xs text-gray-600">Secure Platform</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">Expert</p>
                <p className="text-xs text-gray-600">Guidance</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">Trusted</p>
                <p className="text-xs text-gray-600">By Thousands</p>
              </div>
            </div>

            {/* Contact & Support */}
            <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-6 mb-8 text-white">
              <h3 className="text-xl font-bold mb-4 text-center">Need Immediate Assistance?</h3>
              <p className="text-center text-emerald-100 text-sm mb-4">
                Feel free to reach out to our support team directly
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <a href="tel:+919035514801" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all rounded-lg px-4 py-2">
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>+91-9035514801</span>
                </a>
                <a href="tel:+919036913390" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all rounded-lg px-4 py-2">
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>+91-9036913390</span>
                </a>
                <a href="mailto:salma@iquecap.com" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all rounded-lg px-4 py-2">
                  <FaEnvelope className="w-4 h-4" />
                  <span>salma@iquecap.com</span>
                </a>
                <a href="https://wa.me/919035514801" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-all rounded-lg px-4 py-2">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <button
                onClick={() => navigate('/karnataka')}
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2"
              >
                <FaArrowLeft className="w-4 h-4" />
                Submit Another Enquiry
              </button>
              
              
            </div>

            

            {/* Auto Redirect Message */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-600">
                  Redirecting to iQueCap Karnataka page in <span className="font-bold text-emerald-600">{formatTime(countdown)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-white/60 text-xs mt-6">
          © 2026 iQueCap Karnataka - Empowering Karnataka Investors | All Rights Reserved
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}