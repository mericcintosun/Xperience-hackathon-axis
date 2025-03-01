'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Twitter, Linkedin, Github, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    question: "What is Axis AI?",
    answer: "Axis AI is an advanced blockchain assistant that enables natural language interactions with the MultiverseX ecosystem. It simplifies complex blockchain operations through AI-powered automation and intuitive interfaces."
  },
  {
    question: "How does the natural language interface work?",
    answer: "Our AI understands plain English commands and converts them into blockchain transactions. Simply type what you want to do (e.g., \"send 100 EGLD to alice.elrond\") and the AI will handle the technical details."
  },
  {
    question: "Is Axis AI secure?",
    answer: "Yes, security is our top priority. All transactions require explicit user approval, and we employ multiple layers of security including encryption, secure key management, and regular security audits."
  },
  {
    question: "What networks does Axis AI support?",
    answer: "Axis AI primarily supports the MultiverseX network, including both mainnet and testnet environments. We're actively working on expanding support for additional blockchain networks."
  },
  {
    question: "How can I get started with development?",
    answer: "You can start by checking our comprehensive documentation, which includes quick start guides, API references, and code examples. Sign up for a developer account to access our SDK and API keys."
  },
  {
    question: "What are the pricing plans?",
    answer: "We offer flexible pricing plans including a free tier for developers. Enterprise plans are available with custom features and dedicated support. Contact our sales team for detailed pricing information."
  }
];

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/AxisAgentX",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/axis-ai-agent/?viewAsMember=true",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/mericcintosun/Xperience-hackathon-axis",
  },
];

export default function SupportPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6">
              Axis AI Support
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome to the Axis AI Support Page! We're dedicated to providing you with the best assistance as you navigate our platform within the MultiverseX ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    backgroundColor: openQuestion === index ? "rgba(35, 247, 222, 0.05)" : "transparent",
                  }}
                  className="rounded-lg border border-[#262626] overflow-hidden hover:border-[#23f7de]/50 transition-colors"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left cursor-pointer"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#23f7de]" />
                    </motion.div>
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 relative bg-[#0f0f0f]/50">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Need Further Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="mailto:support@axisai.com"
                className="flex items-center justify-center gap-3 p-6 rounded-lg border border-[#262626] hover:border-[#23f7de]/50 transition-colors group"
              >
                <Mail className="w-6 h-6 text-[#23f7de] group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-white transition-colors">
                  Email Support
                </span>
              </a>
              <Link
                href="https://axisagent.vercel.app/"
                className="flex items-center justify-center gap-3 p-6 rounded-lg border border-[#262626] hover:border-[#23f7de]/50 transition-colors group"
              >
                <MessageSquare className="w-6 h-6 text-[#23f7de] group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-white transition-colors">
                  Live Chat
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="w-full py-16 relative">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Connect with Us</h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-[#262626] hover:border-[#23f7de]/50 transition-colors group"
                >
                  <social.icon className="w-6 h-6 text-[#23f7de] group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground">
              Thank you for being part of the Axis AI community. We value your feedback and look forward to supporting you on your journey with our innovative platform!
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

    