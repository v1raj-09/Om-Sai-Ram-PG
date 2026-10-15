import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Building2, ArrowRight, ArrowLeft, MailCheck } from "lucide-react";

/*
  Forgot password, "access pass" style to match Login.
  Step 1: enter email. Step 2: confirmation that a reset link was sent.
  Palette: #0F172A, #1E293B, #ADFF2F + slate.
*/

const inputClass =
  "w-full bg-[#0F172A] border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ADFF2F] focus:ring-1 focus:ring-[#ADFF2F] transition";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call your API here to email a reset link, then show the confirmation
    setSent(true);
  };

  return (
    <div
      className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: "radial-gradient(rgba(148,163,184,0.12) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="w-full max-w-sm">
        <div className="relative bg-[#1E293B] border border-slate-700/80 rounded-3xl shadow-2xl">
          <div className="flex justify-center pt-4">
            <span className="block w-16 h-2 rounded-full bg-[#0F172A] border border-slate-700" />
          </div>

          <div className="px-7 pt-6 pb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] rounded-lg"
            >
              <span className="w-11 h-11 rounded-xl bg-[#0F172A] border border-slate-700 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#ADFF2F]" />
              </span>
              <span>
                <span className="block font-bold leading-tight">Om Sai Ram PG</span>
                <span className="block text-xs text-slate-400">Kharadi, Pune</span>
              </span>
            </Link>

            <h1 className="mt-6 text-2xl font-extrabold tracking-tight">
              {sent ? "Check your inbox" : "Forgot password?"}
            </h1>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {sent
                ? "If an account exists for this email, we have sent a link to reset your password."
                : "Enter your email and we will send you a link to reset your password."}
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-[#0F172A]" />
            <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#0F172A]" />
            <div className="mx-6 border-t-2 border-dashed border-slate-700" />
          </div>

          {sent ? (
            <div className="px-7 pt-8 pb-7 space-y-5" aria-live="polite">
              <div className="flex items-center gap-3 bg-[#0F172A] border border-slate-800 rounded-xl p-4">
                <MailCheck className="w-5 h-5 text-[#ADFF2F] shrink-0" />
                <p className="text-sm text-slate-200 break-all">{email}</p>
              </div>
              <p className="text-xs text-slate-500">
                Not there? Check your spam folder, or try a different email.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="w-full py-3 rounded-xl border border-slate-600 text-sm font-semibold hover:border-[#ADFF2F] hover:text-[#ADFF2F] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F]"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-7 pt-8 pb-7 space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ADFF2F] text-[#0F172A] font-bold text-sm hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Send reset link <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] rounded"
          >
            <ArrowLeft className="w-4 h-4" /> Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;