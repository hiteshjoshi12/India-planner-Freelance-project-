import React, { useState } from 'react';
import { Search, MessageCircle, Phone, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// 1. Data Structure - Categorized for better UX
const faqData = [
  // --- Services & Overview ---
  {
    id: "item-1",
    question: "What services does India Planners offer in Jaipur?",
    answer: "India Planners offers private Jaipur sightseeing tours, car with driver services, professional tour guides, airport transfers, and customized Rajasthan tour packages starting from Jaipur. Cars are available for corporate tours, leisure tours, family tours, wedding functions and events, with flexible itineraries designed as per guest requirements.",
    category: "Services"
  },
  {
    id: "item-2",
    question: "Do you provide professional tour guides in multiple languages?",
    answer: "Yes, India Planners provides professional tour guides in Jaipur who specialize in Hindi, English, French, Spanish, German and Italian language for city tours and monument visits. Guests can request a multilingual Jaipur tour guide at the time of booking.",
    category: "Services"
  },
  {
    id: "item-4",
    question: "Is the Jaipur sightseeing tour with car and driver private?",
    answer: "Yes, all Jaipur city tours by car with driver are operated as private services for your group only, not shared with strangers. This allows India Planners to adjust the pace, photo stops and itinerary according to your interests and comfort.",
    category: "Services"
  },
  {
    id: "item-17",
    question: "Do you organize multi‑day Rajasthan tours by car with driver?",
    answer: "India Planners arranges multi‑day tours by car with driver from Jaipur to destinations like Agra, Jodhpur, Udaipur, Pushkar, Jaisalmer and more. Itineraries can be customized to include heritage stays, desert experiences and local sightseeing.",
    category: "Services"
  },

  // --- Car Rental & Fleet ---
  {
    id: "item-3",
    question: "What types of cars can I book with driver?",
    answer: "Guests can book air‑conditioned sedans, SUVs and larger vehicles with experienced drivers for local Jaipur sightseeing and outstation trips. Depending on the group size and budget, we suggest suitable vehicles for corporate travel, family tours, wedding guest movements and long‑distance Rajasthan tours.",
    category: "Car Rental"
  },
  {
    id: "item-7",
    question: "Do you arrange cars with driver for wedding functions and events?",
    answer: "Yes, we provide cars with drivers for wedding guests, airport and railway station transfers, hotel‑to‑venue movement and city tours around wedding functions. Dedicated coordinators can help plan vehicle counts, routes and timing.",
    category: "Car Rental"
  },
  {
    id: "item-8",
    question: "Do you offer car with driver for corporate tours and business travel?",
    answer: "Yes, we offer reliable chauffeur‑driven cars for corporate meetings, conferences, factory visits and client entertainment in Jaipur. Professional drivers, punctual reporting and clean vehicles make it convenient for business travelers.",
    category: "Car Rental"
  },
  {
    id: "item-16",
    question: "Do you provide airport and railway station transfers in Jaipur?",
    answer: "Yes, India Planners offers 24×7 Jaipur airport and railway station pick‑up and drop services with car and driver. Guests can combine arrival or departure transfers with a short city tour if time permits.",
    category: "Car Rental"
  },

  // --- Sightseeing & Itineraries ---
  {
    id: "item-5",
    question: "What are the popular places covered in a Jaipur sightseeing tour?",
    answer: "Typical Jaipur sightseeing tours cover Amer Fort, City Palace, Hawa Mahal, Jantar Mantar, Jal Mahal, Albert Hall and key local markets. We can also include less‑crowded temples, stepwells, viewpoints and handicraft areas depending on your time.",
    category: "Sightseeing"
  },
  {
    id: "item-6",
    question: "Can I customize my Jaipur tour itinerary?",
    answer: "Yes, India Planners specializes in tailor‑made Jaipur tours. Guests can share preferred sights, timing, special interests and language needs so that a customized Jaipur and Rajasthan travel plan is created.",
    category: "Sightseeing"
  },
  {
    id: "item-11",
    question: "What is included in a typical full‑day Jaipur sightseeing tour?",
    answer: "A full‑day tour generally includes 8–9 hours of vehicle and driver use, hotel pickup and drop, and parking at main attractions. Entrance tickets, meals and personal expenses are excluded, while a tour guide can be added on request.",
    category: "Sightseeing"
  },
  {
    id: "item-12",
    question: "Can I book only a tour guide in Jaipur without a car?",
    answer: "Yes, guests who already have a car or are staying centrally can request only a Jaipur tour guide service. The guide can join you at your hotel or directly at monuments.",
    category: "Sightseeing"
  },

  // --- Booking & Policy ---
  {
    id: "item-9",
    question: "How do I book a Jaipur car with driver or tour guide?",
    answer: "You can book by sharing your travel dates, hotel details, number of guests and required services via phone, WhatsApp or website enquiry form. We will then confirm the itinerary and price.",
    category: "Booking"
  },
  {
    id: "item-10",
    question: "How are prices for car with driver calculated?",
    answer: "Pricing depends on vehicle type, number of days, local or outstation travel, and whether the trip is per‑day or per‑kilometre. Our quotes clearly mention inclusions like tolls, parking, and driver allowance so there are no hidden charges.",
    category: "Booking"
  },
  {
    id: "item-18",
    question: "What is your cancellation and refund policy?",
    answer: "Most bookings allow free cancellation up to a specific time before the travel date, with partial charges closer to departure. We provide clear written terms for cancellation and refunds at the time of confirmation.",
    category: "Booking"
  },
  {
    id: "item-20",
    question: "How far in advance should I book my Jaipur tour?",
    answer: "During peak season and festival periods, it is wise to book several days to a couple of weeks in advance. Early booking helps us confirm the right vehicle type and preferred multilingual guide.",
    category: "Booking"
  },

  // --- Safety & Travel Tips ---
  {
    id: "item-13",
    question: "Are your drivers and tour guides licensed and experienced?",
    answer: "Yes, we work with experienced, verified drivers and professional tour guides familiar with tourism norms. Guides are trained to handle international guests and speak multiple languages.",
    category: "Travel Tips"
  },
  {
    id: "item-14",
    question: "Is your service suitable for families and senior citizens?",
    answer: "Yes, private services allow flexible timing and minimal walking. We can plan shorter walking routes, rest breaks and vehicle access points to ensure comfort for all ages.",
    category: "Travel Tips"
  },
  {
    id: "item-15",
    question: "Can solo travelers safely book India Planners?",
    answer: "Absolutely. Our private tours are safe for solo travelers, including women and first‑time visitors. We share driver and vehicle details in advance and keep communication open.",
    category: "Travel Tips"
  },
  {
    id: "item-19",
    question: "What should I keep in mind before starting a tour?",
    answer: "Carry a valid ID, wear comfortable clothing/footwear, keep some cash for tickets, and stay hydrated. We share recommended timings, dress codes for temples and seasonal updates before the tour.",
    category: "Travel Tips"
  }
];

const categories = ["All", "Services", "Car Rental", "Sightseeing", "Booking", "Travel Tips"];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredFAQ = faqData.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- Header Section --- */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 top-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute left-0 bottom-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto mt-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4  uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
            Frequently Asked <span className='text-pink-500 uppercase'>Questions</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Everything you need to know about our Jaipur tours, car rentals, and booking policies.
          </p>
          
          {/* Search Bar - FIXED: Added bg-white and placeholder styling */}
          <div className="relative max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 ">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for cars, guides, payments..." 
              className="w-full py-4 pl-12 pr-4 rounded-full bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* --- FAQ Content --- */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-pink-600 text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:bg-pink-50 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            {filteredFAQ.length > 0 ? (
                <Accordion type="single" collapsible className="w-full space-y-4">
                {filteredFAQ.map((faq) => (
                    <AccordionItem 
                        key={faq.id} 
                        value={faq.id} 
                        className="border border-slate-100 rounded-lg px-4 data-[state=open]:border-pink-200 data-[state=open]:bg-pink-50/30 transition-colors"
                    >
                    <AccordionTrigger className="text-left text-slate-800 font-semibold text-base md:text-lg hover:text-pink-700 hover:no-underline py-4">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-4 text-base">
                        {faq.answer}
                    </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            ) : (
                <div className="text-center py-12 text-slate-500">
                    <HelpCircle size={48} className="mx-auto mb-4 opacity-20" />
                    <p className="text-lg">No questions found matching your search.</p>
                    <button 
                        onClick={() => {setSearchTerm(""); setActiveCategory("All")}}
                        className="mt-4 text-pink-600 font-medium hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* --- Still Have Questions? CTA --- */}
      <div className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="https://wa.me/919829833465"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg"
                >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                </a>
                <a 
                    href="tel:+919829833465" 
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-pink-600 hover:text-pink-600 text-slate-700 font-bold py-3 px-8 rounded-full transition-colors"
                >
                    <Phone size={20} />
                    Call Us
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;