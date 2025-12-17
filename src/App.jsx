import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Keep static imports for components that appear on EVERY page (Navbar, Footer, etc.)
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import { MessageCircle } from "lucide-react";
import { Toaster } from "react-hot-toast";

// 1. Use React.lazy for page components
const Home = lazy(() => import("./Component/Home"));
const WhoWeAre = lazy(() => import("./Component/WhoWeAre"));
const CarRentalServices = lazy(() => import("./Component/CarRentalServices"));
const FAQ = lazy(() => import("./Component/FAQ"));
const ContactUs = lazy(() => import("./Component/ContactUs"));
const TourPackages = lazy(() => import("./Component/TourPackages"));
const PackageDetails = lazy(() => import("./Component/PackageDetails"));
const GuideServices = lazy(() => import("./Component/GuideServices"));
const Gallery = lazy(() => import("./Component/Gallery"));

// 2. Create a simple Loading Spinner component for the fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Toaster position="top-right" />
        <ScrollToTop />
        <Navbar />
        <a
          // React automatically converts the spaces for you here:
          href={`https://wa.me/919119129523?text=${encodeURIComponent(
            "Hello, I have a query regarding a tour."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 md:p-4 rounded-full text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        </a>

        {/* 3. Wrap Routes in Suspense to handle the loading state */}
        <div className="grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/Carrentalservice" element={<CarRentalServices />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Contact-us" element={<ContactUs />} />
              <Route path="/packages" element={<TourPackages />} />
              <Route path="/package/:id" element={<PackageDetails />} />
              <Route path="/guideservice" element={<GuideServices />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
