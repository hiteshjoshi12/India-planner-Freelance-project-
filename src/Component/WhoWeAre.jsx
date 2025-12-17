import React from 'react';
import { 
  Languages, 
  Car, 
  Users, 
  CheckCircle, 
  HeartHandshake, 
  MapPin 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* --- Page Header / Hero --- */}
      <div className="relative h-[77vh] w-full bg-slate-900 flex items-center justify-center pt-20">
        
        {/* Background Image - Animation REMOVED */}
        <div className="absolute inset-0 overflow-hidden">
            <img 
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop" 
            alt="Jaipur Architecture" 
            className="w-full h-full object-cover opacity-50" 
            />
        </div>
        
        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Increased duration to 1500ms (1.5 seconds) */}
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 ease-out fill-mode-both">
            Who We <span className='uppercase text-pink-500'>Are</span>
          </h1>
          
          <div className="w-24 h-1.5 bg-pink-600 mx-auto rounded-full mb-6 animate-in fade-in zoom-in duration-1000 delay-500 fill-mode-both"></div>
          
          <p className="text-xl md:text-2xl font-light text-slate-100 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-700 fill-mode-both">
            Jaipur Tour Guide & Car Rental Experts
          </p>
        </div>
      </div>

      {/* --- Main Introduction Section --- */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-100 fill-mode-both view-transition">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Welcome to <span className="text-pink-600">India Planners</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                India Planners is a Jaipur-based tour company specializing in private Jaipur sightseeing tours, professional tour guide services, and car with driver rental for every kind of traveler. The focus is on safe, comfortable, and well‑planned travel in Jaipur and Rajasthan.
                </p>
                <p>
                We are your local partner for Jaipur taxi service, city tours, and customized Rajasthan packages. With in-depth knowledge of heritage sites like <strong>Amer Fort, Hawa Mahal, and Jantar Mantar</strong>, we help guests explore offbeat places and local markets at a relaxed pace.
                </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4 text-pink-700 font-semibold">
              <div className="p-3 bg-pink-50 rounded-full">
                <MapPin size={24} />
              </div>
              <span className="text-lg">Based in Jaipur, Serving all of Rajasthan</span>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 relative group animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1661924326425-c14a6426d989?q=80&w=1170&auto=format&fit=crop" 
                alt="Jaipur City Palace" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative Pink Elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-100 z-0 rounded-br-[3rem] transition-all duration-500 group-hover:bg-pink-200"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-pink-100 z-0 rounded-tl-4xl"></div>
          </div>
        </div>
      </section>

      {/* --- Services Grid (3 Columns) --- */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in zoom-in duration-700 fill-mode-both">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We combine local knowledge with professional service to create unforgettable experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Guides */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-b-4 border-transparent hover:border-pink-600 group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors duration-300">
                <Languages className="text-pink-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Multilingual Guides</h3>
              <p className="text-slate-600 leading-relaxed">
                Specialized in Hindi, English, French, Spanish, German, and Italian. Our guides are experienced in heritage walks and cultural storytelling, ensuring you understand the traditions behind every monument.
              </p>
            </div>

            {/* Card 2: Cars */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all  hover:-translate-y-2 border-b-4 border-transparent hover:border-pink-600 group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors duration-300">
                <Car className="text-pink-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Premium Fleet</h3>
              <p className="text-slate-600 leading-relaxed">
                Clean, air-conditioned Sedans, SUVs, and large vehicles. Perfect for airport transfers, Jaipur Darshan, and multi-day Rajasthan trips with reliable, experienced private drivers.
              </p>
            </div>

            {/* Card 3: Events */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all  hover:-translate-y-2 border-b-4 border-transparent hover:border-pink-600 group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors duration-300">
                <Users className="text-pink-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Weddings & Corporate</h3>
              <p className="text-slate-600 leading-relaxed">
                Custom itineraries for corporate groups and wedding logistics. We manage hotel-to-venue transport and city tours, ensuring a smooth experience for every function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Vision & Why Choose Us --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Why Choose Us */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900">
                Why Choose <span className="text-pink-600 relative inline-block">
                    India Planners
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-pink-200 -z-10 opacity-60"></span>
                </span>
            </h2>
            <div className="space-y-6">
              {[
                "Professional, verified drivers with local expertise.",
                "Government approved multilingual tour guides.",
                "Transparent pricing with no hidden costs.",
                "Tailor-made itineraries for Jaipur & Rajasthan.",
                "On-time service and personalized care."
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <CheckCircle className="text-pink-600 mt-0.5 mr-4 shrink-0" size={22} />
                  <p className="text-slate-700 font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Box */}
          <div className="bg-linear-to-br from-pink-600 to-pink-700 text-white p-12 rounded-3xl relative overflow-hidden flex flex-col justify-center shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-200">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-pink-900 opacity-20 rounded-full blur-3xl"></div>
            
            <HeartHandshake size={80} className="text-white absolute top-8 right-8 opacity-20" />
            
            <h3 className="text-3xl font-bold mb-6 relative z-10 border-b border-pink-400/50 pb-4 inline-block w-max">Our Vision</h3>
            <p className="text-pink-50 leading-relaxed text-xl relative z-10 font-light italic">
              "To be the most trusted Jaipur tour guide and car with driver company, offering authentic, informative and comfortable travel experiences. We strive to help travelers explore Jaipur and Rajasthan with complete peace of mind."
            </p>
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 animate-in fade-in zoom-in duration-1000 fill-mode-both">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to explore the <span className='text-pink-500'>Pink City?</span></h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-xl">
            Book your private driver and tour guide today for a seamless Rajasthan experience.
          </p>
          <Link to="/Contact-us" className="inline-block">
          <button className="bg-pink-600 hover:bg-pink-700 cursor-pointer text-white font-bold py-4 px-12 rounded-full transition-all hover:scale-105 shadow-lg shadow-pink-600/40 text-lg uppercase tracking-wider">
            Contact Us Now
          </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default WhoWeAre;