"use server";

import { cookies } from "next/headers";

export async function setCookieAction(responseData: any) {
  const cookieStore = await cookies(); // In newer Next.js versions, this is async
  const maxAge = 60 * 60 * 24 * 1; // 1 day

  try {
    cookieStore.set("AUTH_SESSION", JSON.stringify(responseData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to set cookie", error);
    return { success: false };
  }
}
