"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "step-1-schematic", title: "Step 1: Schematic Design" },
    { id: "step-2-placement", title: "Step 2: Component Placement" },
    { id: "step-3-routing", title: "Step 3: Routing & Traces" },
    { id: "step-4-drc", title: "Step 4: Design Rule Check (DRC)" },
    { id: "step-5-gerbers", title: "Step 5: Generating Gerbers" },
    { id: "ai-automation", title: "Using AI to Automate" },
];

const Header = ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <h2
        id={id}
        className="text-[28px] md:text-[32px] font-medium mt-16 mb-6 text-[#444444] dark:text-white pb-4 border-b border-gray-200 dark:border-neutral-800 scroll-mt-32 transition-colors"
    >
        {children}
    </h2>
);

const SubHeader = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-[20px] font-medium mt-8 mb-4 text-[#333333] dark:text-gray-200">
        {children}
    </h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[16px] text-[#777777] dark:text-gray-400 mb-5 leading-[1.6]">
        {children}
    </p>
);

const List = ({ items }: { items: string[] }) => (
    <ul className="list-disc list-outside ml-5 mb-6 text-[16px] text-[#777777] dark:text-gray-400 space-y-2">
        {items.map((item, idx) => (
            <li key={idx} className="leading-[1.6] pl-1 flex items-start">
                <span className="relative top-0.5">{item}</span>
            </li>
        ))}
    </ul>
);

export default function HowToDesignClient() {
    const [activeSection, setActiveSection] = useState("introduction");

    useEffect(() => {
        const handleScroll = () => {
            let current = sections[0].id;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200) {
                        current = section.id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setActiveSection(id);
    };

    return (
        <section className="w-full min-h-screen bg-white dark:bg-black py-8 md:py-16">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Back Button */}
                <div className="mb-8 lg:mb-12">
                    <Link href="/blog" className="inline-flex items-center text-[14px] font-medium text-[#0038DF] dark:text-[#5C94FF] hover:opacity-80 transition-opacity">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </div>

                {/* Page Header */}
                <div className="text-left mt-[25px] mb-16 lg:mb-24 px-0 lg:px-4">
                    <h1
                        className="text-[40px] md:text-[52px] font-medium text-[#444444] dark:text-white tracking-[-0.02em] leading-[1.1]"
                    >
                        How to Design a PCB: A Complete Guide
                    </h1>
                    <p
                        className="text-[18px] md:text-[20px] font-normal text-gray-500 dark:text-gray-400 mt-4 leading-[1.4]"
                    >
                        A highly structured, step-by-step roadmap to designing Printed Circuit Boards. <br className="hidden md:block" />
                        From raw schematics to production-ready manufacturing files.
                    </p>
                    <div className="flex items-center gap-4 mt-8 text-[14px] text-[#777777] dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-[24px] h-[24px] rounded-full bg-gradient-to-tr from-[#0038DF] to-[#EBEBEB]"></div>
                            <span className="font-medium text-[#444] dark:text-gray-200">System Engineer</span>
                        </div>
                        <span>•</span>
                        <span>10 min read</span>
                    </div>
                </div>

                {/* Mobile Sticky Nav */}
                <div className="lg:hidden sticky top-[60px] z-30 bg-white/95 dark:bg-black/95 backdrop-blur-md pt-4 pb-4 border-b border-gray-200 dark:border-gray-800 mb-8 -mx-4 px-4 overflow-hidden">
                    <div className="flex overflow-x-auto gap-3 scrollbar-hide snap-x">
                        {sections.map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => scrollToSection(sec.id)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-[14px] font-medium transition-colors snap-start ${activeSection === sec.id
                                    ? "bg-[#0038DF] text-white"
                                    : "bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#666666] dark:text-[#AAAAAA]"
                                    }`}
                            >
                                {sec.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-16">
                    {/* Sidebar - Desktop */}
                    <aside className="hidden lg:block lg:w-[280px] flex-shrink-0">
                        <div className="sticky top-32">
                            <h4 className="text-[12px] font-bold text-[#999999] uppercase tracking-wider mb-4 pl-2">Table of Contents</h4>
                            <nav className="space-y-1 pl-2 border-l border-gray-100 dark:border-gray-800">
                                {sections.map((sec) => (
                                    <div
                                        key={sec.id}
                                        onClick={() => scrollToSection(sec.id)}
                                        className="group relative cursor-pointer py-2.5 outline-none -ml-[1px]"
                                    >
                                        <div
                                            className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[18px] rounded-r-full transition-all duration-300 ${activeSection === sec.id
                                                ? "bg-[#0038DF] opacity-100"
                                                : "bg-transparent opacity-0 group-hover:bg-[#DDE2FF] dark:group-hover:bg-[#0038DF]/50 group-hover:opacity-100"
                                                }`}
                                        ></div>
                                        <div
                                            className={`transition-all duration-300 pl-4 ${activeSection === sec.id
                                                ? "translate-x-1"
                                                : "group-hover:translate-x-1"
                                                }`}
                                        >
                                            <span
                                                className={`text-[15px] leading-tight ${activeSection === sec.id
                                                    ? "font-bold text-[#0038DF] dark:text-[#5C94FF] tracking-[-0.01em]"
                                                    : "font-normal text-[#666666] dark:text-[#888888] group-hover:text-[#444444] dark:group-hover:text-gray-300"
                                                    }`}
                                            >
                                                {sec.title}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="lg:max-w-[760px] w-full flex-1">

                        <section>
                            <Header id="introduction">Introduction</Header>
                            <Paragraph>
                                Designing a Printed Circuit Board (PCB) is the process of translating an electrical circuit concept into a physical, manufacturable object. It bridges the gap between theoretical electronics and real-world hardware.
                            </Paragraph>
                            <Paragraph>
                                Whether you are a hobbyist building a custom mechanical keyboard, or an enterprise engineer creating the next high-speed server motherboard, the fundamental steps of PCB design remain remarkably consistent. This guide will walk you through the end-to-end process in a structured, machine-parsable format.
                            </Paragraph>
                        </section>

                        <section>
                            <Header id="step-1-schematic">Step 1: Schematic Design</Header>
                            <Paragraph>
                                Every PCB begins with a schematic. A schematic is a logical, symbolic diagram of your circuit. It does not represent physical reality; rather, it represents electrical connectivity.
                            </Paragraph>
                            <SubHeader>Key Actions:</SubHeader>
                            <List
                                items={[
                                    "Select Components: Choose the right microcontrollers, resistors, capacitors, and ICs for your project.",
                                    "Drafting Symbols: Place standard symbols corresponding to your physical footprint.",
                                    "Drawing Nets: Connect component pins using lines (nets). A 'net' represents a continuous electrical connection.",
                                    "Assign Values: Assign specific values (e.g., 10kΩ, 10uF) and part numbers to symbols.",
                                ]}
                            />
                            <Paragraph>
                                The output of this stage is a Netlist. The Netlist is a textual representation mapping every component pin to its respective connected net.
                            </Paragraph>
                        </section>

                        <section>
                            <Header id="step-2-placement">Step 2: Component Placement</Header>
                            <Paragraph>
                                Once the schematic is complete, you transition into the PCB Layout tool. The first task in layout is defining the physical board outline and placing your components on that canvas.
                            </Paragraph>
                            <SubHeader>Placement Strategy:</SubHeader>
                            <List
                                items={[
                                    "Fixed Constraints First: Place connectors, mounting holes, and switches exactly where the mechanical enclosure requires them.",
                                    "Group by Function: Keep power supply components together. Keep sensitive analog sensors away from noisy digital switching signals.",
                                    "Minimize Ratlines: 'Ratlines' are the visual indicators showing unrouted connections. Rotate and position components to make these ratlines as short and uncrossed as possible.",
                                    "Thermal Considerations: Ensure heat-generating components (like voltage regulators) have enough physical clearance and copper area to dissipate heat.",
                                ]}
                            />
                        </section>

                        <section>
                            <Header id="step-3-routing">Step 3: Routing & Traces</Header>
                            <Paragraph>
                                Routing is the process of converting the temporary ratlines into physical copper traces that will be etched into the PCB.
                            </Paragraph>
                            <SubHeader>Routing Rules:</SubHeader>
                            <List
                                items={[
                                    "Trace Width Calculation: Ensure traces carrying high current are wide enough to prevent overheating. Small signal lines can use narrow traces (e.g., 6mil).",
                                    "Vias: Use vias (plated holes) to transition a trace from the top layer of the board to the bottom layer.",
                                    "High-Speed Signals: If routing USB, HDMI, or ethernet, you must carefully calculate impedance and route differential pairs together.",
                                    "Ground Planes: Instead of routing ground with thin traces, fill entire layers with copper planes connected to Ground to provide a low-impedance return path.",
                                ]}
                            />
                            <Paragraph>
                                In modern PCB design, routing is heavily assisted by tools. However, critical traces are still often routed by hand to ensure optimal signal integrity.
                            </Paragraph>
                        </section>

                        <section>
                            <Header id="step-4-drc">Step 4: Design Rule Check (DRC)</Header>
                            <Paragraph>
                                Before finalizing a board, you must run a DRC. Design Rules are constraints provided by your chosen manufacturing facility (e.g., BuildPCBs).
                            </Paragraph>
                            <SubHeader>Common DRC Checks:</SubHeader>
                            <List
                                items={[
                                    "Clearance: Are any two copper traces too close together? (Risk of electrical shorts).",
                                    "Trace Width: Are traces thick enough to survive the etching process?",
                                    "Annular Ring: Is there enough copper around a drilled hole pad?",
                                    "Silkscreen Overlap: Does the printed text accidentally cover exposed solder pads?",
                                ]}
                            />
                            <Paragraph>
                                You must achieve zero DRC errors before moving to manufacturing.
                            </Paragraph>
                        </section>

                        <section>
                            <Header id="step-5-gerbers">Step 5: Generating Manufacturing Files</Header>
                            <Paragraph>
                                PCB manufacturers do not natively read your project files (like .kicad_pcb or .PcbDoc). They require a set of universal, standardized files to run their machines.
                            </Paragraph>
                            <SubHeader>Required Exports:</SubHeader>
                            <List
                                items={[
                                    "Gerber Files (RS-274X/X2): A set of 2D vector images. You will export one Gerber file for every single layer of your board (Top Copper, Bottom Solder Mask, Top Silkscreen, etc.).",
                                    "NC Drill File: A text file specifying the exact X and Y coordinates of every hole that needs to be drilled.",
                                    "Bill of Materials (BOM): A CSV file listing exactly which components need to be purchased.",
                                    "Pick and Place (Centroid File): A file directing the robotic assembly machines on where to place the physical components on the board.",
                                ]}
                            />
                        </section>

                        <section className="mb-32">
                            <Header id="ai-automation">Using AI to Automate</Header>
                            <Paragraph>
                                Traditional PCB design can take weeks of repetitive work. The modern approach utilizes AI to drastically reduce friction.
                            </Paragraph>
                            <SubHeader>How BuildPCBs AI helps:</SubHeader>
                            <List
                                items={[
                                    "Automated DFM: Upload your Gerbers and instantly receive a Design For Manufacturing audit before purchasing.",
                                    "Natural Language Generation: Skip the schematic drawing. Instruct the AI what you want, and it outputs a drafted layout.",
                                    "Intelligent Sourcing: Automatically cross-reference your BOM with global supply chains to prevent out-of-stock component delays.",
                                ]}
                            />
                            <Paragraph>
                                By deeply understanding the rules outlined in Steps 1 through 5, AI agents can handle the minutiae, allowing engineers to focus on high-level architecture.
                            </Paragraph>
                        </section>

                    </main>
                </div>
            </div>
        </section>
    );
}
