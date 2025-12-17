import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, ChevronRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/who-we-are' },
    { name: 'Our Fleet', path: '/Carrentalservice' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  const serviceLinks = [
    { name: 'Car Rental with Driver', path: '/Carrentalservice' },
    { name: 'Jaipur Sightseeing', path: '/package/jaipur-sightseeing' },
    { name: 'Multilingual Guides', path: '/guideservice' },
    { name: 'Wedding Transport', path: '/contact-us' },
    { name: 'Airport Transfers', path: '/contact-us' }
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 font-sans">
      <div className="container mx-auto px-6">
        
        {/* --- Top Section: 4 Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand & About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              India <span className="text-pink-600">Planners</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for private Jaipur sightseeing, luxury car rentals, and authentic Rajasthan experiences. We turn trips into memories.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/919119129523" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    onClick={handleLinkClick} 
                    className="flex items-center gap-2 hover:text-pink-500 transition-colors group"
                  >
                    <ChevronRight size={14} className="text-pink-600 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-pink-500 transition-colors group">
                    <ChevronRight size={14} className="text-pink-600 group-hover:translate-x-1 transition-transform" />
                    {/* If these are internal pages, use Link. If placeholder, keep span/div */}
                    <Link to={service.path} onClick={handleLinkClick}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pink-600 shrink-0 mt-1" />
                <span>
                  Plot No. 12, Heritage Colony,<br />
                  Jaipur, Rajasthan 302001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-pink-600 shrink-0" />
                <a href="tel:+919119129523" className="hover:text-white transition-colors">+91 91191 29523</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-pink-600 shrink-0" />
                <a href="mailto:iptoursjpr@gmail.com" className="hover:text-white transition-colors">iptoursjpr@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom: Copyright & Developer Credit --- */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            <p>© {new Date().getFullYear()} India Planners. All rights reserved.</p>
            
            {/* --- Developer Credit Link --- */}
            <a 
              href={`https://wa.me/919650122063?text=${encodeURIComponent("Hi, I saw your work on India Planners and I am interested in developing a website.")}`}
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1 hover:text-green-400 transition-colors"
            >
              <Code size={14} />
              <span>Developed by <span className="font-bold">TechPartner</span></span>
            </a>
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" onClick={handleLinkClick} className="hover:text-pink-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" onClick={handleLinkClick} className="hover:text-pink-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;