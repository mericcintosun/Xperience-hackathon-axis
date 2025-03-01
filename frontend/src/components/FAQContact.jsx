"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
const faqs = [
  {
    question: "What is Axis AI?",
    answer:
      "Axis AI is an advanced blockchain assistant that enables natural language interactions with the MultiverseX ecosystem. It simplifies complex blockchain operations through AI-powered automation and intuitive interfaces.",
  },
  {
    question: "How does the natural language interface work?",
    answer:
      "Our AI understands plain English commands and converts them into blockchain transactions. Simply type what you want to do (e.g., 'send 100 EGLD to alice.elrond') and the AI will handle the technical details.",
  },
  {
    question: "Is Axis AI secure?",
    answer:
      "Yes, security is our top priority. All transactions require explicit user approval, and we employ multiple layers of security including encryption, secure key management, and regular security audits.",
  },
  {
    question: "What networks does Axis AI support?",
    answer:
      "Axis AI primarily supports the MultiverseX network, including both mainnet and testnet environments. We're actively working on expanding support for additional blockchain networks.",
  },
  {
    question: "How can I get started with development?",
    answer:
      "You can start by checking our comprehensive documentation, which includes quick start guides, API references, and code examples. Sign up for a developer account to access our SDK and API keys.",
  },
  {
    question: "What are the pricing plans?",
    answer:
      "We offer flexible pricing plans including a free tier for developers. Enterprise plans are available with custom features and dedicated support. Contact our sales team for detailed pricing information.",
  },
];

const FAQContact = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast.success("Message sent successfully!", {
      description: "We'll get back to you soon.",
      duration: 3000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" max-w-[1200px] mx-auto py-3">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
          Questions? We're Here to Help
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto py-4">
          Find answers to common questions or reach out to our support team
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                backgroundColor:
                  openQuestion === index
                    ? "rgba(35, 247, 222, 0.05)"
                    : "transparent",
              }}
              className="rounded-lg border border-[#262626] overflow-hidden hover:border-[#23f7de]/50 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
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
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Get in Touch
            </h3>

            {/* Contact Options */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <a
                href="mailto:support@axis.ai"
                className="flex items-center gap-3 p-4 rounded-lg border border-[#262626] hover:border-[#23f7de]/50 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#23f7de]" />
                <span className="text-sm text-muted-foreground">
                  Email Support
                </span>
              </a>
              <Link
                href="https://axisagent.vercel.app/"
                className="flex items-center gap-3 p-4 rounded-lg border border-[#262626] hover:border-[#23f7de]/50 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-[#23f7de]" />
                <span className="text-sm text-muted-foreground">Live Chat</span>
              </Link>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-[#262626] bg-[#0f0f0f] text-white focus:border-[#23f7de] focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-[#262626] bg-[#0f0f0f] text-white focus:border-[#23f7de] focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#262626] bg-[#0f0f0f] text-white focus:border-[#23f7de] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-[#23f7de] text-[#0f0f0f] font-semibold hover:bg-[#23f7de]/90 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQContact;
