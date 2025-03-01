"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code, Rocket, Bell, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import AgentCards from '@/components/AgentCards';
const ForBuildersPage = () => {
  const [showToast, setShowToast] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const toastVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#23f7de10_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      {/* Animated Glow Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle, #23f7de20 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0f0f0f]">
      {/* Header Section */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#23f7de10_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
        
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-6">
              AI Agents
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our suite of specialized AI agents designed to enhance your blockchain experience. From automated operations to intelligent trading, our agents are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Cards Section */}
      <AgentCards />

      {/* Additional Info Section */}
      <section className="w-full py-16 relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our community and be among the first to experience the future of blockchain automation.
            </p>
            {/* CTA */}
            <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#23f7de] text-[#0f0f0f] font-semibold hover:bg-[#23f7de]/90 transition-colors cursor-pointer"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          {/* Success Toast */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                variants={toastVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#23f7de] text-[#0f0f0f] px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Successfully joined the waitlist!</span>
              </motion.div>
            )}
          </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default ForBuildersPage;
