// import React from "react";
// import { Wifi, Droplet, Sparkles, ShieldCheck, Zap, Car, Tv, Wind, CheckCircle2 } from "lucide-react";

// const groups = [
//   {
//     title: "Comfort & Living Essentials",
//     intro: "The fundamental amenities curated to make your private or shared space feel like a true home.",
//     items: [
//       { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Dedicated high-speed fiber internet connection on every floor, optimized for remote work, studies, and streaming." },
//       { icon: Droplet, title: "24/7 Hot Water", desc: "Reliable solar and geyser-powered hot water systems installed across all bathrooms for round-the-clock convenience." },
//       { icon: Wind, title: "Ventilated Rooms", desc: "Architecturally designed large windows and optimal cross-air circulation channels in every room." },
//       { icon: Tv, title: "Common Lounge", desc: "A modern shared lounge area equipped with a flat-screen TV and comfortable seating to unwind." },
//     ],
//   },
//   {
//     title: "Safety, Security & Operations",
//     intro: "Comprehensive infrastructure looked after around the clock so you can focus entirely on your day.",
//     items: [
//       { icon: ShieldCheck, title: "Secure Premises", desc: "Multi-tier security infrastructure with CCTV surveillance recording common areas 24 hours a day." },
//       { icon: Zap, title: "Power Backup", desc: "Robust generator and inverter backup ensuring lights, fans, and Wi-Fi remain active during outages." },
//       { icon: Sparkles, title: "Daily Housekeeping", desc: "Professional maintenance staff ensuring spotless private rooms and shared corridors daily." },
//       { icon: Car, title: "Vehicle Parking", desc: "Dedicated, secure, and well-lit off-street parking space available for bikes and scooters." },
//     ],
//   },
// ];

// const Amenities = () => {
//   return (
//     <section className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8 lg:py-24">
//       <div className="mx-auto max-w-7xl">
//         <header className="max-w-2xl">
//           <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
//             Facilities
//           </span>
//           <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//             Amenities and Facilities
//           </h1>
//           <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
//             Everything you need for a comfortable, secure, and productive stay is fully included, from high-speed fiber internet and hot water to round-the-clock security.
//           </p>
//         </header>

//         <div className="mt-16 space-y-16">
//           {groups.map((group) => (
//             <div key={group.title} className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
//               <div className="lg:col-span-4 lg:sticky lg:top-8">
//                 <h2 className="text-2xl font-bold tracking-tight text-slate-900">{group.title}</h2>
//                 <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{group.intro}</p>
//                 <div className="mt-6 hidden lg:flex items-center gap-2 text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-2 rounded-lg border border-teal-100 w-fit">
//                   <CheckCircle2 className="w-4 h-4 shrink-0" /> Fully included in monthly rent
//                 </div>
//               </div>

//               <div className="lg:col-span-8">
//                 <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   {groups.map && group.items.map(({ icon: Icon, title, desc }) => (
//                     <li 
//                       key={title} 
//                       className="flex flex-col justify-between bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 group"
//                     >
//                       <div className="space-y-4">
//                         <div className="flex items-center justify-between">
//                           <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 border border-teal-100 transition-transform duration-300 group-hover:scale-110">
//                             <Icon className="h-5 w-5" aria-hidden="true" />
//                           </span>
//                           <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
//                             Standard
//                           </span>
//                         </div>
//                         <div className="space-y-1.5">
//                           <h3 className="text-lg font-bold tracking-tight text-slate-900">{title}</h3>
//                           <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Amenities;


import React from "react";
import { Wifi, Droplet, Sparkles, ShieldCheck, Zap, Car, Tv, Wind, CheckCircle2 } from "lucide-react";

const groups = [
  {
    title: "Comfort & Living Essentials",
    intro: "The fundamental amenities curated to make your private or shared space feel like a true home.",
    items: [
      { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Dedicated high-speed fiber internet connection on every floor, optimized for remote work, studies, and streaming." },
      { icon: Droplet, title: "24/7 Hot Water", desc: "Reliable solar and geyser-powered hot water systems installed across all bathrooms for round-the-clock convenience." },
      { icon: Wind, title: "Ventilated Rooms", desc: "Architecturally designed large windows and optimal cross-air circulation channels in every room." },
      { icon: Tv, title: "Common Lounge", desc: "A modern shared lounge area equipped with a flat-screen TV and comfortable seating to unwind." },
    ],
  },
  {
    title: "Safety, Security & Operations",
    intro: "Comprehensive infrastructure looked after around the clock so you can focus entirely on your day.",
    items: [
      { icon: ShieldCheck, title: "Secure Premises", desc: "Multi-tier security infrastructure with CCTV surveillance recording common areas 24 hours a day." },
      { icon: Zap, title: "Power Backup", desc: "Robust generator and inverter backup ensuring lights, fans, and Wi-Fi remain active during outages." },
      { icon: Sparkles, title: "Daily Housekeeping", desc: "Professional maintenance staff ensuring spotless private rooms and shared corridors daily." },
      { icon: Car, title: "Vehicle Parking", desc: "Dedicated, secure, and well-lit off-street parking space available for bikes and scooters." },
    ],
  },
];

const Amenities = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ADFF2F] bg-slate-900 px-3.5 py-1.5 rounded-full border border-amber-400/40">
            Facilities
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Amenities and Facilities
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Everything you need for a comfortable, secure, and productive stay is fully included, from high-speed fiber internet and hot water to round-the-clock security.
          </p>
        </header>

        <div className="mt-16 space-y-16">
          {groups.map((group) => (
            <div key={group.title} className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-8">
                <h2 className="text-2xl font-bold tracking-tight text-white">{group.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{group.intro}</p>
                <div className="mt-6 hidden lg:flex items-center gap-2 text-xs font-semibold text-[#ADFF2F] bg-amber-400/10 px-3.5 py-2 rounded-lg border border-amber-400/30 w-fit">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#ADFF2F]" /> Fully included in monthly rent
                </div>
              </div>

              <div className="lg:col-span-8">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {group.items.map(({ icon: Icon, title, desc }) => (
                    <li 
                      key={title} 
                      className="flex flex-col justify-between bg-slate-900 p-7 rounded-2xl border border-amber-400/30 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#ADFF2F] group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-[#ADFF2F] border border-amber-400/40 transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                            Standard
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
                          <p className="text-sm leading-relaxed text-slate-300">{desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;