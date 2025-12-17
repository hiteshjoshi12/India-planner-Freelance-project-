import React, { useState, useEffect } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeroCarousel = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
      title: "Architectural Marvels",
      subtitle: "Witness the intricate beauty of the iconic Hawa Mahal.",
      cta: "Explore Now",
      link: "#tour-collage"
    },
    {
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
      title: "The Royal Heritage",
      subtitle: "Walk through the corridors of history at Amber Fort.",
      cta: "Book A Tour",
      link: "/packages"
    },
    {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
      title: "Serenity & Culture",
      subtitle: "Immerse yourself in the vibrant colors of the Pink City.",
      cta: "Plan Your Trip",
      link: "/packages"
    },
  ];

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleCtaClick = (link) => {
    if (link.startsWith('#')) {
      const elementId = link.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link);
      window.scrollTo(0, 0);
    }
  };

  return (
    // 1. FIXED HEIGHT PARENT: 
    // h-[85vh] prevents mobile from being too tall. h-screen for desktop.
    <section className="relative h-[85vh] md:h-screen w-full bg-slate-900 overflow-hidden">
      
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        // 2. FORCE CAROUSEL TO FILL PARENT HEIGHT
        className="w-full h-full" 
        opts={{
          loop: true,
          align: "start",
        }}
      >
        {/* 3. FORCE TRACK TO FILL CAROUSEL HEIGHT */}
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            // 4. FORCE ITEM TO FILL TRACK HEIGHT
            <CarouselItem key={index} className="pl-0 h-full w-full relative">
              <img 
                src={slide.image} 
                alt="Jaipur Scenery" 
                // 5. CRITICAL FIX: object-cover + h-full
                // This forces the image to crop itself to fit the box, 
                // instead of stretching the box to fit the image.
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-black/40" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* --- Text Overlay --- */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-4 pointer-events-none">
        <div key={current} className="max-w-4xl flex flex-col items-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight mb-4 drop-shadow-2xl leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both">
            {slides[current].title}
          </h1>

          <p className="text-lg md:text-2xl mb-8 drop-shadow-lg font-medium text-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
            {slides[current].subtitle}
          </p>

          <div className="pointer-events-auto animate-in fade-in zoom-in duration-700 delay-300 fill-mode-both">
            <button 
              onClick={() => handleCtaClick(slides[current].link)}
              className="bg-pink-600 hover:bg-pink-700 text-white cursor-pointer font-bold py-3 px-8 md:px-10 rounded-sm text-lg transition-transform hover:scale-105 shadow-xl uppercase tracking-widest"
            >
              {slides[current].cta}
            </button>
          </div>

        </div>
      </div>

      {/* --- Dots --- */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              current === index 
                ? "bg-white scale-125" 
                : "bg-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroCarousel;