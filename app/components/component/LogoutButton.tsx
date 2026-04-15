"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { useDispatch } from "react-redux";
import { persistor } from "@/app/store/store";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });
    toast.success("Logout successful");

    dispatch({ type: "RESET_APP" });
    persistor.purge();
  };

  return (
    <>
      <button
        className="text-xs p-1 bg-red-500 text-white rounded-sm"
        onClick={logout}
      >
        Logout
      </button>
    </>
  );
}
