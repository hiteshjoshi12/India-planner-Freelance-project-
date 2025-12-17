
import React from "react";
import { Link } from "react-router-dom";

const MemoriesCreated = () => {
  return (
    <div className=" relative min-h-screen font-sans">
      {/* --- Happy Travelers Section --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Memories We Created
            </h2>
            <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real moments from our guests exploring the beauty of Rajasthan and
              Delhi.
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
            {/* Large item on the left */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group shadow-lg">
              <img
                src="/img/img 2.jpg" // Elephant Ride Image
                alt="Elephant Ride at Amber Fort"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">
                  Fun at Amber Fort
                </span>
              </div>
            </div>

            {/* Top Middle */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
              <img
                src="/img/img 5.jpg"
                alt="Jantar Mantar Tour"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Top Right */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
              <img
                src="/img/img 1.jpg"
                alt="Happy Couple"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Bottom Middle - Tall */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
              <img
               src="/img/img 4.jpg"
                alt="Ancient Architecture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Bottom Right */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
              <img
                src="/img/img 3.jpg"
                alt="Group Tour Selfie"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery">
            <button className="text-pink-600 font-bold cursor-pointer hover:text-pink-700 flex items-center justify-center gap-2 mx-auto transition-all hover:gap-4">
              View Full Gallery <span>→</span>
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemoriesCreated;
