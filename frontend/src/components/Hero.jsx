"use client";

import { ArrowRight, PlayCircle, Code } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f]/90 to-[#0f0f0f]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[#0f0f0f]">
            <div className="absolute h-full w-full bg-[radial-gradient(#23f7de_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Meet the Future of Blockchain Assistant
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Streamline your AI-powered transactions in the MultiverseX
            ecosystem. Transform your blockchain experience with natural
            language interface and automated triggers.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            {[
              {
                title: "Natural Language Interface",
                description:
                  "Execute complex transactions with simple commands",
              },
              {
                title: "Automated Triggers",
                description:
                  "Automate your operations with customizable triggers",
              },
              {
                title: "API Integrations",
                description: "Comprehensive API and SDK support for developers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#0f0f0f]/50 p-6 backdrop-blur-sm transition-all hover:border-[#23f7de]/50"
              >
                <div className="relative z-10">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#23f7de]/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/developers"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#23f7de] text-[#0f0f0f] font-semibold hover:bg-[#23f7de]/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#262626] text-white hover:bg-[#262626] transition-colors"
            >
              Watch Demo
              <PlayCircle className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#262626] text-white hover:bg-[#262626] transition-colors"
            >
              Documentation
              <Code className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
