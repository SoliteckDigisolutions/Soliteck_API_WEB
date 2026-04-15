import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.delete("AUTH_SESSION");

  return NextResponse.json({
    message: "Logout successful",
  });
}