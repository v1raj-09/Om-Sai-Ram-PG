import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Phone,
  Building2,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";


const perks = [
  "Fast Wi-Fi for work and classes",
  "Home-style mess, three meals a day",
  "24/7 security and power backup",
];


const strengthOf = (pw) => {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) && /[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0 to 3 
};

const strengthLabel = ["Use at least 8 characters", "Weak", "Good", "Strong"];

const inputClass =
  "w-full bg-[#0F172A] border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ADFF2F] focus:ring-1 focus:ring-[#ADFF2F] transition";

const Field = ({ id, label, icon: Icon, hint, children }) => (   
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-200 mb-1.5">   
      {label}   
    </label>     
    <div className="relative">      
      <Icon className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      {children}      
    </div>   
    {hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}   
  </div>   
);   

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Keep the phone field to digits only
    const next = name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setFormData({ ...formData, [name]: next });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic can be wired here
    navigate("/login");
  };

  const strength = strengthOf(formData.password);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white grid grid-cols-1 lg:grid-cols-2">
      {/* Left: welcome panel */}
      <aside className="hidden lg:flex relative overflow-hidden border-r border-slate-800">
        <img
          src="/omsairampg.jpeg"  
          alt=""
          className="absolute inset-0 w-full h-full object-cover"  
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/40" />

        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] rounded-lg self-start"
          >
            {/* <span className="w-11 h-11 rounded-xl bg-[#1E293B] border border-slate-700 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#ADFF2F]" />
            </span>
            <span className="font-bold text-lg">Om Sai Ram PG</span>   */}
          </Link>

          <div className="max-w-md">
            <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
              Your room in Kharadi is a few steps away
            </h2>
            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#ADFF2F] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Right: form */}
      <main className="flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Mobile brand */}
          <Link
            to="/"
            className="lg:hidden inline-flex items-center gap-3 mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] rounded-lg"
          >
            <span className="w-10 h-10 rounded-xl bg-[#1E293B] border border-slate-700 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#ADFF2F]" />
            </span>
            <span className="font-bold">Om Sai Ram PG</span>
          </Link>

          <h1 className="text-3xl font-extrabold tracking-tight">Create your account</h1>
          <p className="mt-2 text-sm text-slate-400">
            Register as a resident. It takes less than a minute.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <Field id="name" label="Full name" icon={User}>
              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass}
              />
            </Field>

            <Field id="email" label="Email address" icon={Mail}>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={inputClass}
              />
            </Field>

            <Field
              id="phone"
              label="Phone number"
              icon={Phone}
              hint="10-digit mobile number"
            >
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                inputMode="numeric"
                autoComplete="tel-national"
                pattern="[0-9]{10}"
                title="Enter a 10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className={inputClass}
              />
            </Field>

            <Field id="password" label="Password" icon={Lock}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className={`${inputClass} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F]"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </Field>

            {/* Strength meter */}
            {formData.password && (
              <div aria-live="polite" className="-mt-2">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        strength >= n ? "bg-[#ADFF2F]" : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-slate-400">{strengthLabel[strength]}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ADFF2F] text-[#0F172A] font-bold text-sm hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Create account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-8 text-sm text-slate-400 text-center">
            Already registered?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#ADFF2F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] rounded"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;