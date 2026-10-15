import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { src: "/omsairampg.jpeg", title: "Modern Furnished Room" },
    { src: "/pgroom1.webp", title: "Twin Sharing Accommodation" },
    { src: "/pgroom2.webp", title: "Single Occupancy Room" },
    { src: "/pgroom11.webp", title: "Spacious Interior Setup" },
    { src: "/pgroom22.webp", title: "Clean & Bright Bed Layout" },
    { src: "/pggallery.webp", title: "Building Exterior & Surroundings" },
    { src: "/pggallery3.webp", title: "Common Lounge Area" },
    { src: "/pggallery5.webp", title: "Dining & Mess Hall" },
    { src: "/pggallery6.webp", title: "Corridors & Facilities" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* <span className="text-[#ADFF2F] font-semibold text-sm uppercase tracking-wider bg-slate-900 px-4 py-1.5 rounded-full border border-amber-400/40">
            Visual Tour
          </span> */}
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">PG Photo Gallery</h1>
          <p className="text-slate-300 text-base sm:text-lg">Take a glimpse inside our immaculate rooms, common areas, and modern facilities at Om Sai Ram PG.</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-slate-900 border border-amber-400/30 hover:border-[#ADFF2F] shadow-xl cursor-pointer transition-all duration-300"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#ADFF2F] text-xs font-semibold uppercase tracking-wider mb-1">Om Sai Ram PG</span>
                <h3 className="text-white font-bold text-lg flex items-center justify-between">
                  {item.title}
                  <ZoomIn className="w-5 h-5 text-[#ADFF2F]" />
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Preview */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-amber-400/50 rounded-3xl overflow-hidden shadow-2xl animate-scale-up">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-slate-400 hover:text-white p-2 rounded-full bg-slate-950 border border-amber-400/40 shadow-lg"
            >
              <X className="w-6 h-6 text-[#ADFF2F]" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-full max-h-[75vh] object-contain" 
              />
            </div>
            <div className="p-6 bg-slate-900 border-t border-amber-400/30 flex justify-between items-center">
              <div>
                <span className="text-[#ADFF2F] text-xs font-semibold uppercase tracking-wider">Om Sai Ram PG Kharadi</span>
                <h3 className="text-white text-xl font-bold mt-0.5">{selectedImage.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="bg-[#ADFF2F] hover:bg-[#98fb98] text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;