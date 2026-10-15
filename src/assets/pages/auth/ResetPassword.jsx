import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Building2, ArrowRight, ArrowLeft, Eye, EyeOff } from "lucide-react";

/*
  Reset password, "access pass" style to match Login.
  New password with strength meter, confirm field with match check.
  Palette: #0F172A, #1E293B, #ADFF2F + slate.
*/

const strengthOf = (pw) => {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) && /[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0 to 3
};

const strengthLabel = ["Use at least 8 characters", "Weak", "Good", "Strong"];

const inputClass =
  "w-full bg-[#0F172A] border border-slate-700 rounded-xl py-3 pl-11 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ADFF2F] focus:ring-1 focus:ring-[#ADFF2F] transition";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);

  const strength = strengthOf(password);
  const mismatch = confirm.length > 0 && password !== confirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) return;
    // TODO: send the new password (and the reset token from the link) to your API
    navigate("/login");
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

            <h1 className="mt-6 text-2xl font-extrabold tracking-tight">Set a new password</h1>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Choose a password you have not used before.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-[#0F172A]" />
            <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#0F172A]" />
            <div className="mx-6 border-t-2 border-dashed border-slate-700" />
          </div>

          <form onSubmit={handleSubmit} className="px-7 pt-8 pb-7 space-y-5">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-200 mb-1.5">
                New password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="password"
                  type={show ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  aria-label={show ? "Hide passwords" : "Show passwords"}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F]"
                >
                  {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {password && (
                <div aria-live="polite" className="mt-3">
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
            </div>

            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-slate-200 mb-1.5">
                Confirm password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="confirm"
                  type={show ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Repeat the password"
                  aria-invalid={mismatch}
                  aria-describedby={mismatch ? "confirm-error" : undefined}
                  className={`${inputClass} ${mismatch ? "border-red-400 focus:border-red-400 focus:ring-red-400" : ""}`}
                />
              </div>
              {mismatch && (
                <p id="confirm-error" className="mt-1.5 text-xs text-red-400">  
                  The passwords do not match.  
                </p>
              )}       
            </div>    

            <button
              type="submit"
              disabled={mismatch}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ADFF2F] text-[#0F172A] font-bold text-sm hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Update password <ArrowRight className="w-4 h-4" />
            </button>
          </form>
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

export default ResetPassword;