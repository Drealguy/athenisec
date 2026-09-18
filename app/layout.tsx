import type { Metadata } from "next";
import { Rethink_Sans, DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athenisec",
  description:
    "Cybersecurity compliance solutions for SMBs in regulated industries.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rethinkSans.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          {/* Without JS the reveal observer never runs, so unhide everything. */}
          <style>{`[data-reveal],[data-reveal-group]>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SmoothScroll />
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
