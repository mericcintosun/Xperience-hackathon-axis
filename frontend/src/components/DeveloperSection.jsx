'use client';

import { motion } from 'framer-motion';
import { Code2, Terminal, Blocks, GitBranch, BookOpen, Cpu } from 'lucide-react';
import { useState } from 'react';

const codeExamples = {
  'Quick Start': `import { AxisAI } from '@axis/sdk';

// Initialize the AI Agent
const axis = new AxisAI({
  apiKey: 'your_api_key',
  network: 'devnet' // or 'mainnet'
});

// Create a natural language transaction
const transaction = await axis.createTransaction({
  command: "Send 10 EGLD to alice.elrond",
  wallet: "my-wallet.erd"
});

// Execute the transaction
const result = await axis.execute(transaction);`,

  'Smart Triggers': `// Set up an automated trigger
const trigger = axis.createTrigger({
  condition: {
    type: 'price',
    token: 'EGLD',
    threshold: 55.00,
    operator: '>'
  },
  action: {
    type: 'swap',
    fromToken: 'USDC',
    toToken: 'EGLD',
    amount: 100
  }
});

// Activate the trigger
await trigger.activate();`,

  'Wallet Integration': `// Create an AI-powered wallet
const wallet = await axis.createWallet({
  type: 'smart',
  features: ['autoCompound', 'riskManagement']
});

// Get AI-powered insights
const insights = await wallet.getInsights();
console.log(insights.recommendations);`
};

const features = [
  {
    icon: Terminal,
    title: 'Command Line Interface',
    description: 'Powerful CLI tool for seamless integration with your development workflow.',
    color: '#23f7de'
  },
  {
    icon: Blocks,
    title: 'Smart Contract Templates',
    description: 'Pre-built smart contract templates with AI-powered customization.',
    color: '#23f7de'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Built-in version control for smart contracts and configurations.',
    color: '#23f7de'
  }
];

const DeveloperSection = () => {
  const [activeTab, setActiveTab] = useState('Quick Start');

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
    <section className=" relative overflow-hidden  max-w-[1200px] mx-auto py-3">
      {/* Background Pattern */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-[radial-gradient(#23f7de10_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4">
            Developer Resources
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Comprehensive tools and documentation for building on the MultiverseX blockchain with AI
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
          {/* Documentation Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#0f0f0f]/50 p-6 backdrop-blur-sm transition-all hover:border-[#23f7de]/50"
              >
                <div className="relative z-10">
                  <div className="mb-4">
                    <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#23f7de]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>

          {/* Code Examples */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-[#262626]">
                {Object.keys(codeExamples).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'text-[#23f7de] border-b-2 border-[#23f7de]'
                        : 'text-muted-foreground hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Code Block */}
              <div className="p-6">
                <pre className="text-sm text-white font-mono overflow-x-auto">
                  <code>{codeExamples[activeTab]}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default DeveloperSection; 