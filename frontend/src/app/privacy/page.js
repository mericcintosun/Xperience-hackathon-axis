"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Key, RefreshCcw, Cookie, Mail } from "lucide-react";

const PrivacyPage = () => {
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
      title: "1. Introduction",
      icon: Eye,
      content: "This Privacy Policy explains how Axis AI collects, uses, and protects your information when you use our website and services.",
    },
    {
      title: "2. Information We Collect",
      icon: Database,
      content: "We collect two types of information: Personal Information (such as your name, email address, and details provided during registration) and Non-Personal Information (collected through cookies and similar tracking technologies to enhance your experience).",
    },
    {
      title: "3. How We Use Your Information",
      icon: Key,
      content: "Your information is used to provide, maintain, and improve our services, personalize your experience, and communicate updates, promotions, or other relevant information.",
    },
    {
      title: "4. Sharing of Information",
      icon: Shield,
      content: "We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our services or when required by law.",
    },
    {
      title: "5. Data Security",
      icon: Lock,
      content: "We implement reasonable measures to safeguard your information from unauthorized access, alteration, or disclosure.",
    },
    {
      title: "6. Your Rights",
      icon: Mail,
      content: "You have the right to access, update, or delete your personal information. Please contact us at privacy@axis.ai to exercise these rights.",
    },
    {
      title: "7. Cookies",
      icon: Cookie,
      content: "Our website uses cookies to improve your experience. You may disable cookies through your browser settings, though this may affect site functionality.",
    },
    {
      title: "8. Changes to Privacy Policy",
      icon: RefreshCcw,
      content: "We may update this Privacy Policy from time to time. We encourage you to review it periodically to stay informed about our information practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#23f7de10_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="relative">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-16 max-w-[1200px]"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Axis AI, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
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
                className="p-6 rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm hover:border-[#23f7de]/50 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-[#23f7de]/10">
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Last Updated Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center text-muted-foreground"
          >
            <p>Effective Date: March 15, 2024</p>
            <p className="mt-2">
              For privacy-related inquiries, please contact{" "}
              <a
                href="mailto:privacy@axis.ai"
                className="text-[#23f7de] hover:underline"
              >
                privacy@axis.ai
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage; 