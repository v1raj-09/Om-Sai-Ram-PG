import React, { useState } from "react";
import { Utensils, Coffee, Flame, Sparkles, X } from "lucide-react";

const Food = () => {
  const [activeDay, setActiveDay] = useState("monday");
  const [selectedMealType, setSelectedMealType] = useState(null); // 'breakfast', 'lunch', 'dinner'

  // Updated menus with professional terminology ("Rice" instead of "Bhat")
  const breakfastMenu = [
    { day: "Monday", item: "Tarri Pohe" },
    { day: "Tuesday", item: "Special Maggi" },
    { day: "Wednesday", item: "Misal Pav" },
    { day: "Thursday", item: "Steamed Idli Sambhar" },
    { day: "Friday", item: "Upma with Chutney" },
    { day: "Saturday", item: "Pav Bhaji" },
    { day: "Sunday", item: "Khichdi" },
  ];

  const lunchMenu = [
    { day: "Saturday", item: "Khichdi" },
    { day: "Sunday", item: "Steamed Rice & Traditional Aamti" },
  ];

  const dinnerMenu = [
    { day: "Monday", item: "Chanyachi Bhaji, Steamed Rice, Traditional Aamti, Soft Chapati" },
    { day: "Tuesday", item: "Seasonal Green Vegetable Curry, Steamed Rice, Traditional Aamti, Soft Chapati" },
    { day: "Wednesday", item: "Egg Curry, Steamed Rice, Traditional Aamti, Soft Chapati" },
    { day: "Thursday", item: "Classic Chole Masala, Steamed Rice, Traditional Aamti, Soft Chapati" },
    { day: "Friday", item: "Sprouted Matki Usal, Steamed Rice, Varan, Soft Chapati" },
    { day: "Saturday", item: "Assorted Mixed Vegetable Curry, Steamed Rice, Traditional Aamti, Soft Chapati" },
    { day: "Sunday", item: "Special Chicken Gravy, Steamed Rice, Traditional Aamti, Soft Chapati" },
  ];

  const weeklyMenu = {
    monday: { breakfast: "Tarri Pohe & Hot Tea", lunch: "Standard Thali & Special Items", dinner: "Chanyachi Bhaji, Steamed Rice, Traditional Aamti, Soft Chapati" },
    tuesday: { breakfast: "Special Maggi & Tea", lunch: "Standard Thali & Special Items", dinner: "Green Veg Curry, Steamed Rice, Traditional Aamti, Soft Chapati" },
    wednesday: { breakfast: "Misal Pav & Tea", lunch: "Standard Thali & Special Items", dinner: "Egg Curry, Steamed Rice, Traditional Aamti, Soft Chapati" },
    thursday: { breakfast: "Steamed Idli Sambhar & Tea", lunch: "Standard Thali & Special Items", dinner: "Chole Masala, Steamed Rice, Traditional Aamti, Soft Chapati" },
    friday: { breakfast: "Upma with Chutney & Tea", lunch: "Standard Thali & Special Items", dinner: "Matki Usal, Steamed Rice, Varan, Soft Chapati" },
    saturday: { breakfast: "Pav Bhaji & Tea", lunch: "Khichdi Special", dinner: "Mixed Veg Curry, Steamed Rice, Traditional Aamti, Soft Chapati" },
    sunday: { breakfast: "Khichdi & Tea", lunch: "Steamed Rice & Aamti Special", dinner: "Special Chicken Gravy, Steamed Rice, Traditional Aamti, Soft Chapati" }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#ADFF2F] font-semibold text-sm uppercase tracking-wider bg-slate-900 px-4 py-1.5 rounded-full border border-amber-400/40">
            Mess & Dining
          </span>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Hygienic & Home-Cooked Food</h1>
          <p className="text-slate-300 text-base sm:text-lg">Nutritious meals prepared with strict quality control, authentic taste, and rotating daily menus.</p>
        </div>

        {/* Daily Schedule Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-xl border border-amber-400/40">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-l-4 border-[#ADFF2F] pl-3">Daily Meal Timings</h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              We serve three balanced meals daily tailored to student and professional preferences, keeping health, taste, and absolute kitchen hygiene paramount. Click any meal card below to view the detailed blackboard schedule!
            </p>
            
            <div className="space-y-3">
              {/* Breakfast Card */}
              <div 
                onClick={() => setSelectedMealType("breakfast")}
                className="p-4 bg-slate-950 rounded-2xl border border-amber-400/30 flex items-center justify-between cursor-pointer hover:border-[#ADFF2F] transition group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🍳</span>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-[#ADFF2F] transition">Breakfast & Nasta (Click to view Menu)</h4>
                    <p className="text-slate-400 text-xs">Pohe, Maggi, Misal Pav, Idli, Upma & more</p>
                  </div>
                </div>
                <span className="text-[#ADFF2F] text-xs font-semibold bg-slate-900 px-3 py-1 rounded-full border border-amber-400/30">7:30 AM – 10:00 AM</span>
              </div>

              {/* Lunch Card */}
              <div 
                onClick={() => setSelectedMealType("lunch")}
                className="p-4 bg-slate-950 rounded-2xl border border-amber-400/30 flex items-center justify-between cursor-pointer hover:border-[#ADFF2F] transition group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🍛</span>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-[#ADFF2F] transition">Wholesome Lunch (Click to view Menu)</h4>
                    <p className="text-slate-400 text-xs">Saturday Khichdi & Sunday Rice & Aamti</p>
                  </div>
                </div>
                <span className="text-[#ADFF2F] text-xs font-semibold bg-slate-900 px-3 py-1 rounded-full border border-amber-400/30">12:30 PM – 2:30 PM</span>
              </div>

              {/* Dinner Card */}
              <div 
                onClick={() => setSelectedMealType("dinner")}
                className="p-4 bg-slate-950 rounded-2xl border border-amber-400/30 flex items-center justify-between cursor-pointer hover:border-[#ADFF2F] transition group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🍽</span>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-[#ADFF2F] transition">Dinner (Click to view Menu)</h4>
                    <p className="text-slate-400 text-xs">Chanyachi, Green Veg, Egg, Chole, Chicken</p>
                  </div>
                </div>
                <span className="text-[#ADFF2F] text-xs font-semibold bg-slate-900 px-3 py-1 rounded-full border border-amber-400/30">8:00 PM – 10:00 PM</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-400/40 aspect-video lg:aspect-[4/3]">
            <img src="/pggallery5.webp" alt="Om Sai Ram Mess Dining" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-white font-bold text-sm bg-slate-900/90 px-4 py-2 rounded-xl border border-amber-400/40 backdrop-blur-md">
                ✨ Clean Dining Hall & RO Drinking Water
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Weekly Menu Section */}
        <div className="bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-xl border border-amber-400/40 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ADFF2F]" /> Weekly Mess Menu Schedule
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">Click on any day to check the delicious items prepared for breakfast, lunch, and dinner.</p>
          </div>

          {/* Day Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { id: "monday", label: "Mon" },
              { id: "tuesday", label: "Tue" },
              { id: "wednesday", label: "Wed" },
              { id: "thursday", label: "Thu" },
              { id: "friday", label: "Fri" },
              { id: "saturday", label: "Sat" },
              { id: "sunday", label: "Sun" },
            ].map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeDay === day.id
                    ? "bg-[#ADFF2F] text-slate-950 border-amber-400 shadow-lg shadow-[#ADFF2F]/20 scale-105"
                    : "bg-slate-950 text-slate-300 border-amber-400/30 hover:border-[#ADFF2F] hover:text-white"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* Menu Display Card */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-amber-400/40 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="space-y-2 bg-slate-900 p-5 rounded-xl border border-amber-400/20">
              <span className="text-[#ADFF2F] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Coffee className="w-4 h-4" /> Breakfast & Nasta
              </span>
              <p className="text-white font-semibold text-base pt-1">{weeklyMenu[activeDay].breakfast}</p>
              <p className="text-slate-400 text-xs">Served hot with tea/coffee</p>
            </div>

            <div className="space-y-2 bg-slate-900 p-5 rounded-xl border border-amber-400/20">
              <span className="text-[#ADFF2F] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Utensils className="w-4 h-4" /> Afternoon Lunch
              </span>
              <p className="text-white font-semibold text-base pt-1">{weeklyMenu[activeDay].lunch}</p>
              <p className="text-slate-400 text-xs">Unlimited chapatis & rice</p>
            </div>

            <div className="space-y-2 bg-slate-900 p-5 rounded-xl border border-amber-400/20">
              <span className="text-[#ADFF2F] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4" /> Dinner Meal
              </span>
              <p className="text-white font-semibold text-base pt-1">{weeklyMenu[activeDay].dinner}</p>
              <p className="text-slate-400 text-xs">Freshly prepared every evening</p>
            </div>
          </div>
        </div>

      </div>

      {/* Blackboard Modal Popup */}
      {selectedMealType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative max-w-lg w-full bg-[#040404] border-8 border-[#8B5A2B] rounded-2xl shadow-2xl overflow-hidden p-6 text-white font-mono">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMealType(null)}
              className="absolute top-4 right-4 z-10 text-slate-300 hover:text-white p-2 rounded-full bg-slate-900 border border-amber-400/40 shadow-lg transition"
            >
              <X className="w-5 h-5 text-[#ADFF2F]" />
            </button>

            {/* Blackboard Header */}
            <div className="text-center pb-4 border-b border-dashed border-amber-600/40 mb-6">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Om Sai Ram PG Mess</span>
              <h3 className="text-2xl font-extrabold text-[#ADFF2F] tracking-wider mt-1 drop-shadow">
                {selectedMealType === 'breakfast' && "☕ Breakfast & Nasta Menu"}
                {selectedMealType === 'lunch' && "🍛 Wholesome Lunch Menu"}
                {selectedMealType === 'dinner' && "🍽️ Dinner Special Menu"}
              </h3>
            </div>

            {/* Blackboard Content List */}
            <div className="space-y-3.5 max-h-[60vh] overflow-y-auto pr-2">
              {selectedMealType === 'breakfast' && breakfastMenu.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-black/30 px-4 py-2.5 rounded-lg border border-amber-900/40">
                  <span className="text-amber-300 font-bold uppercase text-sm">{item.day}</span>
                  <span className="text-white text-sm font-sans tracking-wide bg-amber-500/10 px-3 py-1 rounded border border-amber-400/20">{item.item}</span>
                </div>
              ))}

              {selectedMealType === 'lunch' && (
                <>
                  <p className="text-xs text-amber-300/80 mb-2 italic text-center">*Lunch specials on weekends (Saturday & Sunday)*</p>
                  {lunchMenu.map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-black/30 px-4 py-2.5 rounded-lg border border-amber-900/40">
                      <span className="text-amber-300 font-bold uppercase text-sm">{item.day}</span>
                      <span className="text-white text-sm font-sans tracking-wide bg-amber-500/10 px-3 py-1 rounded border border-amber-400/20">{item.item}</span>
                    </div>
                  ))}
                </>
              )}

              {selectedMealType === 'dinner' && dinnerMenu.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-black/30 px-4 py-2.5 rounded-lg border border-amber-900/40">
                  <span className="text-amber-300 font-bold uppercase text-sm w-28 shrink-0">{item.day}</span>
                  <span className="text-white text-xs sm:text-sm font-sans tracking-wide bg-amber-500/10 px-3 py-1 rounded border border-amber-400/20 text-right">{item.item}</span>
                </div>
              ))}
            </div>

            {/* Blackboard Footer */}
            <div className="mt-6 pt-4 border-t border-dashed border-amber-600/40 text-center">
              <button 
                onClick={() => setSelectedMealType(null)}
                className="bg-[#ADFF2F] hover:bg-[#98fb98] text-slate-950 font-bold px-8 py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg"
              >
                Close Blackboard
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Food;