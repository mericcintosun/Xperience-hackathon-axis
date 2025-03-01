'use client';

import { motion } from 'framer-motion';
import { MessageSquareText, Zap, Wallet, Search, Bot, Shield } from 'lucide-react';

const features = [
  {
    icon: MessageSquareText,
    title: 'Natural Language Interface',
    description: 'Interact with blockchain using simple conversational commands. No technical knowledge required.',
    color: '#23f7de'
  },
  {
    icon: Zap,
    title: 'Automated Execution',
    description: 'Set up smart triggers for automatic transaction execution based on market conditions.',
    color: '#7928ca'
  },
  {
    icon: Wallet,
    title: 'Personalized Wallet Assistant',
    description: 'AI-powered wallet management with personalized insights and recommendations.',
    color: '#23f7de'
  },
  {
    icon: Search,
    title: 'Blockchain Explorer',
    description: 'Intuitive blockchain data exploration with natural language queries.',
    color: '#7928ca'
  },
  {
    icon: Bot,
    title: 'AI Agent Integration',
    description: 'Advanced AI agents for automated trading and portfolio management.',
    color: '#23f7de'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security with real-time transaction monitoring.',
    color: '#7928ca'
  }
];

const Features = () => {
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

  return (
    <section className=" relative border border-blue-500 max-w-[1200px] mx-auto">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[#0f0f0f] opacity-90" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-18"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#23f7de] to-[#7928ca]">
            Features & Benefits
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of blockchain interaction with our powerful features
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#0f0f0f]/50 p-6 backdrop-blur-sm transition-all hover:border-[#23f7de]/50"
            >
              <div className="relative z-10">
                <div className="mb-4">
                  <feature.icon
                    className="h-8 w-8"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#23f7de]/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 