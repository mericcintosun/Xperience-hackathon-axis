"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

const ForBuildersPage = () => {
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

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#23f7de10_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      {/* Animated Glow Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(circle, #23f7de20 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-16 max-w-[1200px]"
        >
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-block p-3 rounded-full bg-[#23f7de]/10 mb-6">
                <Code className="w-8 h-8 text-[#23f7de]" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#23f7de] to-[#7928ca]">
                Builder Platform
                <br />
                Coming Soon
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                We're building something amazing for developers. A powerful platform to create, 
                integrate and innovate in the MultiverseX ecosystem.
              </p>

              {/* Features Preview */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
              >
                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Code className="w-6 h-6 text-[#23f7de] mb-2" />
                    <h3 className="font-semibold">Developer Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive SDK and API documentation
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Rocket className="w-6 h-6 text-[#23f7de] mb-2" />
                    <h3 className="font-semibold">Quick Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Easy-to-use integration tools and guides
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-[#262626] bg-[#0f0f0f]/50 backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Bell className="w-6 h-6 text-[#23f7de] mb-2" />
                    <h3 className="font-semibold">Early Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Join the waitlist for exclusive access
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                variants={itemVariants}
                className="mt-12 flex flex-col items-center space-y-6"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#23f7de] text-[#0f0f0f] font-semibold hover:bg-[#23f7de]/90 transition-colors"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <p className="text-sm text-muted-foreground">
                  Get notified when we launch
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForBuildersPage;