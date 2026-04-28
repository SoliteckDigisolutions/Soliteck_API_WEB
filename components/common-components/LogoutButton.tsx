"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/app/store/slices/authSlice";
import { persistor } from "@/app/store/store";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Logout API failed");
      }

      // Clear localStorage first
      localStorage.removeItem("AUTHACCESS");

      // Clear redux state
      dispatch(logoutUser());

      // Clear persisted redux storage
      await persistor.purge();

      toast.success("Logout successful");

      // Redirect user with a small delay to ensure state is cleared
      setTimeout(() => {
        router.replace("/login");
      }, 100);
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return (
    <button
      onClick={logout}
      className="text-xs px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
    >
      Logout
    </button>
  );
}
