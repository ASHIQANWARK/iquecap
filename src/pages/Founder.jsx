import React from "react";


const Founder = () => {
  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden" id="founder">
     

      {/* 🔷 Main Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-4xl text-emerald-900 font-bold mb-6">Meet Our Founder</h2>
        <p className="text-lg text-emerald-900 max-w-2xl mx-auto mb-12 italic">
          “At iQue Cap , We are not just another Investment Firm, We are creating a safe space for the money to flow , Helping unlimited Individuals choosing the right Investment Options” – Shaaz Bin Maharoof
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-2 text-emerald-900">
            🎙️ Featured Podcast: <span className="italic">The Founder Lens</span>
          </h3>
          <p className="text-emerald-900">
            Insights, strategies, and behind-the-scenes from India’s most promising startup stories.
          </p>
        </div>

        {/* 🔷 Embedded Instagram Reels */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-4 hover:shadow-2xl transition duration-300">
            <div className="h-[500px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.instagram.com/reel/DJpIlgLyq0-/embed"
                className="w-full h-full border-none"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                title="Podcast Clip 1"
              ></iframe>
            </div>
            <h4 className="mt-4 text-lg font-semibold">Vision Behind iQue Cap</h4>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-4 hover:shadow-2xl transition duration-300">
            <div className="h-[500px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.instagram.com/reel/DIoAWoiSjeb/embed"
                className="w-full h-full border-none"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                title="Podcast Clip 2"
              ></iframe>
            </div>
            <h4 className="mt-4 text-lg font-semibold">Startup Investment Tips</h4>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-4 hover:shadow-2xl transition duration-300">
            <div className="h-[500px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.instagram.com/reel/DKJQcJvzip4/embed"
                className="w-full h-full border-none"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                title="Podcast Clip 3"
              ></iframe>
            </div>
            <h4 className="mt-4 text-lg font-semibold">Behind the Scenes: Founder Stories</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
