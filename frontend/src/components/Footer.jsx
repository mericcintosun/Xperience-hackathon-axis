"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, ArrowRight, Mail, PlayCircle, FileText, Search, HelpCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },

  { name: "AI Agents", href: "/ai-agents" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },

];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://x.com/AxisAgentX" },
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

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative border-t border-[#262626] bg-[#0f0f0f]">
      <div className="absolute inset-0 bg-[radial-gradient(#23f7de10_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
                Axis AI
              </h2>
            </Link>
            <h3 className="text-xl font-semibold text-white">Start Exploring Today</h3>
            <p className="text-muted-foreground">
              Unlock real-time blockchain insights with Axis AI and navigate MultiverseX effortlessly.
            </p>
            <div className="flex flex-col space-y-3">
              <Link href="/demo" className="flex items-center text-muted-foreground hover:text-[#23f7de] transition-colors">
                <PlayCircle className="w-5 h-5 mr-2" />
                <span>Watch Demo</span>
              </Link>
              <Link href="/docs" className="flex items-center text-muted-foreground hover:text-[#23f7de] transition-colors">
                <FileText className="w-5 h-5 mr-2" />
                <span>Read Documentation</span>
              </Link>
           
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#23f7de] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Need Help?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <HelpCircle className="w-5 h-5" />
                <span>Contact our support team for assistance.</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Crypto Valley, Switzerland</span>
              </div>
              <a
                href="mailto:contact@axis.ai"
                className="flex items-center space-x-2 text-muted-foreground hover:text-[#23f7de] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@axis.ai</span>
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-[#262626] hover:border-[#23f7de] transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-[#23f7de]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Stay Updated
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <p className="text-muted-foreground">
                Subscribe for the latest news and insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg border border-r-0 border-[#262626] bg-[#0f0f0f] text-white focus:border-[#23f7de] focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-r-lg bg-[#23f7de] text-black hover:bg-[#23f7de]/90 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#262626] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Axis AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-[#23f7de] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-[#23f7de] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
