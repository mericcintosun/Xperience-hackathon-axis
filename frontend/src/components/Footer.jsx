'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'How it Works', href: '/how-it-works' },
  { name: 'Developers', href: '/developers' },
  { name: 'FAQ', href: '/faq' }
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/axisai' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/axisai' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/axisai' }
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
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
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#23f7de] to-[#7928ca]">
                Axis AI
              </h2>
            </Link>
            <p className="text-muted-foreground">
              Revolutionizing blockchain interactions with AI-powered natural language processing and automated smart contracts.
            </p>
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
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
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@axis.ai"
                className="flex items-center space-x-2 text-muted-foreground hover:text-[#23f7de] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@axis.ai</span>
              </a>
              <p className="text-muted-foreground">
                123 Blockchain Street<br />
                Crypto Valley, CV 1234<br />
                Switzerland
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest updates and insights.
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
                  className="px-4 py-2 rounded-r-lg bg-[#23f7de] text-black hover:bg-[#23f7de]/90 transition-colors"
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
              © {new Date().getFullYear()} Axis AI. All rights reserved.
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