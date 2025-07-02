import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // Adjust path if necessary
import Footer from "../components/Footer"; // Adjust path if necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JW Portfolio - Fashion Designer",
  description: "Official portfolio of a prominent fashion designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
