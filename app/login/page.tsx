"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/Logo.svg";
import { MdAddTask, MdOutlinePayments, MdPhone, MdLock, MdArrowForward, MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  setPhone,
  setPassword,
  loginSuccess,
} from "@/app/store/slices/authSlice";
import { setResponse } from "@/app/store/slices/respSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import VideoAutoPlay from "../../components/common-components/VideoAutoPlay";
import ThemeToggle from "@/components/common-components/ThemeToggle";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const phone = useSelector((state: any) => state.auth.phone);
  const password = useSelector((state: any) => state.auth.password);
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("AUTHACCESS");
    localStorage.removeItem("persist:root");

    const savedPhone = localStorage.getItem("REMEMBER_ME_PHONE");
    const wasRemembered = localStorage.getItem("REMEMBER_ME_ENABLED") === "true";

    if (savedPhone && wasRemembered) {
      dispatch(setPhone(savedPhone));
      setRememberMe(true);
    }
  }, [dispatch]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setError(null);
    dispatch(setPhone(value));
    if (rememberMe) {
      localStorage.setItem("REMEMBER_ME_PHONE", value);
    }
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);

    if (isChecked) {
      localStorage.setItem("REMEMBER_ME_PHONE", phone);
      localStorage.setItem("REMEMBER_ME_ENABLED", "true");
    } else {
      localStorage.removeItem("REMEMBER_ME_PHONE");
      localStorage.removeItem("REMEMBER_ME_ENABLED");
    }
  };

  const loginUser = async () => {
    if (!phone || !password) {
      setError("Credentials are required to proceed");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MobileNumber: phone,
          Password: password,
          rememberMe: rememberMe,
        }),
      });

      const data = await res.json();

      if (data.responseCode === 200) {
        localStorage.setItem("AUTHACCESS", JSON.stringify(data.responseData));
        dispatch(setResponse(data.responseData));
        dispatch(loginSuccess());
        setIsSuccess(true);
        toast.success("Authentication successful");
        setTimeout(() => {
          router.replace("/docs/getting-started/introduction");
        }, 1200);
      } else {
        setError(data?.responseMessage || "The credentials provided are incorrect");
      }
    } catch (error) {
      setError("An unexpected network error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] flex items-center justify-center p-4 sm:p-6 transition-colors duration-500 overflow-hidden relative font-sans">

      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#1e293b 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

      {/* Theme Toggle in top-right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-6 right-6 z-50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-1 rounded-2xl border border-white/20 dark:border-slate-700/50"
      >
        <ThemeToggle />
      </motion.div>

      {/* Dynamic Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20 animate-pulse" />
        <div className="absolute top-[60%] -right-[5%] w-[35%] h-[35%] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-600/20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-4xl min-h-[500px] md:h-[540px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:grid md:grid-cols-2 relative z-10 border border-white/40 dark:border-slate-800/50"
      >
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[100] bg-blue-600 dark:bg-blue-700 flex flex-col items-center justify-center text-white"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 12 }}
              >
                <MdCheckCircleOutline size={64} className="mb-3" />
              </motion.div>
              <h2 className="text-xl font-bold mb-1">Authenticated</h2>
              <p className="text-sm text-blue-100 opacity-80">Redirecting to Dashboard...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LEFT SECTION: BRANDING & FEATURES */}
        <div className="relative overflow-hidden bg-[#0f172a] p-6 lg:p-8 flex flex-col text-white border-r border-white/5 overflow-y-auto hide-scrollbar group">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-indigo-600/30 opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

          <div className="relative z-10 flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="bg-white p-1.5 rounded-xl shadow-[0_8px_16px_rgba(255,255,255,0.1)]">
                <Link href="https://soliteck.com/" target="_blank" rel="noopener noreferrer">
                  <Image alt="logo" className="w-14  h-auto" src={logo} priority />
                </Link>
              </div>
              <span className="text-base font-bold tracking-tight text-slate-200">.com</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-4 bg-slate-900/50 backdrop-blur-md transform group-hover:scale-[1.01] transition-transform duration-500 w-full">
                <VideoAutoPlay />
              </div>

              <h2 className="text-lg lg:text-xl font-bold leading-tight mb-2 tracking-tight">
                Empowering the Future of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Digital Finance.</span>
              </h2>
              <p className="text-slate-400 text-[11px] leading-relaxed max-w-sm font-medium">
                Unified payment ecosystems and developer-centric APIs designed for high-growth enterprises.
              </p>
            </motion.div>

            <div className="space-y-2 mb-6 w-full">
              {[
                
                { icon: <MdOutlinePayments size={14} />, title: "Developer Friendly", desc: "Extensive API Documentation", delay: 0.5 },
              
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay }}
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-sm group/item w-full"
                >
                  <div className="w-7 h-7 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover/item:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold text-slate-100">{item.title}</h3>
                    <p className="text-[9px] font-medium text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-auto pt-3 border-t border-white/5 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] font-bold tracking-widest uppercase text-slate-400">
                Network Status: Optimal
              </span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SECTION: LOGIN FORM */}
        <div className="p-6 lg:p-10 flex items-center justify-center bg-transparent overflow-y-auto hide-scrollbar">
          <div className="w-full max-w-[300px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-center md:text-left"
            >
              <div className="md:hidden flex justify-center mb-6">
                <div className="bg-slate-900 p-2 rounded-2xl">
                  <Image alt="logo" className="w-20" src={logo} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                Secure Login
              </h2>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Welcome back to Soliteck Developer Portal
              </p>
            </motion.div>

            <div className="space-y-4">
              {/* Error Callout */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 p-2.5 rounded-xl flex items-center gap-2.5 overflow-hidden"
                  >
                    <MdErrorOutline className="text-red-600 dark:text-red-400 flex-shrink-0" size={16} />
                    <p className="text-[10px] font-bold text-red-700 dark:text-red-300 leading-tight">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Phone Field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300 ml-1 uppercase tracking-wider opacity-70">
                  Phone Identity
                </label>
                <div className="relative group">
                  <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-all duration-300 ${isFocused === 'phone' ? 'text-blue-500 scale-110' : 'text-slate-400'}`}>
                    <MdPhone size={16} />
                  </div>
                  <input
                    onFocus={() => setIsFocused('phone')}
                    onBlur={() => setIsFocused(null)}
                    onChange={handlePhoneChange}
                    value={phone}
                    type="tel"
                    placeholder="e.g. +91 99999 99999"
                    className="w-full pl-10 pr-4 py-3 bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 rounded-xl text-xs font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white dark:focus:bg-slate-800 transition-all dark:text-white placeholder:text-slate-400/70"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider opacity-70">
                    Security Key
                  </label>
                  <Link href="#" className="text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Reset?
                  </Link>
                </div>
                <div className="relative group">
                  <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-all duration-300 ${isFocused === 'pass' ? 'text-blue-500 scale-110' : 'text-slate-400'}`}>
                    <MdLock size={16} />
                  </div>
                  <input
                    onFocus={() => setIsFocused('pass')}
                    onBlur={() => setIsFocused(null)}
                    onChange={(e) => {
                      setError(null);
                      dispatch(setPassword(e.target.value));
                    }}
                    value={password}
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-3 bg-slate-100/50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 rounded-xl text-xs font-medium focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white dark:focus:bg-slate-800 transition-all dark:text-white placeholder:text-slate-400/70"
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2.5 px-1">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-300 dark:border-slate-600 bg-transparent checked:border-blue-500 checked:bg-blue-500 transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                  />
                  <svg className="pointer-events-none absolute left-[2px] top-[2px] h-3 w-3 fill-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <label htmlFor="rememberMe" className="text-[10px] font-bold text-slate-500 dark:text-slate-400 cursor-pointer select-none">
                  Remember session
                </label>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.01, translateY: -1 }}
                whileTap={{ scale: 0.99, translateY: 0 }}
                onClick={loginUser}
                disabled={isLoading || isSuccess}
                className="group relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-xl text-xs font-bold shadow-[0_8px_16px_-4px_rgba(59,130,246,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden border border-white/10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                  {isLoading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      Sign In to Account
                      <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              </motion.button>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center">
              <p className="text-[9px] font-bold tracking-[0.1em] text-slate-400 dark:text-slate-500 uppercase">
                &copy; Soliteck Digisolution Pvt Ltd
              </p>
              <div className="flex justify-center gap-4 mt-2 opacity-40 hover:opacity-100 transition-opacity">
                <Link href="#" className="text-[9px] font-bold text-slate-500 hover:text-blue-500">TERMS</Link>
                <Link href="#" className="text-[9px] font-bold text-slate-500 hover:text-blue-500">PRIVACY</Link>
                <Link href="#" className="text-[9px] font-bold text-slate-500 hover:text-blue-500">SUPPORT</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
