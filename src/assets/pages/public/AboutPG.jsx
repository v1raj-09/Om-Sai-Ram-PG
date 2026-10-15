import React from "react";
import { ShieldCheck, Users, HeartHandshake, Award } from "lucide-react";

const AboutPG = () => {
  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* <span className="text-[#ADFF2F] font-semibold text-xs uppercase tracking-wider bg-slate-900 px-4 py-1.5 rounded-full border border-[#ADFF2F]/40">
            About Us
          </span> */}
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Welcome to <span className="text-[#c78f00]">Om Sai Ram PG</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded with a vision to provide a secure, clean, and professional environment, Om Sai Ram PG is the ultimate destination for students and corporate professionals in Pune.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-xl border border-[#ADFF2F]/40">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-l-4 border-[#ADFF2F] pl-3">Our Vision & Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              Finding a premium and dependable residence away from home shouldn't be a challenge. Om Sai Ram PG delivers transparent management, high standards of hygiene, and reliable security tailored to modern lifestyles.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Conveniently located near Hinjewadi IT Park, we provide a peaceful, structured ecosystem so you can focus entirely on your career and academic pursuits.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-950 p-6 rounded-2xl text-center border border-[#ADFF2F]/30">
              <h3 className="text-3xl font-extrabold text-[#ADFF2F] mb-1">100+</h3>
              <p className="text-slate-400 text-sm">Satisfied Residents</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl text-center border border-[#ADFF2F]/30">
              <h3 className="text-3xl font-extrabold text-[#ADFF2F] mb-1">24/7</h3>
              <p className="text-slate-400 text-sm">Security & Support</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl text-center border border-[#ADFF2F]/30">
              <h3 className="text-3xl font-extrabold text-[#ADFF2F] mb-1">3+</h3>
              <p className="text-slate-400 text-sm">Sharing Configurations</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl text-center border border-[#ADFF2F]/30">
              <h3 className="text-3xl font-extrabold text-[#ADFF2F] mb-1">100%</h3>
              <p className="text-slate-400 text-sm">Hygienic Catering</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-[#ADFF2F]/40 space-y-4">
            <div className="w-12 h-12 bg-slate-950 border border-[#ADFF2F]/40 rounded-xl flex items-center justify-center text-[#ADFF2F]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Uncompromised Safety</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Gated premises, continuous CCTV monitoring, and digital visitor logs ensure complete peace of mind.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-[#ADFF2F]/40 space-y-4">
            <div className="w-12 h-12 bg-slate-950 border border-[#ADFF2F]/40 rounded-xl flex items-center justify-center text-[#ADFF2F]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Professional Community</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Reside alongside ambitious IT engineers and students in a quiet, disciplined, and supportive atmosphere.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-[#ADFF2F]/40 space-y-4">
            <div className="w-12 h-12 bg-slate-950 border border-[#ADFF2F]/40 rounded-xl flex items-center justify-center text-[#ADFF2F]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Superior Standards</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Scheduled deep housekeeping, responsive maintenance crew, and purified drinking water facilities.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPG;