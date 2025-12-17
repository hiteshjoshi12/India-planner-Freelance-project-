import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  Instagram, 
  Facebook,
  Loader2 
} from 'lucide-react';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); 
    setIsSending(true);

    const SERVICE_ID = 'service_qkp46m4';
    const TEMPLATE_ID = 'template_bcn6zps';
    const PUBLIC_KEY = 'Jj-9g_0omc9IFE64l';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Thank you! Your message has been sent successfully.");
          setIsSending(false);
          e.target.reset(); // Clears the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Oops! Something went wrong. Please try again later.");
          setIsSending(false);
        },
      );
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      
      {/* --- 1. Hero Section --- */}
      <div className="relative h-[77vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact India Planners" 
            className="w-full h-full object-cover opacity-30 "
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="uppercase text-4xl md:text-6xl font-bold mb-4 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Get in Touch
          </h1>
          <div className="w-20 h-1.5 bg-pink-600 mx-auto rounded-full mb-6 animate-in fade-in zoom-in duration-700 delay-200"></div>
          <p className="text-lg md:text-xl text-slate-200 max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            We’d love to hear from you. Whether you have a question about our tours, pricing, or need a custom itinerary, our team is ready to answer all your questions.
          </p>
        </div>
      </div>

      {/* --- 2. Main Content Area --- */}
      <div className="container mx-auto px-6 py-20 mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* --- Left Column: Contact Info --- */}
          <div className="lg:w-2/5 bg-slate-900 text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase">Contact <span className='text-pink-500'>Information</span></h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-pink-600 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                    <p className="text-slate-400 text-sm mb-1">Mon-Sun from 8am to 10pm</p>
                    <a href="tel:+919829833465" className="text-white hover:text-pink-400 transition-colors font-medium">
                      +91 91191 29523
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-pink-600 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                    <p className="text-slate-400 text-sm mb-1">For quotes and inquiries</p>
                    <a href="mailto:iptoursjpr@gmail.com" className="text-white hover:text-pink-400 transition-colors font-medium">
                      iptoursjpr@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-pink-600 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Plot No. 12, Heritage Colony,<br />
                      Jaipur, Rajasthan 302001
                    </p>
                  </div>
                </div>
                
                {/* WhatsApp CTA */}
                 <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-300">
                    <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">WhatsApp Support</h4>
                    <p className="text-slate-400 text-sm mb-1">24/7 Instant Chat</p>
                    <a 
                      href="https://wa.me/919119129523" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors font-medium"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative z-10 mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* --- Right Column: Inquiry Form --- */}
          <div className="lg:w-3/5 bg-white p-10 md:p-14">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    name="user_name" // Required by EmailJS
                    required
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email" // Required by EmailJS
                    required
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    name="user_phone" // Required by EmailJS
                    placeholder="+91 91191 29523" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Service Interested In</label>
                  <select 
                    name="service_type" // Required by EmailJS
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-slate-600"
                  >
                    <option value="Car Rental">Car Rental with Driver</option>
                    <option value="Sightseeing">Sightseeing Tour</option>
                    <option value="Tour Guide">Tour Guide Service</option>
                    <option value="Wedding">Wedding Transport</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message / Travel Dates</label>
                <textarea 
                  name="message" // Required by EmailJS
                  required
                  rows="4" 
                  placeholder="Tell us about your travel plans, dates, or specific requirements..." 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSending}
                className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg hover:shadow-pink-600/30 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* --- 3. Google Maps Placeholder --- */}
      <div className="h-[400px] w-full bg-slate-200 relative group overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.677943343332!2d75.787288!3d26.912433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db47224d449a1%3A0x695df6d50c655c66!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="India Planners Location"
          className="filter grayscale group-hover:grayscale-0 transition-all duration-700"
        ></iframe>
        
        {/* Overlay Card on Map */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white p-4 md:p-6 rounded-xl shadow-xl max-w-xs animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
           <div className="flex items-center gap-3 mb-2">
             <div className="bg-pink-100 p-2 rounded-full text-pink-600">
               <Clock size={20} />
             </div>
             <div>
               <p className="text-xs text-slate-500 font-bold uppercase">Opening Hours</p>
               <p className="text-sm font-bold text-slate-900">Open 7 Days a Week</p>
             </div>
           </div>
           <p className="text-sm text-slate-600 pl-11">8:00 AM - 10:00 PM</p>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;