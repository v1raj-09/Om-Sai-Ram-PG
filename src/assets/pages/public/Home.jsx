import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Utensils, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Bed,
  Sparkles,
  Users,
  Coffee
} from "lucide-react";
import Hero from "../../components/Hero";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-[#ADFF2F] selection:text-[#0F172A]">
      
      {/* Separated Hero Section */}
      <Hero />

      {/* Quick Stats Grid with Interactive Hover & Green Borders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#1E293B] p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-700/60 hover:border-[#ADFF2F]/50 transition-all duration-500 backdrop-blur-md group/stats">
          <div className="text-center space-y-1 group/item p-3 rounded-2xl hover:bg-slate-800/60 hover:border hover:border-[#ADFF2F]/40 transition-all duration-300">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#ADFF2F] group-hover/item:scale-110 transition-transform">100+</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-medium">Happy Residents</p>
          </div>
          <div className="text-center space-y-1 group/item p-3 rounded-2xl hover:bg-slate-800/60 hover:border hover:border-[#ADFF2F]/40 transition-all duration-300">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#ADFF2F] group-hover/item:scale-110 transition-transform">3+</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-medium">Sharing Options</p>
          </div>
          <div className="text-center space-y-1 group/item p-3 rounded-2xl hover:bg-slate-800/60 hover:border hover:border-[#ADFF2F]/40 transition-all duration-300">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#ADFF2F] group-hover/item:scale-110 transition-transform">24/7</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-medium">Security & Power</p>
          </div>
          <div className="text-center space-y-1 group/item p-3 rounded-2xl hover:bg-slate-800/60 hover:border hover:border-[#ADFF2F]/40 transition-all duration-300">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#ADFF2F] group-hover/item:scale-110 transition-transform">100%</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-medium">Hygienic Mess</p>
          </div>
        </div>
      </section>

      {/* Overview Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ADFF2F]/10 border border-slate-700 hover:border-[#ADFF2F]/60 text-[#ADFF2F] text-xs font-semibold uppercase tracking-wider transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5" /> Why Choose Om Sai Ram PG
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Designed For Your Modern PG Lifestyle</h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">We provide a secure, home-like environment with all essentials covered so you can focus entirely on your studies and career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1E293B]/80 hover:bg-[#1E293B] p-8 rounded-3xl shadow-xl border border-slate-800 hover:border-[#ADFF2F]/60 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#ADFF2F]/10 border border-slate-700 group-hover:border-[#ADFF2F]/50 rounded-2xl flex items-center justify-center text-[#ADFF2F] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Bed className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ADFF2F] transition-colors">Comfortable Room Sharing</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">Choose from single, twin, or multi-sharing rooms equipped with individual study tables, secure lockers, and cozy beds.</p>
            <Link to="/rooms" className="text-[#ADFF2F] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              View Rooms & Sharing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-[#1E293B]/80 hover:bg-[#1E293B] p-8 rounded-3xl shadow-xl border border-slate-800 hover:border-[#ADFF2F]/60 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#ADFF2F]/10 border border-slate-700 group-hover:border-[#ADFF2F]/50 rounded-2xl flex items-center justify-center text-[#ADFF2F] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Utensils className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ADFF2F] transition-colors">Hygienic Mess & Meals</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">Enjoy delicious, wholesome home-style breakfast, lunch, and dinner prepared in a clean kitchen with rotating menus.</p>
            <Link to="/food" className="text-[#ADFF2F] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Check Mess Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-[#1E293B]/80 hover:bg-[#1E293B] p-8 rounded-3xl shadow-xl border border-slate-800 hover:border-[#ADFF2F]/60 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#ADFF2F]/10 border border-slate-700 group-hover:border-[#ADFF2F]/50 rounded-2xl flex items-center justify-center text-[#ADFF2F] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ADFF2F] transition-colors">Secure & Connected Living</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">24/7 warden supervision, CCTV surveillance, fast Wi-Fi for remote work or classes, and uninterrupted power backup.</p>
            <Link to="/amenities" className="text-[#ADFF2F] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore Amenities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Room Photo Banner */}
      <section className="bg-[#090D16] text-white py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-xl">
            <span className="text-[#ADFF2F] font-semibold text-sm uppercase tracking-wider">Hassle-Free PG Accommodations</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">Flexible Sharing Plans Built For Your Budget</h2>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              Whether you are working late at an IT park or studying for college exams, our PG provides a peaceful environment with transparent, all-inclusive pricing.
            </p>
            <ul className="space-y-3">
              {["Zero hidden brokerage fees", "Electricity and high-speed Wi-Fi included", "Regular housekeeping & linen care"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#ADFF2F] shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link to="/rooms" className="bg-[#ADFF2F] hover:bg-[#98fb98] text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#ADFF2F]/20 hover:scale-105 active:scale-95 inline-flex items-center gap-2 text-sm border border-[#ADFF2F]/50">
                View Pricing Tiers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 hover:border-[#ADFF2F]/50 transition-all duration-500 relative group">
            <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors z-10" />
            <img src="/omsairampg.jpeg" alt="Om Sai Ram Room View" className="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition duration-700" />
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#ADFF2F] font-semibold text-sm uppercase tracking-wider">Resident Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What Our PG Residents Say</h2>
          <p className="text-slate-300 text-base font-light">Hear genuine feedback from professionals and students living at Om Sai Ram PG.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "The environment is peaceful, clean, and extremely close to the IT park. Highly recommended!", name: "Rahul Sharma", role: "Software Developer" },
            { quote: "Great food quality and wonderful management support. Felt at home from day one.", name: "Priya Patel", role: "Design Student" },
            { quote: "Super fast Wi-Fi and reliable backup power made remote working seamless.", name: "Amit Verma", role: "Data Analyst" },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#1E293B] p-8 rounded-3xl shadow-xl border border-slate-800 hover:border-[#ADFF2F]/60 hover:-translate-y-2 flex flex-col justify-between space-y-6 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#ADFF2F] group-hover:scale-105 transition-transform origin-left">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-current" />))}
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed font-light">"{item.quote}"</p>
              </div>
              <div className="pt-4 border-t border-slate-800 group-hover:border-slate-700 transition-colors">
                <h4 className="font-bold text-white text-sm">{item.name}</h4>
                <p className="text-[#ADFF2F] text-xs">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      

     

    </div>
  );
};

export default Home;