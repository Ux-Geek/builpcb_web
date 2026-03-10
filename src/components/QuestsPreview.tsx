"use client";

import React from "react";
import { motion } from "framer-motion";

export default function QuestsPreview() {
    return (
        <section className="py-24 bg-white dark:bg-black w-full flex justify-center border-t border-gray-100 dark:border-neutral-900">
            <div className="max-w-[1200px] w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0038DF]/10 dark:bg-[#0038DF]/20 text-[#0038DF] dark:text-[#3B6BFF] text-sm font-medium border border-[#0038DF]/20 dark:border-[#0038DF]/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0038DF] dark:bg-[#3B6BFF] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0038DF] dark:bg-[#3B6BFF]"></span>
                        </span>
                        Introducing Quests
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white">
                        Level up your hardware <br className="hidden md:block" /> journey
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
                        Complete daily and weekly challenges, contribute to open-source hardware, and earn $BUILDERS tokens. The more you build, the more you earn.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-2 px-8 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium transition-colors hover:bg-black dark:hover:bg-gray-100 shadow-lg shadow-gray-200 dark:shadow-none"
                    >
                        Explore Quests
                    </motion.button>
                </div>
                <div className="flex-1 w-full max-w-md relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 flex flex-col gap-4 mx-auto">
                    <div className="bg-white dark:bg-black rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-neutral-800 flex items-center justify-between relative z-10 transition-transform hover:-translate-y-1 duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center border border-blue-100 dark:border-blue-800/50">
                                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">1</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white text-[15px]">Design a 555 Timer Circuit</h4>
                                <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">Weekly Quest • 500 XP</p>
                            </div>
                        </div>
                        <div className="text-[11px] font-bold px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 rounded-full border border-green-200 dark:border-green-500/30">Active</div>
                    </div>

                    <div className="bg-white dark:bg-black rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-neutral-800 flex items-center justify-between relative z-10 opacity-70 transition-opacity hover:opacity-100 duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center border border-gray-200 dark:border-neutral-700">
                                <span className="text-gray-600 dark:text-gray-400 font-bold text-lg">2</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white text-[15px]">Review 3 community PCBs</h4>
                                <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">Daily Quest • 150 XP</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
