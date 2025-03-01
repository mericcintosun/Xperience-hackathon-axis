"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DeveloperSection from "@/components/DeveloperSection";
import Community from "@/components/Community";
import FAQContact from "@/components/FAQContact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-[80%] mx-auto lg:w-full">
      <main className="flex-grow">
       
        <Hero />

        <Features />

        <HowItWorks />

        <DeveloperSection />

        <Community />

        <FAQContact />
      </main>

      <Footer />
    </div>
  );
}
