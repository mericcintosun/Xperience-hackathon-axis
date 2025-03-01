"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  const faqItems = [
    {
      question: "What is Axis AI?",
      answer: "Axis AI is an innovative AI assistant designed to simplify blockchain interactions within the MultiverseX ecosystem. It leverages natural language processing, automation, and smart wallet management to make blockchain operations accessible to everyone.",
    },
    {
      question: "How does Axis AI work?",
      answer: "Axis AI interprets user commands through natural language processing, automates tasks such as wallet creation and token transfers, and offers robust API integrations for developers—all through an intuitive chat-like interface.",
    },
    {
      question: "Who can benefit from Axis AI?",
      answer: "Both technical and non-technical users benefit from Axis AI. End users enjoy streamlined blockchain transactions and wallet management, while developers get access to efficient tools and integrations to enhance their blockchain projects.",
    },
    {
      question: "Is Axis AI secure?",
      answer: "Absolutely. Security is a top priority for us. Axis AI is built with robust security measures to protect user data and transactions, and we continuously update our protocols to align with industry best practices.",
    },
    {
      question: "Which blockchain does Axis AI support?",
      answer: "Axis AI is specifically optimized for the MultiverseX ecosystem. Future updates may expand its capabilities to support additional blockchains as our platform evolves.",
    },
    {
      question: "How do I get started?",
      answer: "Visit our website at https://axisagent.vercel.app/ to learn more, sign up, and access our tutorials and documentation that will guide you through using Axis AI.",
    },
    {
      question: "Where can I get support?",
      answer: "For any questions or assistance, please visit our support page or contact us through our website and social media channels. We're here to help you navigate your blockchain experience.",
    },
    {
      question: "Are there any fees to use Axis AI?",
      answer: "Currently, many features of Axis AI are available for free. We plan to offer premium functionalities in the future. Please check our pricing page for the most up-to-date details.",
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
              <HelpCircle className="w-8 h-8 text-[#23f7de]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Axis AI and how it can help you navigate the blockchain ecosystem.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            variants={containerVariants}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-[#262626] rounded-lg overflow-hidden bg-[#0f0f0f]/50 backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#262626]/20 transition-colors cursor-pointer"
                >
                  <span className="font-semibold">{item.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#23f7de]" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-muted-foreground border-t border-[#262626]">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage; 