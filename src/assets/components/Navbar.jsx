import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Calendar, UserPlus, Building2, Sparkles, User, LogOut, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Actual login status ani user role localStorage madhun check karne
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(""); // 'admin' kiwa 'tenant'

  useEffect(() => {
    // Tumhi login hotana token/userRole localStorage madhe store karat asal, to ithe check hoil
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const role = localStorage.getItem("role") || sessionStorage.getItem("userRole") || "admin"; // Tumchya logic nusar role set kara
    
    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Amenities", path: "/amenities" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
    { name: "Rules", path: "/rules" },
    { name: "Food", path: "/food" },
    { name: "Location", path: "/location" },
    
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Dashboard path role nusar tharel
  const dashboardPath = userRole === "admin" ? "/admin/dashboard" : "/tenant/dashboard";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-amber-500/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-slate-900 flex items-center justify-center text-[#ADFF2F] shadow-md shadow-[#ADFF2F]/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 font-bold border border-amber-400/40">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none group-hover:text-emerald-600 transition-colors">Om Sai Ram</span>
              <span className="text-[11px] font-bold text-[#d08e00] uppercase tracking-widest mt-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 animate-pulse text-amber-500" /> PG & Living
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-2xl border border-amber-500/25 shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-slate-950 bg-[#ADFF2F] shadow-sm border border-amber-400/50 scale-[1.02]"
                      : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons (Book a Visit & Register OR Profile/Dashboard Icon) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-amber-400/40 text-slate-700 hover:border-amber-500 hover:text-slate-950 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm bg-white"
            >
              <Calendar className="w-4 h-4 text-[#ADFF2F]" /> Book a Visit
            </Link>

            {isLoggedIn ? (
              /* Profile / Dashboard Button if logged in */
              <div className="flex items-center gap-2">
                <Link
                  to={dashboardPath}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold tracking-wide transition-all duration-300 shadow-md border border-amber-400/30"
                >
                  <div className="w-6 h-6 rounded-full bg-[#ADFF2F] text-slate-950 flex items-center justify-center font-extrabold text-[11px]">
                    {userRole === "admin" ? "A" : "U"}
                  </div>
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Register Button if not logged in */
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ADFF2F] hover:bg-[#98fb98] text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#ADFF2F]/20 hover:scale-[1.02] active:scale-95 border border-amber-400/30"
              >
                <UserPlus className="w-4 h-4" /> Register
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            {isLoggedIn ? (
              <Link
                to={dashboardPath}
                className="md:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 text-white text-[11px] font-bold tracking-wide border border-amber-400/30"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-[#ADFF2F]" /> Dashboard
              </Link>
            ) : (
              <Link
                to="/register"
                className="md:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#ADFF2F] text-slate-950 text-[11px] font-bold uppercase tracking-wider shadow-md shadow-[#ADFF2F]/20 border border-amber-400/30"
              >
                <UserPlus className="w-3.5 h-3.5" /> Register
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none border border-amber-400/40 shadow-sm bg-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-2xl border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "text-slate-950 bg-[#ADFF2F] border border-amber-400/50 shadow-sm"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            {isLoggedIn ? (
              <>
                <Link
                  to={dashboardPath}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <LayoutDashboard className="w-4 h-4 text-[#ADFF2F]" /> Go to Dashboard
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider transition-all border border-rose-200"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ADFF2F] text-slate-950 text-xs font-extrabold uppercase tracking-wider hover:bg-[#98fb98] transition-all shadow-md shadow-[#ADFF2F]/20 border border-amber-400/30"
              >
                <UserPlus className="w-4 h-4" /> Register
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;