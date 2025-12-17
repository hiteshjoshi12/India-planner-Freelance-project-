import React, { useEffect, useState, useRef } from 'react';
import { Users, Car, Map, Smile } from 'lucide-react';

// --- Helper Component for Animation ---
const CountUp = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 1. Parse number and suffix (e.g. "10k+" -> num: 10, suffix: "k+")
  const match = endValue.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      // Calculate current count based on progress
      if (progress < duration) {
        const nextCount = Math.min(target, Math.floor((progress / duration) * target));
        setCount(nextCount);
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure we land exactly on target
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// --- Main Stats Component ---
const stats = [
  { icon: <Car size={32} />, value: "250+", label: "Trips Completed" },
  { icon: <Users size={32} />, value: "3k+", label: "Happy Travelers" },
  { icon: <Map size={32} />, value: "10+", label: "Destinations" },
  { icon: <Smile size={32} />, value: "100%", label: "Satisfaction" },
];

const HomeStats = () => {
  return (
    <section className="bg-pink-600 py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-2 animate-in fade-in zoom-in duration-700 fill-mode-both" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-2 hover:bg-white/30 transition-colors">
                {stat.icon}
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold">
                {/* Use the CountUp component here */}
                <CountUp endValue={stat.value} duration={2500} />
              </h3>
              
              <p className="text-pink-100 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;