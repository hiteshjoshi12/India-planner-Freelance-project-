import React from 'react';
import { languages, services } from '../data/guideData'; // Import data
import { Users, Clock, Map, Star, ShieldCheck, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuideServices = () => {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen pb-20">
      
      {/* --- Hero Section --- */}
      <div className="relative h-[50vh] bg-slate-900 flex flex-col items-center justify-center text-center px-4 pt-20">
        <img 
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop" 
          alt="Jaipur Guide" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 fill-mode-both">
            Expert Tour <span className='uppercase text-pink-500'>Guides</span>
          </h1>
          <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full mb-6 animate-in fade-in zoom-in duration-1000 delay-300 fill-mode-both"></div>
          <p className="text-lg md:text-xl text-slate-200 font-light animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 fill-mode-both">
            Certified professionals fluent in Hindi, English, French, Spanish, German & Italian.
          </p>
        </div>
      </div>

      {/* --- Why Choose Us Grid --- */}
      <div className="container mx-auto px-6 -mt-16 relative z-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-pink-600 text-center hover:-translate-y-2 transition-transform duration-300">
            <ShieldCheck size={40} className="mx-auto text-pink-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Certified Professionals</h3>
            <p className="text-sm text-slate-600">Licensed by Rajasthan Tourism with 5+ years of experience.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-pink-600 text-center hover:-translate-y-2 transition-transform duration-300">
            <Languages size={40} className="mx-auto text-pink-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">6 Languages</h3>
            <p className="text-sm text-slate-600">Native-level fluency in European & Indian languages with deep cultural knowledge.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-pink-600 text-center hover:-translate-y-2 transition-transform duration-300">
            <Star size={40} className="mx-auto text-pink-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Skip-the-Line</h3>
            <p className="text-sm text-slate-600">We handle tickets, queues, and best photography spots at crowded sites.</p>
          </div>
        </div>
      </div>

      {/* --- Language Expertise Section --- */}
      <section className="container mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both view-transition">
        <h2 className="text-3xl font-bold text-center mb-12">Multilingual Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-start gap-4">
              <div className="text-4xl bg-pink-50 w-16 h-16 flex items-center justify-center rounded-full shrink-0">
                {lang.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{lang.lang}</h3>
                <p className="text-sm font-semibold text-pink-600 mt-1">Best For: {lang.bestFor}</p>
                <p className="text-sm text-slate-500 mt-2">{lang.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Pricing Table --- */}
      <section className="bg-slate-900 text-white py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Guide Service Pricing</h2>
            <p className="text-slate-400"> Transparent rates for Half Day (4 Hours) and Full Day (8 Hours) services.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-pink-500 uppercase text-sm tracking-wider">
                  <th className="p-4">Duration / Language</th>
                  <th className="p-4">Without Car (Guide Only)</th>
                  <th className="p-4">With Car & Driver</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-4 font-medium text-white">Half Day (Hindi/English)</td>
                  <td className="p-4">₹1800</td>
                  <td className="p-4">₹2500 + Vehicle</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Half Day (European Langs)</td>
                  <td className="p-4">₹2200</td>
                  <td className="p-4">₹3000 + Vehicle</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Full Day (Hindi/English)</td>
                  <td className="p-4">₹3000</td>
                  <td className="p-4">₹4000 + Vehicle</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Full Day (European Langs)</td>
                  <td className="p-4">₹3800</td>
                  <td className="p-4">₹5000 + Vehicle</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">*Prices exclude monument entry fees.</p>
        </div>
      </section>

      {/* --- Services List --- */}
      <section className="container mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Types of Guide Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <div key={i} className="flex gap-4 p-6 border border-slate-200 rounded-xl hover:border-pink-500 transition-colors bg-white">
              <div className="mt-1 text-pink-600"><Map size={24} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
                <div className="flex items-center text-xs font-bold uppercase tracking-wide text-slate-400 mb-3">
                  <Clock size={12} className="mr-1" /> {svc.duration}
                </div>
                <p className="text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <div className="container mx-auto px-6 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="bg-pink-600 rounded-2xl py-16 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Need a Professional Guide?</h2>
            <p className="mb-8 max-w-2xl mx-auto px-4">
            Contact us with your dates and language preference. We will share a guide profile and itinerary within hours.
            </p>
            <Link to="/Contact-us">
            <button className="bg-white cursor-pointer text-pink-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-100 transition-colors">
            Book Now
            </button>
            </Link>
        </div>
      </div>

    </div>
  );
};

export default GuideServices;