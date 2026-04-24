import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await axios.post(
      "https://rvlj2d19-5185.inc1.devtunnels.ms/UAT/APIUserLogin",
      body,
      {
        headers: {
          "X-Soliteck2024API-KEY": "Soliteck_2024",
        },
      }
    );

    if (response.data.responseCode === 200) {
      const cookieStore = await cookies();
      cookieStore.set("AUTH_SESSION", JSON.stringify(response.data.responseData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

    }

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data || "Login failed" },
      { status: 500 }
    );
  }
}