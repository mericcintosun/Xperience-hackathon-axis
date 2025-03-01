"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Clock, Globe, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

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

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.length >= 2 &&
      emailRegex.test(formData.email) &&
      formData.subject.length >= 3 &&
      formData.message.length >= 10
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setShowSuccess(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@axis.ai",
      link: "mailto:contact@axis.ai",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Crypto Valley, Switzerland",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday, 9:00 AM - 6:00 PM CET",
    },
    {
      icon: Globe,
      title: "Support Coverage",
      content: "Global Support Available 24/7",
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
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-semibold mb-6"
              >
                Get in Touch
              </motion.h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm hover:border-[#23f7de]/50 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-[#23f7de]/10">
                      <info.icon className="w-6 h-6 text-[#23f7de]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-xl">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-[#23f7de] transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={containerVariants}>
              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="space-y-6 p-6 rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#262626] bg-[#0f0f0f] text-white focus:border-[#23f7de] focus:outline-none transition-colors"
                      required
                      minLength={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#262626] bg-[#0f0f0f] text-white focus:border-[#23f7de] focus:outline-none transition-colors"
                      required
                      pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#262626] bg-[#0f0f0f] text-white focus:border-[#23f7de] focus:outline-none transition-colors"
                      required
                      minLength={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-[#262626] bg-[#0f0f0f] text-white focus:border-[#23f7de] focus:outline-none transition-colors resize-none"
                      required
                      minLength={10}
                    />
                  </div>
                </div>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-[#23f7de]"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-[#23f7de] text-[#0f0f0f] font-semibold hover:bg-[#23f7de]/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
