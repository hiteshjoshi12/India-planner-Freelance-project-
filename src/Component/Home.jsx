import React from 'react';
import { MessageCircle } from 'lucide-react';
import HeroCarousel from './HeroCarousel'; 
import TourCollageSection from './TourCollageSection';
import HomeAbout from './HomeAbout';
import HomeStats from './HomeStats';
import HomeContact from './HomeContact';
import MemoriesCreated from './MemoriesCreated';


const Home = () => {
  return (
    <div className="relative min-h-screen font-sans">
      <HeroCarousel />
      <TourCollageSection />
      <HomeAbout />
      <HomeStats />
      <HomeContact />
      <MemoriesCreated />

    </div>
  );
};

export default Home;