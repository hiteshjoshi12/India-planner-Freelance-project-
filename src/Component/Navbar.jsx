import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to close menu and scroll to top
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="absolute w-full top-0 z-50">
      
      {/* --- Navigation Bar --- */}
      <header className="w-full text-white py-4 px-4 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent">
        
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex flex-col leading-tight uppercase font-bold tracking-wider z-50">
          <p className='text-xl'><span className="text-xl">INDIA{" "}</span> <span className='text-pink-500'>Planners</span></p>
        </Link>

        {/* --- DESKTOP NAV LINKS --- */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 font-semibold text-sm uppercase tracking-wider items-center">
          <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
          <Link to="/who-we-are" className="hover:text-pink-400 transition-colors">Who We Are</Link>
          <Link to="/packages" className="hover:text-pink-400 transition-colors">Tour Packages</Link>
          <Link to="/guideservice" className="hover:text-pink-400 transition-colors">Guide Service</Link>
          <Link to="/Carrentalservice" className="hover:text-pink-400 transition-colors">Car Rental Services</Link>
          <Link to="/FAQ" className="hover:text-pink-400 transition-colors">FAQ</Link>
          
          <Link to="/Contact-us" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded transition-colors shadow-lg">
            Contact Us
          </Link>
        </nav>

        {/* --- MOBILE MENU TOGGLE --- */}
        <button 
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* --- MOBILE NAV OVERLAY --- */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 z-40 text-xl font-bold uppercase tracking-wider animate-in fade-in duration-200">
            
            <Link to="/" onClick={handleMobileLinkClick} className="hover:text-pink-500 transition-colors">
              Home
            </Link>
            
            <Link to="/who-we-are" onClick={handleMobileLinkClick} className="hover:text-pink-500 transition-colors">
              Who We Are
            </Link>
            
            <Link to="/packages" onClick={handleMobileLinkClick} className="hover:text-pink-500 transition-colors">
              Tour Packages
            </Link>
            
            <Link to="/guideservice" onClick={handleMobileLinkClick} className="hover:text-pink-500 transition-colors">
              Guide Service
            </Link>
            
            <Link to="/Carrentalservice" onClick={handleMobileLinkClick} className="hover:text-pink-500 transition-colors text-center">
              Car Rental Services
            </Link>
            
            <Link to="/FAQ" onClick={handleMobileLinkClick} className="hover:text-pink-500 transition-colors">
              FAQ
            </Link>
            
            <Link to="/Contact-us" onClick={handleMobileLinkClick} className="text-pink-500 hover:text-white transition-colors">
              Contact Us
            </Link>

          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;