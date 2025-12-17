import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react'; // Import loader icon
import toast from 'react-hot-toast';

const HomeContact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS ---
    const SERVICE_ID = 'service_mzli35f';
    const TEMPLATE_ID = 'template_c8fwdru';
    const PUBLIC_KEY = 'Jj-9g_0omc9IFE64l';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Quote request sent! We will WhatsApp you shortly.");
          setIsSending(false);
          e.target.reset(); // Clear form
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Something went wrong. Please try again.");
          setIsSending(false);
        },
      );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Jaipur Trip Today</h2>
            <p className="text-slate-300 text-lg mb-8">
              Get a custom itinerary and quote within 24 hours. No hidden charges, just pure Rajasthani hospitality.
            </p>
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-center gap-3">✓ Instant WhatsApp Quotes</li>
              <li className="flex items-center gap-3">✓ Customized Itineraries</li>
              <li className="flex items-center gap-3">✓ Verified Drivers & Guides</li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 bg-white p-10 md:p-16">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input 
                  type="text" 
                  name="user_name" // Required for EmailJS
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Your Name" 
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  name="user_phone" // Required for EmailJS
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all" 
                  placeholder="+91 91191 29523" 
                />
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">What are you looking for?</label>
                <select 
                  name="service_type" // Required for EmailJS
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-slate-600"
                >
                  <option value="Car Rental">Car Rental with Driver</option>
                  <option value="Sightseeing">Sightseeing Tour</option>
                  <option value="Tour Guide">Tour Guide Service</option>
                  <option value="Wedding/Event">Wedding/Event Transport</option>
                </select>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSending}
                className="w-full cursor-pointer bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-pink-600/30 mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  "Get My Free Quote"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeContact;