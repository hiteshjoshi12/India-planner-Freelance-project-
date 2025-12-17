export const tourData = [
  // --- RAJASTHAN PACKAGES ---
  {
    id: "golden-triangle-3-days",
    category: "Rajasthan",
    title: "Golden Triangle Tour",
    duration: "3-4 Days",
    locations: "Jaipur, Delhi, Agra",
    price: { sedan: "18,000", suv: "25,000", tempo: "40,000" }, // [cite: 71]
    description: "Ideal for first-timers covering the classic circuit in private comfort.",
    highlights: ["Sunrise at Taj Mahal", "Amer Fort Jeep Ride", "Fatehpur Sikri Visit"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop",
    overview: "A perfect tour for first-timers and corporate groups covering the classic Golden Triangle circuit.",
    itinerary: [
      { day: "Day 1", title: "Jaipur Sightseeing", desc: "Amer Fort, City Palace, Hawa Mahal." },
      { day: "Day 2", title: "Jaipur to Agra", desc: "Drive to Agra via Fatehpur Sikri." },
      { day: "Day 3", title: "Agra to Delhi", desc: "Taj Mahal sunrise, then drive to Delhi." }
    ],
    inclusions: ["Private AC Car", "Driver Allowance", "Toll & Parking"],
    exclusions: ["Monuments Fees", "Meals", "Hotels"]
  },
  {
    id: "classic-rajasthan-7-days",
    category: "Rajasthan",
    title: "Classic Rajasthan & Lakes",
    duration: "7 Days",
    locations: "Jaipur, Jodhpur, Udaipur",
    price: { sedan: "45,000", suv: "60,000", tempo: "95,000" }, // [cite: 71]
    description: "A complete week covering forts, lakes, and desert camps.",
    highlights: ["Lake Pichola Boat Ride", "Jaisalmer Desert Camp", "Mehrangarh Fort"],
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1776&auto=format&fit=crop",
    overview: "Explore the lakes of Udaipur, the Blue City of Jodhpur, and the Golden City of Jaisalmer.",
    itinerary: [
      { day: "Day 1-2", title: "Jaipur", desc: "Full sightseeing of the Pink City." },
      { day: "Day 3", title: "Jodhpur", desc: "Visit Mehrangarh Fort and Jaswant Thada." },
      { day: "Day 4-5", title: "Udaipur", desc: "City Palace and Lake Pichola boat ride." },
      { day: "Day 6-7", title: "Jaisalmer", desc: "Desert camp and camel safari." }
    ],
    inclusions: ["Private AC Car", "Driver Allowance", "Camel Safari Assistance"],
    exclusions: ["Monuments Fees", "Meals", "Hotels"]
  },
  {
    id: "grand-rajasthan-12-days",
    category: "Rajasthan",
    title: "Grand Rajasthan Circuit",
    duration: "12 Days",
    locations: "Complete Rajasthan",
    price: { sedan: "75,000", suv: "1,00,000", tempo: "1,60,000" }, // [cite: 71]
    description: "The ultimate road trip covering the complete heritage of the state.",
    highlights: ["Complete Desert Circuit", "Mount Abu", "Shekhawati Havelis"],
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
    overview: "Comprehensive tour covering Bikaner, Jaisalmer, Jodhpur, Udaipur, and Mount Abu.",
    itinerary: [
      { day: "Day 1-3", title: "Jaipur & Shekhawati", desc: "Mandawa havelis and Jaipur forts." },
      { day: "Day 4-6", title: "Bikaner & Jaisalmer", desc: "Rat Temple and Thar Desert." },
      { day: "Day 7-9", title: "Jodhpur & Udaipur", desc: "Blue City and Lake City." },
      { day: "Day 10-12", title: "Mount Abu & Pushkar", desc: "Dilwara Temples and Brahma Temple." }
    ],
    inclusions: ["Private AC Car", "Driver Allowance", "All Tolls"],
    exclusions: ["Monuments Fees", "Meals", "Hotels"]
  },

  // --- AGRA PACKAGES ---
  {
    id: "same-day-taj-mahal",
    category: "Agra",
    title: "Same Day Taj Mahal",
    duration: "10-12 Hours",
    locations: "Delhi to Agra & Back",
    price: { sedan: "8,000", suv: "11,000", tempo: "On Request" }, // [cite: 223]
    description: "Private day trip via Yamuna Expressway including Taj Mahal and Agra Fort.",
    highlights: ["Pickup from Delhi", "Taj Mahal Visit", "Agra Fort & Baby Taj"],
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
    overview: "Express day tour from Delhi via Yamuna Expressway.",
    itinerary: [
      { day: "03:00 AM", title: "Pickup", desc: "Depart Delhi via Expressway." },
      { day: "07:00 AM", title: "Taj Mahal", desc: "Sunrise view of the Taj." },
      { day: "03:00 PM", title: "Return", desc: "Drive back to Delhi." }
    ],
    inclusions: ["AC Car", "Guide", "Water"],
    exclusions: ["Entry Tickets", "Lunch", "Tips"]
  },
  {
    id: "sunrise-taj-mahal",
    category: "Agra",
    title: "Sunrise Taj Mahal Tour",
    duration: "4-6 Hours",
    locations: "Agra Local",
    price: { sedan: "5,000", suv: "7,000", tempo: "On Request" }, // [cite: 223]
    description: "Witness the Taj Mahal at dawn for the best photography and tranquility.",
    highlights: ["Early Morning Access", "Mehtab Bagh", "Breakfast included"],
    image: "https://images.unsplash.com/photo-1706185555980-efcea55facca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "Dedicated tour for photographers and peace lovers.",
    itinerary: [
      { day: "05:30 AM", title: "Taj Mahal", desc: "Enter at sunrise." },
      { day: "09:00 AM", title: "Breakfast", desc: "Local breakfast break." },
      { day: "10:30 AM", title: "Agra Fort", desc: "Optional visit." }
    ],
    inclusions: ["AC Car", "Guide"],
    exclusions: ["Entry Tickets", "Meals"]
  },

  // --- DELHI PACKAGES ---
  {
    id: "delhi-full-day",
    category: "Delhi",
    title: "Full Day Old & New Delhi",
    duration: "8-9 Hours",
    locations: "Delhi NCR",
    price: { sedan: "2,500", suv: "3,500", tempo: "On Request" }, // [cite: 142]
    description: "Comprehensive tour covering Red Fort, Qutub Minar, and India Gate.",
    highlights: ["Chandni Chowk Rickshaw", "Lotus Temple", "Government Buildings"],
    image: "https://images.unsplash.com/photo-1598740355601-6020709911ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "Complete Delhi Darshan covering historic and modern sites.",
    itinerary: [
      { day: "09:00 AM", title: "Old Delhi", desc: "Red Fort, Jama Masjid, Chandni Chowk." },
      { day: "02:00 PM", title: "New Delhi", desc: "India Gate, Parliament House, Qutub Minar." }
    ],
    inclusions: ["AC Car (80km/8hr)", "Driver Allowance"],
    exclusions: ["Entry Fees", "Parking", "Meals"]
  }
];