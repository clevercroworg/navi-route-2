import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navi Route | Digital Growth Partners",
  description: "Digital marketing that drives enquiries and bookings for hospitality & leisure brands.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${caveat.variable} ${inter.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-sand-100 text-navy-900 selection:bg-navy-100 selection:text-navy-800">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
