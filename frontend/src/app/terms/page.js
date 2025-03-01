"use client";

import { motion } from "framer-motion";
import { Shield, FileText, CheckCircle, AlertCircle, Book, Server, Scale, Settings } from "lucide-react";

const TermsPage = () => {
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
      title: "1. Acceptance of Terms",
      icon: Shield,
      content: "By accessing and using the Axis AI website and services, you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these terms, please refrain from using our services.",
    },
    {
      title: "2. Description of Service",
      icon: Server,
      content: "Axis AI provides an innovative platform designed to simplify blockchain interactions within the MultiverseX ecosystem through natural language processing, automation, and smart wallet management. Services may be updated or modified without prior notice.",
    },
    {
      title: "3. User Obligations",
      icon: Book,
      content: "You agree to use our services in compliance with all applicable laws. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    },
    {
      title: "4. Intellectual Property",
      icon: FileText,
      content: "All content, trademarks, logos, and other intellectual property on the website are owned by Axis AI or its licensors. Unauthorized use, reproduction, or distribution of this material is strictly prohibited.",
    },
    {
      title: "5. Disclaimers and Limitation of Liability",
      icon: AlertCircle,
      content: "The services are provided 'as is' without any warranties, express or implied. Axis AI is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.",
    },
    {
      title: "6. Termination",
      icon: Settings,
      content: "We reserve the right to terminate or suspend your access to our services at our sole discretion, without prior notice, for any reason.",
    },
    {
      title: "7. Governing Law",
      icon: Scale,
      content: "These Terms shall be governed by and construed in accordance with the laws of Switzerland. Any disputes arising out of or relating to these Terms shall be resolved in the courts of Switzerland.",
    },
    {
      title: "8. Changes to Terms",
      icon: CheckCircle,
      content: "We may modify these Terms at any time. Your continued use of the services after any such changes constitutes your acceptance of the updated Terms.",
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using Axis AI services. These terms outline your rights and responsibilities while using our platform.
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
              For questions about these terms, please contact{" "}
              <a
                href="mailto:contact@axis.ai"
                className="text-[#23f7de] hover:underline"
              >
                contact@axis.ai
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
