"use client"

import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Estatery- Rent & Sell Property",
  description: "A Web App made to sell and buy real estate property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-1 flex-col  bg-gray-500">
          {children}
        </main>
      </body>
    </html>
  );
}
