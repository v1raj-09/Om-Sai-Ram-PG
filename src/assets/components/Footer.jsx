import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-10 pb-5 border-t border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Section - Compact & Professional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand Info & Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xl font-bold tracking-tight">
                🏠 Om Sai Ram <span className="text-amber-400">PG</span>
              </span>
            </div>
            <p className="text-gray-300 text-xs mb-4">
              Your comfortable home away from home in Pune.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-amber-400 flex-shrink-0 text-xs" />
                <span>Hinjewadi Phase 1, Pune, Maharashtra</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-amber-400 flex-shrink-0 text-xs" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-amber-400 flex-shrink-0 text-xs" />
                <span>omsairampg@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-amber-400 mb-3 tracking-wide uppercase">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-y-1.5 text-xs text-gray-300">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#amenities" className="hover:text-amber-400 transition-colors">Amenities</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#rooms" className="hover:text-amber-400 transition-colors">Rooms</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Location</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-amber-400 mb-3 tracking-wide uppercase">Services</h3>
            <ul className="grid grid-cols-2 gap-y-1.5 text-xs text-gray-300">
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Furnished Rooms</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Security</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Food & Mess</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Parking</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">High-Speed WiFi</span></li>
              <li><span className="hover:text-amber-400 transition-colors cursor-pointer">Housekeeping</span></li>
            </ul>
          </div>

          {/* Column 4: Location & Socials */}
          <div>
            <h3 className="text-sm font-semibold text-amber-400 mb-3 tracking-wide uppercase">Location & Social</h3>
            <p className="text-xs text-gray-300 mb-3">
              Pune, Maharashtra, India
            </p>
            <div className="flex space-x-2.5">
              <a href="#instagram" aria-label="Instagram" className="w-7 h-7 rounded-full bg-slate-900 border border-amber-400/40 flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-all">
                <FaInstagram size={12} />
              </a>
              <a href="#facebook" aria-label="Facebook" className="w-7 h-7 rounded-full bg-slate-900 border border-amber-400/40 flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-all">
                <FaFacebookF size={12} />
              </a>
              <a href="#whatsapp" aria-label="WhatsApp" className="w-7 h-7 rounded-full bg-slate-900 border border-amber-400/40 flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-all">
                <FaWhatsapp size={12} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-amber-400/40 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400">
          <p>© 2026 Om Sai Ram PG. All rights reserved.</p>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;