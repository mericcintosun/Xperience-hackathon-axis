"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wallet, ArrowRight, Shield, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";

const WalletPage = () => {
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

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
  };

  const features = [
    {
      icon: Wallet,
      title: "Wallet Creation & Management",
      description: "Create and manage your MultiversX wallets with ease through our intuitive interface.",
    },
    {
      icon: Zap,
      title: "Instant Operations",
      description: "Perform DeFi operations, NFT transactions, and transfers with a single click.",
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "Built on ElizaOS infrastructure ensuring the highest level of security for your assets.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#23f7de10_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-16 max-w-[1200px]"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-block p-3 rounded-full bg-[#23f7de]/10 mb-6">
              <Wallet className="w-8 h-8 text-[#23f7de]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
              Coming Soon in Q4
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              On this page, you can utilize features such as wallet creation, instant transfers, DeFi operations, and NFT transactions, all powered by the ElizaOS infrastructure.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#0f0f0f]/50 p-6 backdrop-blur-sm transition-all hover:border-[#23f7de]/50"
              >
                <div className="relative z-10">
                  <div className="p-3 rounded-lg bg-[#23f7de]/10 inline-block mb-4">
                    <feature.icon className="w-6 h-6 text-[#23f7de]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <motion.div
                  className="absolute inset-0 z-0 bg-gradient-to-r from-[#23f7de]/10 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Security Message */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Axis AI, we ensure the security of your wallet information, allowing you to perform transactions on the MultiversX network swiftly with a single click.
            </p>
          </motion.div>

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
    </div>
  );
};

export default WalletPage;
