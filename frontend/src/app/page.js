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
    <div className="relative min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Primary Light Beam */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.35, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0.2
            }}
            className="absolute top-0 left-0 right-0 h-[800px]"
            style={{
              background: `
                conic-gradient(from 90deg at 50% -10%, 
                  #23f7de00, 
                  #23f7de60 10%, 
                  #23f7de10 20%, 
                  #23f7de10 30%, 
                  #23f7de60 40%, 
                  #23f7de10 50%, 
                  #23f7de10 60%, 
                  #23f7de60 70%, 
                  #23f7de10 80%, 
                  #23f7de10 90%, 
                  #23f7de60)
              `,
              filter: 'blur(70px)',
              transform: 'translateY(-40%)',
              transformOrigin: 'top'
            }}
          />

          {/* Purple Light Beam */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0.3,
              delay: 0.5
            }}
            className="absolute top-0 left-0 right-0 h-[600px]"
            style={{
              background: `
                conic-gradient(from -90deg at 50% -10%, 
                  #7928ca00, 
                  #7928ca50 10%, 
                  #7928ca10 20%, 
                  #7928ca10 30%, 
                  #7928ca50 40%, 
                  #7928ca10 50%, 
                  #7928ca10 60%, 
                  #7928ca50 70%, 
                  #7928ca10)
              `,
              filter: 'blur(80px)',
              transform: 'translateY(-30%)',
              transformOrigin: 'top'
            }}
          />

          {/* Additional Intense Beam */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.25, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0.1,
              delay: 1
            }}
            className="absolute top-0 left-0 right-0 h-[1000px]"
            style={{
              background: `
                conic-gradient(from 180deg at 50% -10%, 
                  #23f7de00, 
                  #23f7de50 15%, 
                  #7928ca40 30%, 
                  #23f7de10 45%, 
                  #7928ca40 60%, 
                  #23f7de50 75%, 
                  #23f7de00)
              `,
              filter: 'blur(90px)',
              transform: 'translateY(-35%)',
              transformOrigin: 'top'
            }}
          />
        </div>

        {/* Content Sections */}
        <section className="pt-20">
          <Hero />
        </section>

        <section className="py-24">
          <Features />
        </section>

        <section className="py-24 bg-[#0f0f0f]/50">
          <HowItWorks />
        </section>

        <section className="py-24">
          <DeveloperSection />
        </section>

        <section className="py-24 bg-[#0f0f0f]/50">
          <Community />
        </section>

        <section className="py-24">
          <FAQContact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
