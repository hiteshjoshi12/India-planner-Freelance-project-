import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/galleryData'; // Import your data

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories automatically
  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];

  // Filter images based on active tab
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* --- Page Header --- */}
      <div className="bg-slate-900 pt-32 pb-16 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
          Our <span className='uppercase text-pink-500'>Gallery</span>
        </h1>
        <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          A collection of 40+ unforgettable moments from our tours across Rajasthan, Agra, and Delhi.
        </p>
      </div>

      {/* --- Category Filter Tabs --- */}
      <div className="container mx-auto px-4 mt-12 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all border-2 ${
                activeCategory === cat
                  ? "bg-pink-600 border-pink-600 text-white shadow-lg scale-105"
                  : "bg-transparent border-slate-300 text-slate-500 hover:border-pink-600 hover:text-pink-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- Image Grid (Masonry-like) --- */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative h-64 overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy" // Important for performance with 40+ images
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <ZoomIn size={24} />
                </div>
              </div>
              
              {/* Tag Label */}
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {img.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Lightbox Modal (Full Screen View) --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-pink-500 transition-colors bg-white/10 p-2 rounded-full"
          >
            <X size={32} />
          </button>
          
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-2xl"
          />
          
          <div className="absolute bottom-6 text-center">
            <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;