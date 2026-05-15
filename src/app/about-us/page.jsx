"use client";

// Importing Layout Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// Importing needed modules
import { motion } from "framer-motion";
import react from "react";

export default function AboutUs() {
    return (
        <>
            <Header />
            <main className="relative z-10">
                <section className="relative pt-20 pb-32 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-gray-300"></div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}