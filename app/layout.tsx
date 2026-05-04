import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import StoreProvider from "./store/provider";
import { NextThemesProvider } from "./providers/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "API Docs",
  description: "Developer documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${dmMono.variable} font-sans`}>
        <NextThemesProvider>
          <StoreProvider>{children}</StoreProvider>
        </NextThemesProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
