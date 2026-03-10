"use client";

import React, { useState, useEffect } from "react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "quickstart", title: "Quickstart" },
  { id: "core-features", title: "Core Platform Features" },
  { id: "tech-specs", title: "Technical Specifications" },
  { id: "manufacturing", title: "Manufacturing & Assembly" },
  { id: "pricing", title: "Pricing & Quoting" },
  { id: "api-integration", title: "API & Developer Integration" },
  { id: "security", title: "Security & Compliance" },
  { id: "builders", title: "$BUILDers Ecosystem" },
  { id: "ai-pcb", title: "AI PCB Generation (Beta)" },
  { id: "roadmap", title: "Roadmap" },
  { id: "support", title: "Support" },
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

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-[#F8F9FA] dark:bg-[#111111] border border-[#EAEAEA] dark:border-neutral-800 rounded-xl p-5 my-6 overflow-x-auto text-[13px] text-[#444444] dark:text-gray-300 font-mono shadow-sm">
    <code>{children}</code>
  </pre>
);

export default function DocumentationClient() {
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
    // Trigger once on load
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // space for fixed navbar
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveSection(id);
  };

  return (
    <section className="w-full min-h-screen bg-white dark:bg-black py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-left mt-[25px] mb-16 lg:mb-24 px-0 lg:px-4">
          <h1
            className="text-[40px] md:text-[52px] font-medium text-[#444444] dark:text-white tracking-[-0.02em] leading-[1.1]"
          >
            Documentation
          </h1>
          <p
            className="text-[18px] md:text-[20px] font-normal text-gray-500 dark:text-gray-400 mt-4 leading-[1.4]"
          >
            High-performance hardware manufacturing powered by AI. <br className="hidden md:block" />
            Design, simulate, validate, and ship production-ready PCBs in record time.
          </p>
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
              <nav className="space-y-1 pl-2">
                {sections.map((sec) => (
                  <div
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="group relative cursor-pointer py-2.5 outline-none"
                  >
                    <div
                      className={`absolute -left-4 top-1/2 -translate-y-1/2 w-[3px] h-[18px] rounded-r-full transition-all duration-300 ${activeSection === sec.id
                        ? "bg-[#0038DF] opacity-100"
                        : "bg-transparent opacity-0 group-hover:bg-[#DDE2FF] dark:group-hover:bg-[#0038DF]/50 group-hover:opacity-100"
                        }`}
                    ></div>
                    <div
                      className={`transition-all duration-300 ${activeSection === sec.id
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
                BuildPCBs AI is a developer-first hardware infrastructure
                platform that automates PCB validation, DFM analysis, quoting,
                and manufacturing orchestration.
              </Paragraph>
              <Paragraph>We combine:</Paragraph>
              <List
                items={[
                  "AI-driven design validation",
                  "Instant DFM (Design for Manufacturing) feedback",
                  "Automated quoting",
                  "Manufacturing partner routing",
                  "Programmatic API access",
                ]}
              />
              <Paragraph>
                <strong>Our goal is simple:</strong> Hardware, deployed like
                software.
              </Paragraph>
            </section>

            <section>
              <Header id="quickstart">Quickstart</Header>

              <SubHeader>How do I get started?</SubHeader>
              <ol className="list-decimal list-outside ml-5 space-y-2 text-[16px] text-[#777777] dark:text-gray-400 mb-6 leading-[1.6]">
                <li className="pl-2">Create an account.</li>
                <li className="pl-2">Verify your email.</li>
                <li className="pl-2">Create a new project.</li>
                <li className="pl-2">Upload your Gerber files and BOM.</li>
                <li className="pl-2">Review AI validation report.</li>
                <li className="pl-2">Confirm manufacturing order.</li>
              </ol>
              <Paragraph>
                You can go from upload → production-ready in minutes.
              </Paragraph>

              <SubHeader>What do I need before uploading?</SubHeader>
              <List
                items={[
                  "Gerber files (RS-274X or X2 recommended)",
                  "Drill file (.drl or Excellon)",
                  "BOM (CSV, XLSX, or JSON)",
                  "Pick & Place file (optional but recommended for assembly)",
                ]}
              />

              <SubHeader>Can I start without Gerbers?</SubHeader>
              <Paragraph>Yes. You can:</Paragraph>
              <List
                items={[
                  "Upload KiCad project files",
                  "Upload Altium exports",
                  "Import ODB++",
                  "Use our upcoming AI schematic-to-PCB generator",
                ]}
              />
            </section>

            <section>
              <Header id="core-features">Core Platform Features</Header>

              <SubHeader>What is AI-Driven DFM?</SubHeader>
              <Paragraph>Our system analyzes:</Paragraph>
              <List
                items={[
                  "Trace width & Copper spacing",
                  "Annular ring size & Via dimensions",
                  "Layer stack alignment",
                  "Solder mask clearance",
                  "Silkscreen overlap",
                  "Drill tolerances",
                ]}
              />
              <Paragraph>
                You receive a pass/fail report plus suggested corrections.
              </Paragraph>

              <SubHeader>
                What makes BuildPCBs different from traditional board houses?
              </SubHeader>
              <Paragraph>
                <strong className="text-[#444] dark:text-gray-200">
                  Traditional manufacturers:
                </strong>{" "}
                Review manually, Provide delayed feedback, Require email
                communication.
              </Paragraph>
              <Paragraph>
                <strong className="text-[#444] dark:text-gray-200">
                  BuildPCBs:
                </strong>{" "}
                Instant automated analysis, Structured error reporting, Real-time
                quote updates, API-driven manufacturing.
              </Paragraph>

              <SubHeader>Is this a PCB design tool?</SubHeader>
              <Paragraph>
                No. We are not replacing KiCad or Altium. We are the
                infrastructure layer between:{" "}
                <strong className="text-[#444] dark:text-gray-200 font-medium">
                  EDA → Manufacturing → Logistics
                </strong>
                .
              </Paragraph>
            </section>

            <section>
              <Header id="tech-specs">Technical Specifications</Header>

              <SubHeader>What are the minimum trace/space requirements?</SubHeader>
              <Paragraph>Standard: 3mil / 3mil</Paragraph>
              <Paragraph>
                Advanced HDI: 2mil / 2mil (upon engineering review)
              </Paragraph>

              <SubHeader>What copper thicknesses are supported?</SubHeader>
              <List
                items={[
                  "1oz standard",
                  "2oz heavy copper",
                  "Custom stackups available on request",
                ]}
              />

              <SubHeader>How many layers are supported?</SubHeader>
              <List
                items={[
                  "2-layer",
                  "4-layer",
                  "6-layer",
                  "8-layer",
                  "10+ layer custom builds",
                ]}
              />

              <SubHeader>What board thicknesses are available?</SubHeader>
              <List
                items={[
                  "0.6mm",
                  "0.8mm",
                  "1.0mm",
                  "1.6mm (standard)",
                  "Custom thickness available",
                ]}
              />

              <SubHeader>What surface finishes are supported?</SubHeader>
              <List
                items={["HASL (Lead-Free)", "ENIG", "Immersion Silver", "OSP"]}
              />

              <SubHeader>What file formats are supported?</SubHeader>
              <List
                items={[
                  "Gerber RS-274X",
                  "Gerber X2",
                  "ODB++",
                  "Excellon drill",
                  "CSV BOM",
                  "XLSX BOM",
                  "KiCad native exports",
                  "Altium exports",
                ]}
              />

              <SubHeader>Do you validate impedance-controlled designs?</SubHeader>
              <Paragraph>
                Yes. You can specify impedance requirements in your stackup, and
                our system verifies trace geometry against standard impedance
                models.
              </Paragraph>

              <SubHeader>Can I run simulations before manufacturing?</SubHeader>
              <Paragraph>
                Yes. We support Basic electrical rule checks, Layer consistency
                analysis, Clearance analysis, and Thermal region detection
                (beta). Advanced signal integrity simulation coming soon.
              </Paragraph>
            </section>

            <section>
              <Header id="manufacturing">Manufacturing & Assembly</Header>

              <SubHeader>Do you offer PCB Assembly (PCBA)?</SubHeader>
              <Paragraph>
                Yes. We provide SMT assembly, Through-hole assembly, Mixed
                assembly, and Full turnkey sourcing.
              </Paragraph>

              <SubHeader>Do you source components?</SubHeader>
              <Paragraph>
                Yes. We integrate with Digi-Key, Mouser, LCSC, and Arrow.
                Component availability is validated during quote.
              </Paragraph>

              <SubHeader>What is Box Build?</SubHeader>
              <Paragraph>
                Box Build includes PCB assembly, Enclosure integration, Cable
                harnesses, Mechanical mounting, and Final testing.
              </Paragraph>

              <SubHeader>What are typical lead times?</SubHeader>
              <Paragraph>
                Prototypes: 2–4 business days. Small batch production: 5–10
                business days. Large volume: Based on supply chain availability.
              </Paragraph>

              <SubHeader>Do you ship internationally?</SubHeader>
              <Paragraph>Yes. We ship globally via DHL, FedEx, and UPS.</Paragraph>

              <SubHeader>Can I track my order?</SubHeader>
              <Paragraph>
                Yes. You receive Manufacturing status, Assembly status, Shipping
                tracking, and Delivery ETA in the dashboard.
              </Paragraph>
            </section>

            <section>
              <Header id="pricing">Pricing & Quoting</Header>

              <SubHeader>How are quotes calculated?</SubHeader>
              <Paragraph>
                Pricing is based on Layer count, Board dimensions, Quantity,
                Surface finish, Copper weight, Assembly complexity, and Component
                sourcing risk. Quotes update instantly when you modify parameters.
              </Paragraph>

              <SubHeader>Is there a minimum order quantity (MOQ)?</SubHeader>
              <Paragraph>
                No strict MOQ. Prototype runs start at 1–5 units.
              </Paragraph>

              <SubHeader>Are there setup fees?</SubHeader>
              <Paragraph>
                No hidden fees. All pricing is transparent in the quote breakdown.
              </Paragraph>
            </section>

            <section>
              <Header id="api-integration">API & Developer Integration</Header>

              <SubHeader>Is there a BuildPCBs API?</SubHeader>
              <Paragraph>
                Yes. You can Upload files programmatically, Trigger DFM analysis,
                Generate quotes, Create manufacturing orders, and Track production
                status.
              </Paragraph>

              <SubHeader>What does authentication look like?</SubHeader>
              <Paragraph>Bearer token authentication. Example:</Paragraph>
              <CodeBlock>Authorization: Bearer bp_live_xxxxxxxxx</CodeBlock>

              <SubHeader>Base API URL</SubHeader>
              <CodeBlock>https://api.buildpcbs.ai</CodeBlock>

              <SubHeader>Example: Trigger Quote</SubHeader>
              <CodeBlock>
                {`POST /v1/quotes

Body:
{
  "projectId": "abc123",
  "quantity": 100,
  "assembly": true
}`}
              </CodeBlock>

              <SubHeader>Can I automate production from CI/CD?</SubHeader>
              <Paragraph>
                Yes. BuildPCBs is designed for hardware teams shipping rapidly.
                You can integrate manufacturing into your pipeline.
              </Paragraph>
            </section>

            <section>
              <Header id="security">Security & Compliance</Header>

              <SubHeader>Are my designs confidential?</SubHeader>
              <Paragraph>
                Yes. End-to-end encryption, Secure storage, Optional NDA
                agreement, and Private manufacturing routing.
              </Paragraph>

              <SubHeader>Do you support ITAR or restricted builds?</SubHeader>
              <Paragraph>
                Enterprise customers can request controlled routing.
              </Paragraph>
            </section>

            <section>
              <Header id="builders">$BUILDers Ecosystem</Header>

              <SubHeader>What is the $BUILD token?</SubHeader>
              <Paragraph>
                The $BUILD token is part of our community incentive layer. It is
                not required to use BuildPCBs AI.
              </Paragraph>

              <SubHeader>What is the Anti-Rug Dashboard?</SubHeader>
              <Paragraph>
                A transparency system showing Liquidity locks, Token supply, and
                Distribution milestones.
              </Paragraph>

              <SubHeader>How does vesting work?</SubHeader>
              <Paragraph>
                You can view token unlock schedule inside the dashboard under
                $BUILDers.
              </Paragraph>
            </section>

            <section>
              <Header id="ai-pcb">AI PCB Generation (Beta)</Header>

              <SubHeader>Can AI generate a PCB from a prompt?</SubHeader>
              <Paragraph>Yes (Beta).</Paragraph>
              <Paragraph>
                Example: &quot;Design a 5V USB-C regulated power board with status LED.&quot;
              </Paragraph>
              <Paragraph>
                System generates: Schematic draft, PCB layout, BOM suggestion, DFM
                pre-check.
              </Paragraph>

              <SubHeader>Can I edit the AI-generated board?</SubHeader>
              <Paragraph>
                Yes. You can export to KiCad, Altium, and ODB++.
              </Paragraph>
            </section>

            <section>
              <Header id="roadmap">Roadmap</Header>
              <List
                items={[
                  "Advanced signal integrity simulation",
                  "AI auto-routing optimization",
                  "Embedded firmware validation",
                  "Real-time component substitution engine",
                  "Manufacturing partner network expansion",
                ]}
              />
            </section>

            <section className="mb-32">
              <Header id="support">Support</Header>

              <SubHeader>How do I contact support?</SubHeader>
              <List
                items={[
                  "Dashboard ticket system",
                  "Email support@buildpcbs.ai",
                  "Enterprise Slack integration (upon request)",
                ]}
              />
            </section>

          </main>
        </div>
      </div>
    </section>
  );
}
