import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();

  (await cookieStore).delete("AUTH_SESSION");
  // (await cookieStore).delete("REMEMBER_ME");

  return NextResponse.json({
    message: "Logout successful",
  });
}