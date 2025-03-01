"use client";

import { ArrowRight, PlayCircle, Code } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
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
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
      },
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex items-center max-w-[1200px] mx-auto"
    >
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
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.2,
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
            filter: "blur(70px)",
            transform: "translateY(-40%)",
            transformOrigin: "top",
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto w-full my-3">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6"
          >
            Meet the Future of Blockchain Assistant
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Streamline your AI-powered transactions in the MultiverseX
            ecosystem. Transform your blockchain experience with natural
            language interface and automated triggers.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8"
          >
            {[
              {
                title: "Natural Language Interface",
                description:
                  "Execute complex transactions with simple commands",
              },
              {
                title: "Automated Triggers",
                description:
                  "Automate your operations with customizable triggers",
              },
              {
                title: "API Integrations",
                description: "Comprehensive API and SDK support for developers",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#0f0f0f]/50 p-6 backdrop-blur-sm transition-all hover:border-[#23f7de]/50"
              >
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
                <motion.div
                  className="absolute inset-0 z-0 bg-gradient-to-br from-[#23f7de]/10 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="https://axisagent.vercel.app/"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#23f7de] text-[#0f0f0f] font-semibold hover:bg-[#23f7de]/90 transition-colors"
              >
                Get Started
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
