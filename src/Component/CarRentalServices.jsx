import {
  Car,
  ShieldCheck,
  MapPin,
  Users,
  Briefcase,
  Plane,
  Phone,
  CheckCircle2,
  XCircle,
  CalendarClock,
  Globe2,
  ChevronRight,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";


const CarRentalServices = () => {
  // Fleet Data sourced from PDF
  const fleetData = [
    {
      type: "Sedan (Etios / Dzire)",
      capacity: "4 Passengers",
      bestFor: "Solo travelers, couples, small corporate trips",
      price: "₹1800/day",
      image:
        "https://images.unsplash.com/photo-1663852397535-18292e115327?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "SUV (Innova / Ertiga)",
      capacity: "6 Passengers",
      bestFor: "Families, wedding guest transfers, leisure tours",
      price: "₹2500/day",
      image:
        "https://images.unsplash.com/photo-1748215210939-ad8b6c8c086d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      type: "Tempo Traveller",
      capacity: "12-20 Passengers",
      bestFor: "Large groups, corporate events, wedding functions",
      price: "₹4500/day",
      image:
        "https://punetours.com/wp-content/uploads/2021/01/26-seater-travller.jpg",
    },
  ];

  // Service Highlights sourced from PDF
  const services = [
    {
      title: "Local Sightseeing",
      icon: <MapPin className="w-6 h-6 text-pink-600" />,
      desc: "Full-day or half-day Jaipur sightseeing covering Amer Fort, City Palace, Hawa Mahal and more with flexible timing.",
    },
    {
      title: "Airport & Railway Transfers",
      icon: <Plane className="w-6 h-6 text-pink-600" />,
      desc: "Door-to-door pickup from Jaipur airport (JAI) or railway station. Perfect for wedding guests and business travelers.",
    },
    {
      title: "Outstation Trips",
      icon: <Car className="w-6 h-6 text-pink-600" />,
      desc: "Day trips to Ajmer, Pushkar, Sariska or multi-day Rajasthan tours to Udaipur, Jodhpur, and Jaisalmer.",
    },
    {
      title: "Corporate Car Service",
      icon: <Briefcase className="w-6 h-6 text-pink-600" />,
      desc: "Punctual chauffeur-driven cars for meetings, conferences, factory visits, and client entertainment.",
    },
    {
      title: "Wedding & Event Transport",
      icon: <Users className="w-6 h-6 text-pink-600" />,
      desc: "Fleet management for weddings: hotel-to-venue shuttles, baraat vehicles, and guest movements.",
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden">
      {/* --- 1. Hero Section --- */}
      <div className="relative h-[77vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1651569411954-b843950d0c1e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Car Rental on Open Road"
            className="w-full h-full object-cover opacity-40 "
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 uppercase">
            Premium Car Rental <br />{" "}
            <span className="text-pink-500 uppercase">
              with Driver in Jaipur
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Choose from clean, air-conditioned sedans, SUVs, and tempo
            travellers driven by professional chauffeurs who know Jaipur roads
            perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <a
              href="#fleet"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-bold animate-in fade-in slide-in-from-bottom-8 duration-1000 hover:scale-105 active:scale-95 inline-block cursor-pointer no-underline"
            >
              View Fleet
            </a>
          </div>
        </div>
      </div>

      {/* --- 2. Vehicle Fleet (Pricing Table) --- */}
      <section id="fleet" className="py-20 container mx-auto px-6 ">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Vehicle Options for Every Need
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide a range of vehicles suitable for different group sizes
            and trip types.
            <br />
            <span className="text-sm text-pink-600 font-medium">
              *Rates include driver allowance, tolls, and parking.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetData.map((car, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12"
              // FIXED: Template literal syntax for delay
              style={{
                animationDuration: "1000ms",
                animationDelay: `${idx * 200}ms`,
              }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.type}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {car.type}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 mb-4">
                  <Users size={18} />
                  <span>{car.capacity}</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 h-10">
                  {car.bestFor}
                </p>
                <div className="flex items-end justify-between border-t border-slate-100 pt-6">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold">
                      Starting From
                    </span>
                    <p className="text-3xl font-bold text-pink-600">
                      {car.price}
                    </p>
                  </div>
                  <div className="bg-slate-100 p-2 rounded-full group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. Services Offered --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 animate-in fade-in slide-in-from-left-8 duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Comprehensive <br />{" "}
                <span className="text-pink-600">Travel Services</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                From corporate events to family holidays, our fleet is ready for
                any occasion. We specialize in providing a seamless travel
                experience across Rajasthan.
              </p>
              <div className="p-6 bg-pink-50 rounded-xl border border-pink-100 transform transition-transform hover:scale-105 duration-300">
                <h4 className="font-bold text-pink-800 mb-2 flex items-center gap-2">
                  <Globe2 size={20} />
                  Multilingual Guides Available
                </h4>
                <p className="text-sm text-pink-700">
                  Add a professional guide to any rental. Available in{" "}
                  <strong>
                    Hindi, English, French, Spanish, German, and Italian
                  </strong>{" "}
                  for heritage sites and cultural experiences.
                </p>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group animate-in fade-in slide-in-from-right-8"
                  style={{
                    animationDuration: "800ms",
                    animationDelay: `${idx * 150}ms`,
                  }}
                >
                  <div className="shrink-0 mt-1 bg-white p-3 shadow-sm rounded-full border border-slate-100 h-fit group-hover:border-pink-200 group-hover:shadow-md transition-all duration-300 group-hover:bg-pink-50">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-pink-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Transparent Pricing & Policies --- */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 animate-in fade-in zoom-in duration-700">
            <h2 className="text-3xl font-bold mb-4">
              Transparent Pricing & No Hidden Charges
            </h2>
            <p className="text-slate-400">
              India Planners follows a clear rate structure so you can travel
              with peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Local Usage Policy */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-pink-500/50 transition-colors duration-300 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-pink-500 animate-pulse" size={28} />
                <h3 className="text-2xl font-bold">Local Usage Policy</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2.5 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>

                  <span>
                    Standard Package: <strong>8 hours / 80 km</strong> limit per
                    day.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2.5 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>

                  <span>
                    Extra Km Charges: ₹12 - ₹25 per km (depending on vehicle).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2.5 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>

                  <span>
                    Extra Hour Charges: ₹200 - ₹400 per hour. [cite: 22]
                  </span>
                </li>
              </ul>
            </div>

            {/* Outstation Policy */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-pink-500/50 transition-colors duration-300 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-pink-500 animate-bounce" size={28} />
                <h3 className="text-2xl font-bold">Outstation Policy</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2.5 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>

                  <span>
                    Calculated on a <strong>per km basis</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2.5 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>

                  <span>
                    Minimum chargeable distance: <strong>250km/day</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2.5 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>

                  <span>
                    Night Halt Charges: ₹300 - ₹500 per night (extra).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Inclusions vs Exclusions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto border-t border-slate-700 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div>
              <h4 className="font-bold text-lg mb-4 text-green-400 flex items-center gap-2">
                <CheckCircle2 size={20} /> Inclusions
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Driver bata (food allowance), fuel, tolls, parking charges,
                state taxes, and AC usage.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-red-400 flex items-center gap-2">
                <XCircle size={20} /> Exclusions
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Monument entry fees, guest meals, personal shopping expenses,
                and driver tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. Why Choose Us & Booking Steps --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Why Choose Us */}
          <div className="animate-in fade-in slide-in-from-left-12 duration-1000">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              Why Choose India Planners?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Verified Drivers",
                  desc: "Licensed, uniformed chauffeurs with 5+ years experience and clean records.",
                  icon: <ShieldCheck />,
                },
                {
                  title: "Well-Maintained Fleet",
                  desc: "All vehicles less than 3 years old with comprehensive insurance and 24/7 roadside assistance.",
                  icon: <Car />,
                },
                {
                  title: "24/7 Booking Support",
                  desc: "Instant quotes via WhatsApp/Phone and flexible cancellation up to 24 hours prior.",
                  icon: <Phone />,
                },
                {
                  title: "Tailor-Made Service",
                  desc: "Perfect for corporate tours, family vacations, and wedding events.",
                  icon: <Briefcase />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300"
                >
                  <div className="shrink-0 w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: How To Book (Timeline) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-right-12 duration-1000 delay-200 hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">
              How to Book
            </h3>
            <div className="relative border-l-2 border-pink-200 ml-3 space-y-10 pl-8 pb-2">
              {[
                {
                  title: "Share Your Details",
                  desc: "Send dates, pickup location, group size, and trip type via WhatsApp, Call, or Email.",
                },
                {
                  title: "Get Instant Quote",
                  desc: "Receive a transparent quote with vehicle options and all inclusions.",
                },
                {
                  title: "Confirm Booking",
                  desc: "Pay a 20-50% advance to block your vehicle. The balance is payable on arrival.",
                },
                {
                  title: "Receive Driver Details",
                  desc: "Get driver contact info and vehicle photos 24 hours prior to your trip.",
                },
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white ring-4 ring-white transition-transform duration-300 group-hover:scale-125">
                    {idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
            <Link to={"/Contact-us"}>
            <button className="w-full mt-8 cursor-pointer bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20">
              <CalendarClock size={20} />
              Start Booking Now
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarRentalServices;
