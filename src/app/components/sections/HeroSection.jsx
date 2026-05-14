"use client";

import { React, useState } from "react";
import { Image } from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative pt-20 pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gray-300"></div>
            </div>
        </section>
    )
}