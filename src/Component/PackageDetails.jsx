import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tourData } from '../data/tourData'; // Import your data
import { Clock, MapPin, CheckCircle, XCircle, ArrowLeft, Phone } from 'lucide-react';

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = tourData.find((p) => p.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pkg) {
    return <div className="text-center py-20">Package not found</div>;
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* --- Hero Section --- */}
      <div className="relative h-[60vh]">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <span className="bg-pink-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            {pkg.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{pkg.title}</h1>
          <p className="text-xl md:text-2xl font-light text-slate-200">{pkg.subtitle}</p>
        </div>
        <Link to="/packages" className="absolute top-24 left-6 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all">
          <ArrowLeft size={24} />
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* --- Left Column: Itinerary & Info --- */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{pkg.overview}</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle size={18} className="text-pink-600" />
                  {h}
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary Timeline */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Detailed Itinerary</h2>
            <div className="border-l-2 border-pink-200 ml-3 space-y-8">
              {pkg.itinerary.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-600 border-2 border-white shadow-sm"></div>
                  <span className="text-sm font-bold text-pink-600 uppercase tracking-wider block mb-1">
                    {item.day}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions / Exclusions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div>
              <h3 className="font-bold text-lg mb-4 text-green-700">What's Included</h3>
              <ul className="space-y-2">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> {inc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-red-700">What's Excluded</h3>
              <ul className="space-y-2">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" /> {exc}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* --- Right Column: Pricing & Booking Sticky Card --- */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-pink-600 sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Pricing (Per Vehicle)</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="text-slate-600 font-medium">Sedan (1-4 Pax)</span>
                <span className="text-xl font-bold text-slate-900">₹{pkg.price.sedan}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="text-slate-600 font-medium">SUV (1-6 Pax)</span>
                <span className="text-xl font-bold text-slate-900">₹{pkg.price.suv}</span>
              </div>
              {pkg.price.tempo && (
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-600 font-medium">Tempo Traveller</span>
                  <span className="text-xl font-bold text-slate-900">₹{pkg.price.tempo}</span>
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mb-6 text-sm text-slate-500 text-center">
              *Guide charges extra (approx ₹3000-5000) if required.
            </div>

            <a 
            href={`https://wa.me/919119129523?text=${encodeURIComponent(pkg.title)}`}
              target="_blank" 
              rel="noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold text-center py-4 rounded-lg mb-3 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Book via WhatsApp
            </a>
           
          </div>
        </div>

      </div>
    </div>
  );
};

export default PackageDetails;