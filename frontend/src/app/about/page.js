"use client";

import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Users,
  Rocket,
  Code,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
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

  const sections = [
    {
      icon: Target,
      title: "Our Mission",
      content:
        "At Axis AI, we aim to revolutionize blockchain interactions by making them intuitive and accessible. Our mission is to bridge the gap between complex blockchain technology and everyday usability.",
    },
    {
      icon: Code,
      title: "What We Do",
      content:
        "Axis AI simplifies blockchain operations within the MultiverseX ecosystem using advanced natural language processing, automation, and smart wallet management. Our platform empowers users to create wallets, execute transactions, and access blockchain data effortlessly—all through a user-friendly interface.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      content:
        "We envision a future where blockchain technology seamlessly integrates into daily digital interactions. By providing both user-friendly tools and developer-focused integrations, we strive to drive widespread adoption and innovation in decentralized ecosystems.",
    },
    {
      icon: Users,
      title: "Our Team",
      content:
        "Powered by experts in blockchain, AI, and software development, the Axis AI team is dedicated to creating cutting-edge solutions. Our collaborative approach ensures that we continuously evolve to meet the challenges of the digital landscape.",
    },
    {
      icon: Rocket,
      title: "Why Choose Axis AI",
      content:
        "Axis AI is built with a dual focus on user empowerment and developer enablement. We transform complex blockchain processes into simple, efficient interactions, paving the way for a more connected and decentralized future.",
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
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
              About Axis AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how we're reshaping the blockchain landscape and making
              decentralized technology accessible to everyone.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            className="grid gap-8 md:gap-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm hover:border-[#23f7de]/50 transition-all"
              >
                <div className="p-3 rounded-lg bg-[#23f7de]/10">
                  <section.icon className="w-6 h-6 text-[#23f7de]" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
              Join Us
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how Axis AI is reshaping the blockchain landscape.
              Explore our platform, connect with our team, and join us on our
              journey to unlock the full potential of decentralized technology.
            </p>
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
  );
};

export default AboutPage;
