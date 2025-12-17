import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tourData } from "../data/tourData";
import {
  Clock,
  MapPin,
  IndianRupee,
  Check,
  ArrowRight,
  Filter,
  X,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

const TourPackages = () => {
  const [activeTab, setActiveTab] = useState("All");

  // --- 1. State for Modal & Form ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  const filteredPackages =
    activeTab === "All"
      ? tourData
      : tourData.filter((pkg) => pkg.category === activeTab);

  // --- 2. Handle Input Change ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- 3. Handle Form Submit -> Send to WhatsApp ---
  // --- 3. Handle Form Submit -> Send to WhatsApp ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Construct the message using standard new lines (\n)
    const rawMessage =
      `*New Custom Quote Request* 🛎️\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📅 *Travel Dates:* ${formData.dates}\n` +
      `👥 *Guests:* ${formData.guests}\n` +
      `📝 *Message:* ${formData.message}`;

    // 2. Encode the ENTIRE message to make it URL-safe
    const encodedMessage = encodeURIComponent(rawMessage);

    // 3. Open WhatsApp (Using api.whatsapp.com is often more reliable for web)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919119129523&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({ name: "", phone: "", dates: "", guests: "", message: "" });
  };
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans relative">
      {/* --- Page Header --- */}
      <div className="bg-slate-900 pt-32 pb-16 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-75 fill-mode-both">
          Explore Our <span className="uppercase text-pink-500">Packages</span>
        </h1>
        <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full mb-6 animate-in fade-in zoom-in duration-1000 delay-300 fill-mode-both"></div>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 fill-mode-both">
          From the Golden Triangle to the deserts of Rajasthan and the monuments
          of Delhi. Travel in private AC comfort with professional drivers and
          guides.
        </p>
      </div>

      {/* --- Filter Tabs --- */}
      <div className="container mx-auto px-6 -mt-8 relative z-20 animate-in fade-in zoom-in duration-700 delay-700 fill-mode-both">
        <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl mx-auto border border-slate-100">
          {["All", "Rajasthan", "Agra", "Delhi"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg cursor-pointer text-sm md:text-base font-bold uppercase tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? "bg-pink-600 text-white shadow-md transform scale-105"
                  : "bg-transparent text-slate-600 hover:bg-slate-100"
              }`}
            >
              {tab} Tours
            </button>
          ))}
        </div>
      </div>

      {/* --- Packages Grid --- */}
      <div className="container mx-auto px-6 mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-slate-100"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-pink-700 font-bold text-xs uppercase tracking-wider shadow-sm">
                  {pkg.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {pkg.title}
                </h3>

                {/* Meta Data */}
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-pink-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-pink-500" />
                    <span className="truncate max-w-[120px]">
                      {pkg.locations}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="bg-slate-50 p-4 rounded-lg mb-6 flex-grow">
                  <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-slate-700"
                      >
                        <Check
                          size={16}
                          className="text-green-500 mr-2 shrink-0 mt-0.5"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer / Price / Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-slate-400 block">
                      Starting from
                    </span>
                    <div className="flex items-center text-pink-600 font-bold text-xl">
                      <IndianRupee size={20} />
                      {pkg.price.sedan}
                      <span className="text-sm text-slate-400 font-normal ml-1">
                        +
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/package/${pkg.id}`}
                    className="bg-slate-900 hover:bg-pink-600 text-white p-3 rounded-full transition-colors shadow-lg"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Custom CTA Section --- */}
      <div className="container mx-auto px-6 mt-20 animate-in fade-in slide-in-from-left-8 duration-1000 delay-100 fill-mode-both view-transition">
        <div className="bg-pink-600 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
          <Filter
            size={200}
            className="absolute -right-10 -bottom-10 text-pink-500 opacity-20"
          />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Itinerary?
            </h2>
            <p className="text-pink-100 text-lg">
              Whether it's a corporate event, a wedding party, or a family
              vacation, we tailor trips to your needs. Multilingual guides
              available in French, Spanish, German, and Italian.
            </p>
          </div>
          <div className="relative z-10 mt-8 md:mt-0">
            {/* BUTTON UPDATED: triggers Modal instead of link */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-lg inline-block"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>

      {/* --- 4. The Custom Quote Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
            {/* Modal Header */}
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <h3 className="text-xl font-bold">Plan Your Custom Trip</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="hover:text-pink-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Form */}
            {/* Modal Form */}
            <div className="p-6 space-y-4">
              {" "}
              {/* Changed from <form> to <div> */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765..."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Group Size
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="e.g. 4"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Travel Dates
                </label>
                <input
                  type="text"
                  name="dates"
                  value={formData.dates}
                  onChange={handleInputChange}
                  placeholder="Travel dates"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Your Requirements
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your plans..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none resize-none"
                ></textarea>
              </div>
              {/* Changed type to "button" and added onClick handler directly */}
              <button 
  type="button" 
  onClick={(e) => {
    // 1. Validation
    if (!formData.name || !formData.phone) {
      toast.error("Please enter your Name and Phone Number.");
      return;
    }

    // 2. Build the message
    const rawMessage = `New Custom Quote Request\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Travel Dates: ${formData.dates}\n` +
      `Guests: ${formData.guests}\n` +
      `Message: ${formData.message}`;

    // 3. ENCODE the message
    const encodedMessage = encodeURIComponent(rawMessage);
    const targetNumber = "919119129523"; 

    // 5. Create the API URL (Works for unsaved numbers)
    const url = `https://wa.me/919119129523?text=${encodeURIComponent(rawMessage)}`

    // 6. Open the link
    window.open(url, '_blank');

    // 7. Close modal
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', dates: '', guests: '', message: '' });
  }}
  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md mt-2"
>
  <Send size={18} /> Send to WhatsApp
</button>
              <p className="text-xs text-center text-slate-500 mt-2">
                We typically reply within 30 minutes.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPackages;
