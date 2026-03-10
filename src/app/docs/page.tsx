import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Book,
  Cpu,
  Globe,
  ShoppingBag,
  Terminal,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | BuildPCBs",
  description:
    "Learn about the BuildPCBs Hardware Execution System. From conversation to physical product.",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 py-12">
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-3">
                Overview
              </h3>
              <nav className="space-y-2">
                <a
                  href="#what-is-buildpcbs"
                  className="block text-gray-600 dark:text-gray-400 hover:text-[#0038DF] dark:hover:text-[#255CFF] transition-colors"
                >
                  What is BuildPCBs?
                </a>
                <a
                  href="#how-it-works"
                  className="block text-gray-600 dark:text-gray-400 hover:text-[#0038DF] dark:hover:text-[#255CFF] transition-colors"
                >
                  How it Works
                </a>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-3">
                The System
              </h3>
              <nav className="space-y-2">
                <a
                  href="#hardware-compiler"
                  className="block text-gray-600 dark:text-gray-400 hover:text-[#0038DF] dark:hover:text-[#255CFF] transition-colors"
                >
                  Hardware Compiler
                </a>
                <a
                  href="#decentralized-network"
                  className="block text-gray-600 dark:text-gray-400 hover:text-[#0038DF] dark:hover:text-[#255CFF] transition-colors"
                >
                  Decentralized Network
                </a>
                <a
                  href="#marketplace"
                  className="block text-gray-600 dark:text-gray-400 hover:text-[#0038DF] dark:hover:text-[#255CFF] transition-colors"
                >
                  Marketplace
                </a>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-3">
                Guides
              </h3>
              <nav className="space-y-2">
                <a
                  href="#first-project"
                  className="block text-gray-600 dark:text-gray-400 hover:text-[#0038DF] dark:hover:text-[#255CFF] transition-colors"
                >
                  Your First Project
                </a>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0038DF]/10 dark:bg-[#0038DF]/20 border border-[#0038DF]/20 text-[#0038DF] dark:text-[#255CFF] text-sm font-medium mb-6">
                <Book className="w-4 h-4 mr-2" />
                Documentation
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#444444] dark:text-white tracking-tight mb-6">
                The Hardware Execution System
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                BuildPCBs is not just a design tool. It is a complete end-to-end
                system that turns natural language into physical hardware.
              </p>
            </div>

            {/* What is BuildPCBs? */}
            <section id="what-is-buildpcbs" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl font-bold text-[#444444] dark:text-white mb-6">
                What is BuildPCBs?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Historically, creating hardware required mastering a stack of
                complex, fragmented tools: schematic capture, PCB layout, BOM
                management, and manufacturing logistics.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                BuildPCBs replaces this stack with a{" "}
                <strong>conversational interface</strong>. You describe what you
                want, and our system executes the engineering and logistics to
                make it real.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#0038DF]/10 flex items-center justify-center mb-4">
                    <Terminal className="w-5 h-5 text-[#0038DF]" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Talk to it
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    "I need a flight controller for a drone with STM32 and IMU."
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#0038DF]/10 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5 text-[#0038DF]" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    It Builds It
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    The system generates schematics, layouts, and routes the job
                    to a builder.
                  </p>
                </div>
              </div>
            </section>

            {/* How it Works */}
            <section id="how-it-works" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl font-bold text-[#444444] dark:text-white mb-6">
                How it Works
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                The platform is built on three core pillars that work together
                to automate hardware creation.
              </p>

              <div className="space-y-12">
                {/* Pillar 1 */}
                <div id="hardware-compiler" className="scroll-mt-32">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                      <Terminal className="w-6 h-6 text-[#0038DF] dark:text-[#255CFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      1. The Hardware Compiler
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 ml-16">
                    This is the "Brain". It understands your requirements and
                    converts them into manufacturing files (Gerbers, BOM, PnP).
                    It uses AI to handle component selection and circuit design,
                    ensuring correctness and compatibility.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div id="decentralized-network" className="scroll-mt-32">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      2. The Decentralized Network
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 ml-16">
                    Instead of a single factory, we use a global network of
                    independent builders (nodes). These builders stake tokens to
                    prove reliability and are Algorithmically matched to your
                    job based on location and capability. This reduces shipping
                    times and democratizes manufacturing.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div id="marketplace" className="scroll-mt-32">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                      <ShoppingBag className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      3. The Marketplace
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 ml-16">
                    Once a device is built, it's not just a prototype—it's a
                    product. You can list your hardware on the marketplace,
                    allowing others to order it directly. The network handles
                    the on-demand manufacturing for every order.
                  </p>
                </div>
              </div>
            </section>

            {/* First Project */}
            <section id="first-project" className="mb-20 scroll-mt-32">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0038DF] to-[#255CFF] text-white">
                <h2 className="text-2xl font-bold mb-4">Ready to build?</h2>
                <p className="mb-8 text-white/90">
                  You don't need a degree in electrical engineering. You just
                  need an idea.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/build"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0038DF] font-semibold rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
