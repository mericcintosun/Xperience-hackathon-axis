"use client";

import { motion } from "framer-motion";
import { Wallet, MessageSquare, Zap, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Create Your Wallet",
    description:
      "Set up your MultiverseX wallet with AI assistance in just a few clicks. No technical knowledge needed.",
    color: "#23f7de",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Commands",
    description:
      "Simply tell the AI what you want to do in plain English. The system understands and executes your intentions.",
    color: "#23f7de",
  },
  {
    icon: Zap,
    title: "Automated Execution",
    description:
      "Let the AI handle the technical details. Transactions are processed securely and efficiently.",
    color: "#23f7de",
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f]/90 to-[#0f0f0f]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[#0f0f0f]">
            <div className="absolute h-full w-full bg-[radial-gradient(#23f7de_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden  max-w-[1200px] mx-auto py-3">
        {/* Background Pattern */}
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 [background-size:32px_32px] opacity-50" />
        </div>

        <div className="px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the simplicity of blockchain interaction with our
              AI-powered platform
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="group relative bg-[#0f0f0f]/50 backdrop-blur-sm border border-[#262626] rounded-xl p-6 transition-all hover:border-[#23f7de]/50">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#23f7de] flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 relative">
                      <div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <step.icon
                          className="h-6 w-6"
                          style={{ color: step.color }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-[#23f7de]" />
                      </div>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#23f7de]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                </motion.div>
              ))}
            </div>

            {/* Interactive Demo Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <button className="px-8 py-3 rounded-lg bg-[#23f7de] text-black font-semibold hover:opacity-90 transition-opacity cursor-pointer">
                Try Interactive Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
