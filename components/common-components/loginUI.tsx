"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/Logo.svg";
import { MdAddTask, MdOutlinePayments } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { useState } from "react";
import axios from "axios";
export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "https://mzwvxb2w-5185.inc1.devtunnels.ms/UAT/APIUserLogin",
        {
          MobileNumber: "8104488537",
          Password: "09122024",
        },
        {
          headers: {
            " X-Soliteck2024API-KEY": "Soliteck_2024",
          },
        },
      );

      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen  bg-[radial-gradient(rgba(12,12,12,0.17)_2px,transparent_0)] 
bg-[size:30px_30px] 
bg-[-5px_-5px]  flex items-center justify-center"
    >
      <div className="w-full border  max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT SECTION */}
        <div
          className="hidden   lg:flex flex-col justify-between relative p-4
  bg-[linear-gradient(to_bottom_right,#ffffff,#e5e7eb),radial-gradient(rgba(12,12,12,0.17)_2px,transparent_0)]
  bg-[size:100%_100%,30px_30px]
  bg-[position:0_0,-5px_-5px]"
        >
          {/* decorative circles */}
          {/* <div className="absolute w-52 h-52 z-100 bg-white rounded-full -top-16 -right-16"></div> */}
          <div className="absolute w-40 h-40 bg-blue-400/20 rounded-full -bottom-10 -left-10"></div>

          <div className="relative z-10  p-4 rounded-lg ">
            {/* logo */}
            <div className="flex items-center gap-0 bg-white w-fit p-1 px-2 rounded-xl mb-10">
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

            {/* headline */}
            <div className="mb-10">
              <h2 className="text-3xl font-semibold leading-snug">
                Digital transformation <br /> made simple.
              </h2>

              <p className="text-sm text-gray-600 mt-4">
                Secure payouts, seamless integrations and powerful APIs — all in
                one place.
              </p>
            </div>

            <div className="space-y-4">
              {/* Card 1 */}
              <div className="flex gap-3 bg-white/20 backdrop-blur-md  border border-white/20 rounded-lg p-3 hover:bg-white/30 transition">
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
              <div className="flex gap-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg p-3 hover:bg-white/30 transition">
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
              <div className="flex gap-3 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg p-3 hover:bg-white/30 transition">
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
          <div className="flex flex-wrap gap-2 mt-10 relative z-10">
            <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              99.9% uptime
            </span>
            <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              Add Data
            </span>
            <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              Add Data
            </span>
          </div>
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="p-10  flex items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                Welcome back
              </h2>
              <p className="text-sm text-gray-500">
                Sign in to your{" "}
                <span className="font-semibold text-blue-900">
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
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                placeholder="Enter the Phone number"
                className="mt-1 w-full border m-4 lg:m-0 md:m-0 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* password */}
            <div className="mb-3">
              {/* <div className="flex justify-between text-xs text-gray-600">
                  <label>Password</label>
                  <button className="text-blue-600 hover:underline">
                    Forgot?
                  </button>
                </div> */}

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* remember */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-5">
              <input type="checkbox" />
              Remember me
            </div>

            {/* login */}
            <button
              onClick={loginUser}
              className="w-full bg-[#1a3d80] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#163270] transition"
            >
              Login in
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
