"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/Logo.svg";
import { MdAddTask, MdOutlinePayments } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPhone,
  setPassword,
  loginSuccess,
} from "@/app/store/slices/authSlice";
import { setResponse } from "@/app/store/slices/respSlice";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import VideoAutoPlay from "../../components/common-components/VideoAutoPlay";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const phone = useSelector((state: any) => state.auth.phone);
  const password = useSelector((state: any) => state.auth.password);
  const router = useRouter();

  // Clear local storage when component mounts to ensure fresh state
  useEffect(() => {
    localStorage.removeItem("AUTHACCESS");
    localStorage.removeItem("persist:root")
  }, []);

  const loginUser = async () => {
    try {
      setIsLoading(true);
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
        // Store auth data first
        localStorage.setItem("AUTHACCESS", JSON.stringify(data.responseData));

        // Update redux login state
        dispatch(setResponse(data.responseData));
        dispatch(loginSuccess());

        toast.success("Login successful");

        // Use replace instead of push for post-logout navigation
        // Add a small delay to ensure state is fully updated
        setTimeout(() => {
          router.replace("/docs/getting-started/introduction");
        }, 100);
      } else {
        toast.error(data?.responseMessage || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const data = useSelector((state: any) => state.responseData.respDatat);

  const respData = data ? JSON.parse(data) : [];

  return (
    <div
      className=" min-h-screen bg-white flex items-center justify-center"
    >
      <div className="w-full  border m-4 lg:m-0 md:m-0 max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT SECTION */}
        <div
          className="hidden lg:flex flex-col justify-between relative p-4"
        >
          {/* decorative circles */}
          {/* <div className="absolute w-52 h-52 z-100 bg-white rounded-full -top-16 -right-16"></div> */}
          {/* <div className="absolute w-4 h-50 bg-[#0f2654] rounded-xl -top-3 -right-0"></div> */}
          <div className="absolute w-50 h-50 bg-[#0f2654] rounded-full -left-24 -top-24"></div>


          <div className="relative z-10   rounded-lg ">
            {/* logo */}
            <div className="flex items-center gap-0 bg-white w-fit p-1 px-2 rounded-sm mb-3">
              <div>
                <Link
                  href="https://soliteck.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image alt="logo" className="w-28" src={logo} />
                </Link>
              </div>
              <span className="text-lg w-fit text-black font-medium">.com</span>
            </div>
            <VideoAutoPlay />

            {/* headline */}
            <div className="mb-4 mt-4">
              <h2 className="text-3xl font-semibold leading-snug">
                Digital transformation <br /> made simple.
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                Secure payouts, seamless integrations and powerful APIs — all in
                one place.
              </p>
            </div>

            <div className=" flex flex-wrap gap-4">
              {/* Card 1 */}
              <div className="flex fexl-col gap-3 bg-white/20 backdrop-blur-md p-2   border border-white/20 rounded-lg  hover:bg-white/30 transition">
                <div className="w-8 h-8 bg-[#0f2654] rounded flex items-center justify-center text-white">
                  <MdOutlinePayments size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium  text-gray-900">
                    Instant payouts
                  </p>
                  <p className="text-xs text-gray-900">Real-time settlements</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-3 bg-white/20 backdrop-blur-md border p-2  border-white/20 rounded-lg  hover:bg-white/30 transition">
                <div className="w-8 h-8 bg-[#0f2654] rounded flex items-center justify-center text-white">
                  <MdAddTask size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium  text-gray-900">
                    Smart integrations
                  </p>
                  <p className="text-xs  text-gray-900">Connect any platform</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-3 bg-white/20 backdrop-blur-md border p-2 border-white/20 rounded-lg  hover:bg-white/30 transition">
                <div className="w-8 h-8 bg-[#0f2654] rounded flex items-center justify-center text-white">
                  <TbApi size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium  text-gray-900">
                    Powerful APIs
                  </p>
                  <p className="text-xs  text-gray-900">Build anything fast</p>
                </div>
              </div>
            </div>
          </div>

          {/* bottom tags */}
          <div className="flex flex-wrap gap-2 mt-2 relative z-10">
            <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              99.9% uptime
            </span>
            {/* <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              Add Data
            </span>
            <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              Add Data
            </span> */}
          </div>
        </div>

        {/* RIGHT LOGIN FORM */}
        <div
          className="p-10 flex  bg-blue-200/20
animate-[twinkle_4s_infinite_alternate_ease-in-out] items-center justify-center"
        >
          <div className="w-full   max-w-sm">
            <div className="md:hidden lg:hidden mb-6">
              <Link
                href="https://soliteck.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image alt="logo" className="w-28" src={logo} />
              </Link>
            </div>
            <div className="mb-8">
              <h2 className="text-4xl font-semibold text-gray-800">
                Welcome back
              </h2>
              <p className="text-lg text-gray-500">
                Sign in to your{" "}
                <span className="font-semibold text-[#1a3d80] bg-white px-1 rounded">
                  'Soliteck API DOCS'
                </span>{" "}
                account
              </p>
            </div>

            {/* email */}
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-600">
                Phone Number
              </label>
              <input
                onChange={(e) => dispatch(setPhone(e.target.value))}
                type="phone"
                placeholder="Enter the Phone number"
                className="mt-1 w-full border  border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* password */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-600">
                <label>Password</label>
              </div>

              <input
                onChange={(e) => dispatch(setPassword(e.target.value))}
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-5">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-blue-500 cursor-pointer"
              />
              <label htmlFor="rememberMe" className="cursor-pointer select-none">
                Remember me
              </label>
            </div>

            {/* login */}
            <button
              onClick={loginUser}
              disabled={isLoading}
              className="w-full bg-[#0f2654] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#163270] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            {/* divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="px-3 text-xs text-gray-400">
                Soliteck Digisolution Pvt Ltd
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* social login
              <div className="grid grid-cols-2 gap-3">

                <button className="flex items-center justify-center gap-2 border rounded-lg py-2 text-sm hover:bg-gray-50">
                  <FcGoogle size={18} />
                  Google
                </button>

                <button className="flex items-center justify-center gap-2 border rounded-lg py-2 text-sm hover:bg-gray-50">
                  <FaGithub size={18} />
                  GitHub
                </button>

              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
