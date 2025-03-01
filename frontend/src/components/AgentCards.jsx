'use client';

import { motion } from 'framer-motion';
import { Bot, Cpu, LineChart } from 'lucide-react';
import Link from 'next/link';

const agents = [
  {
    title: 'Developer Agent',
    content: 'Boost your Rust coding on MultiverseX with our AI Developer Agent. Generate code and streamline reviews. (Coming Soon)',
    tag: 'Coming Soon',
    icon: Cpu,
    isActive: false,
  },
  {
    title: 'MultiversX Assistant Agent',
    content: 'Experience seamless blockchain interaction within the MultiverseX ecosystem with intelligent wallet management, instant transaction processing, and robust API integration.',
    tag: 'Active',
    icon: Bot,
    isActive: true,
    href: 'https://axisagent.vercel.app/',
  },
  {
    title: 'Wallet Tracker Agent',
    content: 'Effortlessly monitor and manage your crypto wallets with our AI-driven Wallet Tracker Agent. Get real-time updates, insightful portfolio analytics, and secure asset tracking. (Coming Soon)',
    tag: 'Coming Soon',
    icon: LineChart,
    isActive: false,
  },
];

const AgentCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative overflow-hidden max-w-[1200px] mx-auto py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#23f7de10_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {agents.map((agent, index) => {
          const CardContent = (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={agent.isActive ? "hover" : {}}
              className={`group relative overflow-hidden rounded-xl border ${
                agent.isActive
                  ? 'border-[#23f7de] bg-[#0f0f0f]/80'
                  : 'border-[#262626] bg-[#0f0f0f]/50'
              } p-6 backdrop-blur-sm transition-all cursor-pointer`}
            >
              <div className="relative z-10">
                {/* Tag */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  agent.isActive
                    ? 'bg-[#23f7de]/20 text-[#23f7de]'
                    : 'bg-[#262626] text-[#a3a3a3]'
                }`}>
                  {agent.tag}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <agent.icon
                    className={`h-8 w-8 ${
                      agent.isActive ? 'text-[#23f7de]' : 'text-[#a3a3a3]'
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-3 ${
                  agent.isActive ? 'text-white' : 'text-[#a3a3a3]'
                }`}>
                  {agent.title}
                </h3>

                {/* Content */}
                <p className="text-sm text-muted-foreground">
                  {agent.content}
                </p>
              </div>

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  agent.isActive
                    ? 'from-[#23f7de]/10 via-transparent to-transparent opacity-100'
                    : 'from-[#23f7de]/5 via-transparent to-transparent opacity-0'
                } transition-opacity ${
                  agent.isActive ? 'group-hover:opacity-100' : ''
                }`}
              />
            </motion.div>
          );

          return agent.isActive && agent.href ? (
            <Link 
              key={index}
              href={agent.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </Link>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default AgentCards; 