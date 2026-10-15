import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Building2,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";

/*
  Login layout: split screen, matching Register.jsx
  - Left (desktop only): PG photo with a short welcome.
  - Right: role switch (Resident / Admin), email and password with show/hide.
  Palette matches the rest of the site: #0F172A, #1E293B, #ADFF2F + slate.
*/

const perks = [
  "Check your room and payment details",
  "Raise requests to the PG manager",
  "Stay updated on notices",
];

const roles = [
  { key: "user", label: "Resident / Student" },
  { key: "admin", label: "Admin / Owner" },
];

const inputClass =
  "w-full bg-[#0F172A] border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ADFF2F] focus:ring-1 focus:ring-[#ADFF2F] transition";

const Field = ({ id, label, icon: Icon, action, children }) => (
  <div>
    <div className="flex items-center justify-between mb-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      {action}
    </div>
    <div className="relative">
      <Icon className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      {children}
    </div>
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user", // 'user' (student/resident) or 'admin' (owner)
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 🌟 इथे localStorage मध्ये token आणि role सेव्ह करणे गरजेचे आहे
    localStorage.setItem("token", "dummy-auth-token-12345");
    localStorage.setItem("role", formData.role); // 'admin' किंवा 'user' सेव्ह होईल

    // Navigation role नुसार होईल
    if (formData.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/tenant/dashboard");
    }
  };

  const isAdmin = formData.role === "admin";

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
            <span className="w-11 h-11 rounded-xl bg-[#1E293B] border border-slate-700 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#ADFF2F]" />
            </span>
            <span className="font-bold text-lg">Om Sai Ram PG</span>
          </Link>

          <div className="max-w-md">
            <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
              Welcome back to your PG portal
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

          <h1 className="text-3xl font-extrabold tracking-tight">Sign in</h1>
          <p className="mt-2 text-sm text-slate-400">
            {isAdmin
              ? "Sign in to manage the PG."
              : "Sign in to your resident account."}
          </p>

          {/* Role switch */}
          <div
            role="group"
            aria-label="Sign in as"
            className="mt-8 flex bg-[#1E293B] border border-slate-800 rounded-xl p-1"
          >
            {roles.map((r) => {
              const on = formData.role === r.key;
              return (
                <button
                  key={r.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFormData({ ...formData, role: r.key })}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] ${
                    on
                      ? "bg-[#ADFF2F] text-[#0F172A]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
              id="password"
              label="Password"
              icon={Lock}
              action={
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-[#ADFF2F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] rounded"
                >
                  Forgot password?
                </Link>
              }
            >
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
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

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ADFF2F] text-[#0F172A] font-bold text-sm hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Sign in as {isAdmin ? "admin" : "resident"} <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-8 text-sm text-slate-400 text-center">
            New here?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#ADFF2F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] rounded"
            >
              Register as a resident
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;