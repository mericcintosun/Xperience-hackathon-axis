"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DeveloperSection from "@/components/DeveloperSection";
import Community from "@/components/Community";
import FAQContact from "@/components/FAQContact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative overflow-hidden flex flex-col gap-6">
      {/* Background Effects */}

      {/* Content Sections */}
      <section className="mt-12 lg:mt-0">
        <Hero />
      </section>

      <section className="">
        <Features />
      </section>

      <section className=" bg-[#0f0f0f]/50">
        <HowItWorks />
      </section>

      <section className="">
        <DeveloperSection />
      </section>

      <section className=" bg-[#0f0f0f]/50">
        <Community />
      </section>

      <section className="">
        <FAQContact />
      </section>
    </main>
  );
}
