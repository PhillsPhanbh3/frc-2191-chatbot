"use client";

// Importing Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Importing Sections
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}