import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Niharika's Portfolio",
  description: "Full Stack Developer & Creative Problem Solver. Specializing in React, Next.js, and modern web technologies.",
  keywords: "portfolio, developer, full stack, react, next.js, javascript, web development",
  authors: [{ name: "Niharika Yadav" }],
  openGraph: {
    title: "Niharika's Portfolio",
    description: "Full Stack Developer & Creative Problem Solver",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
