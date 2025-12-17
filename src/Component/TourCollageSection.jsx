import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: "Full Day Jaipur Sightseeing Tour",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop", // Hawa Mahal
    shortDesc: "Discover the best of the Pink City in one day.",
    fullDesc: "Experience a comprehensive 8-10 hour private tour of Jaipur's most iconic landmarks. Perfect for first-time visitors, this tour covers Amer Fort, City Palace, Jantar Mantar, and photo stops at Jal Mahal and Hawa Mahal. Includes a private AC car, driver, and optional multilingual guide.",
    highlights: ["Amer Fort", "City Palace", "Jantar Mantar", "Jal Mahal (photo stop)", "Hawa Mahal (photo stop)"],
    duration: "8-10 Hours"
  },
  {
    id: 2,
    title: "Half Day Jaipur City Tour",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop", // Amber Fort
    shortDesc: "A quick yet fulfilling exploration for those short on time.",
    fullDesc: "Ideal for business travelers or those with limited time, this 4-5 hour tour covers key highlights. Visit the exterior of Amer Fort, enjoy photo stops at Jal Mahal and Hawa Mahal, and explore either the City Palace or Jantar Mantar comfortably in a private AC car.",
    highlights: ["Amer Fort (exterior)", "Jal Mahal (photo stop)", "Hawa Mahal (viewpoint)", "City Palace OR Jantar Mantar"],
    duration: "4-5 Hours"
  },
  {
    id: 3,
    title: "Jaipur Night Sightseeing Tour",
    image: "https://images.unsplash.com/photo-1575380978664-00d8542286c3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Jal Mahal Night
    shortDesc: "Witness the Pink City beautifully illuminated after sunset.",
    fullDesc: "Experience the magical side of Jaipur by night. This relaxed 4-5 hour evening tour takes you to beautifully lit landmarks like Albert Hall Museum and Birla Temple. Enjoy a night photo stop at Jal Mahal and drive past the illuminated Hawa Mahal and old city bazaars.",
    highlights: ["Albert Hall Museum (illumination)", "Birla Temple", "Jal Mahal (night view)", "Hawa Mahal (drive past)"],
    duration: "4-5 Hours"
  },
  {
    id: 4,
    title: "2-Day Jaipur Highlights Tour",
    image: "https://images.unsplash.com/photo-1597074866202-b71868f8ec6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // City Palace
    shortDesc: "A deeper, more relaxed immersive experience over two days.",
    fullDesc: "Designed for a slower pace, this 2-day tour offers a deeper dive into Jaipur's history and culture. Day 1 focuses on major forts and palaces, while Day 2 covers museums, temples, and local bazaars. Includes a private car and driver for both days.",
    highlights: ["Day 1: Amer Fort, City Palace", "Day 2: Albert Hall, Markets"],
    duration: "2 Days"
  },
  {
    id: 5,
    title: "Heritage & Market Walking Tour",
    image: "https://images.unsplash.com/photo-1534409040788-5d4110a2213f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bazaars/Old City
    shortDesc: "Combine car comfort with guided heritage walks.",
    fullDesc: "This unique tour combines comfortable car travel with short guided walks through old city lanes and traditional bazaars. Ideal for photography enthusiasts and shoppers interested in textiles and jewelry. Explore Tripolia, Johari Bazaar, and hidden heritage spots.",
    highlights: ["Hawa Mahal Area Walk", "Tripolia & Johari Bazaars", "Old City Gates", "Heritage Viewpoints"],
    duration: "6-7 Hours"
  },
];

const TourCollageSection = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (tour) => {
    setSelectedTour(tour);
    setIsDialogOpen(true);
  };

  return (
    <section id="tour-collage" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase">
            Curated <span className='text-pink-500'>Jaipur Sightseeing</span> Tours
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From majestic forts to vibrant bazaars, discover the essence of the Pink City with our selection of private tours designed for every traveler.
          </p>
        </div>

        {/* Grid Layout Logic for 5 Items:
           - Mobile: 1 column (stack everything)
           - Desktop (md): 3 columns
           - Item 0 (Full Day): Spans 2 cols (Featured)
           - Item 1 (Half Day): Spans 1 col
           - Items 2,3,4: Span 1 col each (filling the second row perfectly)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {tours.map((tour, index) => (
            <Card 
              key={tour.id} 
              className={`cursor-pointer group overflow-hidden relative rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-0 ${
                index === 0 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
              onClick={() => handleCardClick(tour)}
            >
              <CardContent className="p-0 h-full w-full relative">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 drop-shadow-md leading-tight">
                        {tour.title}
                      </h3>
                      {/* Short description hidden on mobile to save space, visible on hover or larger screens if desired */}
                      <p className="text-sm md:text-base font-medium opacity-90 text-gray-200 line-clamp-2">
                        {tour.shortDesc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="h-1 w-0 bg-pink-500 mt-4 transition-all duration-500 group-hover:w-1/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tour Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px] bg-white max-h-[90vh] overflow-y-auto">
            {selectedTour && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-slate-900 flex items-start gap-2">
                    <MapPin className="h-6 w-6 text-pink-600 mt-1 shrink-0" />
                    <span>{selectedTour.title}</span>
                  </DialogTitle>
                  <DialogDescription className="text-slate-600 flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4 text-pink-600" />
                    <span className="font-semibold text-pink-600">Duration:</span> {selectedTour.duration}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  <div className="w-full h-56 md:h-64 rounded-md overflow-hidden mb-6">
                    <img 
                      src={selectedTour.image} 
                      alt={selectedTour.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      {selectedTour.fullDesc}
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {selectedTour.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-sm md:text-base text-slate-700">
                            <span className="h-2 w-2 bg-pink-500 rounded-full mr-3 mt-2 shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TourCollageSection;