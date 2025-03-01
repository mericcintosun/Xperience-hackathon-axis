'use client';

import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "DeFi Developer",
    company: "BlockTech Solutions",
    image: "/testimonials/alex.jpg",
    content: "Axis AI has revolutionized how we handle blockchain transactions. The natural language interface is a game-changer for our development team.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "CryptoInnovate",
    image: "/testimonials/sarah.jpg",
    content: "The automated triggers and AI-powered insights have significantly improved our trading strategies. Exceptional tool for the MultiverseX ecosystem.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Blockchain Architect",
    company: "Web3 Labs",
    image: "/testimonials/michael.jpg",
    content: "Integration was seamless, and the AI capabilities are truly impressive. It's become an essential part of our development workflow.",
    rating: 5
  }
];

const partners = [
  { name: "MultiverseX", logo: "/partners/multiversx.png", scale: 0.9 },
  { name: "AWS", logo: "/partners/aws.png", scale: 0.8 },
  { name: "Google Cloud", logo: "/partners/google-cloud.png", scale: 1 },
  { name: "Human Protocol", logo: "/partners/human-protocol.png", scale: 0.9 },
  { name: "Opera", logo: "/partners/opera.png", scale: 0.7 }
];

const stats = [
  { label: "Active Users", value: "50K+" },
  { label: "Transactions", value: "1M+" },
  { label: "Total Volume", value: "$500M+" },
  { label: "Developer Tools", value: "25+" }
];

const Community = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className=" relative overflow-hidden max-w-[1200px] mx-auto py-3">
      {/* Background Pattern */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 " />
      </div>

      <div className=" relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
            Trusted by Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of developers and enterprises building the future of blockchain
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#23f7de]">{stat.value}</h3>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative rounded-xl border border-[#262626] backdrop-blur-sm p-8">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-[#262626] text-white hover:border-[#23f7de] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-[#262626] text-white hover:border-[#23f7de] transition-colors cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Quote className="w-8 h-8 text-[#23f7de] mx-auto mb-6" />
              <p className="text-lg md:text-xl text-white mb-6">
                {testimonials[activeTestimonial].content}
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#23f7de] text-[#23f7de]" />
                ))}
              </div>
              <h4 className="text-lg font-semibold text-white">
                {testimonials[activeTestimonial].name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative h-24 flex items-center justify-center rounded-xl border border-[#262626] hover:border-[#23f7de]/50 transition-all duration-300 bg-[#0f0f0f]/50 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f0f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ 
                    transform: `scale(${partner.scale})`,
                    maxWidth: '80%',
                    maxHeight: '80%'
                  }}
                  className="w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;