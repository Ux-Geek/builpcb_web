import React from "react";
import Image from "next/image";

import NaturalLanguageSvg from "@/assets/Natural Language.svg";
import BuiltInChecksSvg from "@/assets/Built-In Checks.svg";
import WorkflowSvg from "@/assets/Workflow.svg";
import GodSpeedDesignSvg from "@/assets/God Speed Design.svg";

const featuresData = [
  {
    title: "AI Hardware Compiler",
    description:
      "Describe a device in plain text. The system generates the PCB, schematic, BOM, enclosure, and firmware automatically.",
    image: NaturalLanguageSvg,
  },
  {
    title: "Web3 Manufacturing",
    description:
      "A decentralized network where CNC owners and fabricators stake $BUILD to receive and process jobs.",
    image: BuiltInChecksSvg,
  },
  {
    title: "Closed Marketplace",
    description:
      "Publish your designs to a closed ecosystem. Ownership, logs, and version history are tracked on-chain.",
    image: WorkflowSvg,
  },
  {
    title: "Mobile Execution",
    description:
      "Chat with the AI to design hardware, manage builds, or publish products entirely from your phone.",
    image: GodSpeedDesignSvg,
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  image: any;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  const titleParts = title.split(" ");
  const lastWord = titleParts.pop();
  const restOfTitle = titleParts.join(" ");

  return (
    <div className="group relative p-8 bg-white dark:bg-[#111111] border-[0.5px] border-[#E8E8E8] dark:border-neutral-800 rounded-xl transition-all duration-300 hover:border-transparent dark:hover:border-transparent hover:bg-gradient-to-b hover:from-[#255CFF] hover:to-[#0038DF] shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-none">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center md:items-start">
        <div className="text-left max-w-[476px]">
          <h3 className="font-medium tracking-[-0.005em] text-[#333333] dark:text-gray-200 group-hover:text-white transition-colors duration-300 flex flex-col">
            <span className="text-[24px] leading-[150%]">{restOfTitle}</span>
            <span className="text-[44px] leading-[120%]">{lastWord}</span>
          </h3>
        </div>
        <div className="flex justify-center md:justify-end relative w-full h-[144px]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-[1.05] group-hover:-translate-y-[10px]"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

import MobileFeatures from "@/components/MobileFeatures";

// ... (existing imports and FeatureCard)

const Features = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-0 md:px-6 lg:px-8 py-0 md:py-24 mb-0 md:mb-12">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-8 px-4">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      {/* Mobile View */}
      <MobileFeatures />
    </section>
  );
};

export default Features;
