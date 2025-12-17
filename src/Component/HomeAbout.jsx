import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const HomeAbout = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- Left: Image Composition --- */}
          <div className="w-full md:w-1/2 relative animate-in fade-in slide-in-from-left-8 duration-1000 view-transition">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1649073868642-bcbbd06239d8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Jaipur Tour Guide" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Authentic Experiences</p>
                <p className="text-sm opacity-90">Since 2015</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-pink-100 rounded-2xl hidden md:block"></div>
          </div>

          {/* --- Right: Text Content --- */}
          <div className="w-full md:w-1/2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 view-transition">
            <h4 className="text-pink-600 font-bold uppercase tracking-wider mb-2 text-sm">
              Who We Are
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Your Trusted Local Partner in <span className="text-pink-600">Jaipur & Rajasthan</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              India Planners is a Jaipur-based tour company specializing in private sightseeing tours, car rentals with professional drivers, and multilingual tour guide services. We are dedicated to making your travel safe, comfortable, and culturally rich.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Multilingual Tour Guides",
                "Luxury Car Rentals",
                "Customized Rajasthan Tours",
                "Corporate & Wedding Transport"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-pink-600 w-5 h-5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="/who-we-are" 
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full transition-all hover:gap-4 hover:shadow-lg"
            >
              Read More About Us
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;