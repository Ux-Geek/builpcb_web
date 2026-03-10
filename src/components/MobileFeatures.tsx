"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import NaturalLanguageSvg from "@/assets/Natural Language.svg";
import BuiltInChecksSvg from "@/assets/Built-In Checks.svg";
import WorkflowSvg from "@/assets/Workflow.svg";
import GodSpeedDesignSvg from "@/assets/God Speed Design.svg";

type Feature = {
  id: string;
  label: string;
  icon?: any;
  variant?: "blue" | "white";
};

const FEATURES: Feature[] = [
  { id: "godspeed", label: "God-Speed Design", variant: "blue", icon: GodSpeedDesignSvg },
  { id: "nl", label: "Natural Language", variant: "white", icon: NaturalLanguageSvg },
  { id: "checks", label: "Built-In Checks", variant: "white", icon: BuiltInChecksSvg },
  { id: "workflow", label: "Workflow", variant: "white", icon: WorkflowSvg },
];

function FeatureCard({ item }: { item: Feature }) {
  const isBlue = item.variant === "blue";

  return (
    <div
      className={[
        "relative w-full aspect-square rounded-[12px] overflow-hidden",
        isBlue
          ? "bg-gradient-to-b from-[#255CFF] to-[#0038DF] border border-[#F5F5F5]"
          : "bg-white dark:bg-[#111111] border border-[rgba(0,56,223,0.54)] dark:border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-none",
      ].join(" ")}
      style={{ transformOrigin: "bottom center" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[144px] h-[144px]">
          {item.icon ? (
            <div className="w-full h-full relative">
              <Image src={item.icon} alt={item.label} fill className="object-contain" priority />
            </div>
          ) : (
            <div
              className={[
                "w-full h-full rounded-[16px]",
                isBlue ? "bg-white/15" : "bg-[#0038DF]/5",
              ].join(" ")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile-only: left mini-nav + right sticky stack of 4 cards.
 * - Left list is tappable (nice UX) AND highlights as you scroll.
 * - Right column stays pinned while you scroll through cards.
 * - Each card scales in from tiny at the base, stacked perfectly.
 */
export default function MobileFeatureStack() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const cardRefs = useRef<HTMLDivElement[]>([]);
  cardRefs.current = [];
  const addCardRef = (el: HTMLDivElement | null) => {
    if (!el) return;
    if (!cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current;

      // Start all cards tiny at the base (bottom), hidden
      gsap.set(cards, { opacity: 0, scale: 0.06, y: 120, transformOrigin: "bottom center" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      cards.forEach((card, i) => {
        tl.addLabel(`card-${i}`, i === 0 ? 0 : "+=1");
        tl.to(
          card,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.55,
            onStart: () => setActive(i),
          },
          `card-${i}`
        );
      });

      const steps = cards.length; // 4 cards
      const end = () => `+=${Math.round(window.innerHeight * (steps + 0.8))}`;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: end(),
        pin: pinRef.current,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: "labelsDirectional",
          duration: { min: 0.08, max: 0.22 },
          delay: 0.02,
          ease: "power1.inOut",
        },
        animation: tl,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const jumpTo = (index: number) => {
    const st = ScrollTrigger.getAll().find((t) => t.trigger === sectionRef.current);
    if (!st) return;

    // Each card is roughly one “step” worth of scroll, so jump proportionally
    // We adjust progress slightly to ensure snapping aligns perfectly
    const progress = index / Math.max(1, FEATURES.length - 1);

    // For ScrollTrigger scrub, we want to scroll the WINDOW position to match the progress inside the trigger area
    const y = st.start + (st.end - st.start) * progress;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef as any} className="lg:hidden w-full bg-white dark:bg-[#111111] relative">
      {/* pinned stage */}
      <div ref={pinRef} className="relative h-[80vh] overflow-hidden px-[13px]">
        {/* This matches your 375px wide concept, but responsive */}
        <div className="mx-auto w-full max-w-[375px] h-full pt-[40px]">
          <div className="flex gap-[12px]">
            {/* LEFT COLUMN (labels) */}
            <div className="w-[139px] flex flex-col items-start gap-[25px]">
              <div className="flex flex-col gap-[3px]">
                {FEATURES.map((f, i) => (
                  <button
                    key={f.id}
                    onClick={() => jumpTo(i)}
                    className="group w-[130px] text-left"
                    type="button"
                  >
                    <div className="flex items-center justify-between gap-[23px] h-[17px]">
                      <span
                        className={[
                          "font-['DM_Sans'] text-[14px] leading-[120%] tracking-[-0.005em] transition-colors",
                          i === active ? "text-[#4F4F4F] dark:text-white" : "text-[#888888] dark:text-[#666666]",
                        ].join(" ")}
                      >
                        {f.label}
                      </span>

                      {/* only show the little divider line on the active item (cleaner) */}
                      <span
                        className={[
                          "h-[1px] w-[9px] transition-all",
                          i === active ? "opacity-100 bg-[#4F4F4F] dark:bg-white" : "opacity-0 bg-[#888888] dark:bg-[#666666]",
                        ].join(" ")}
                      />
                    </div>

                    {/* subtle underline indicator */}
                    <div
                      className={[
                        "mt-[10px] h-[1px] w-full transition-opacity",
                        i === active ? "opacity-20 bg-[#0038DF]" : "opacity-0",
                      ].join(" ")}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN (sticky stacked cards) */}
            <div className="w-[222px] flex flex-col gap-[10px] relative">
              {/* card stage uses stacking so everything shares the same base */}
              <div className="relative w-[222px] h-[221px]">
                {FEATURES.map((item, idx) => (
                  <div
                    key={item.id}
                    ref={addCardRef}
                    className="absolute inset-0"
                    style={{ zIndex: 10 + idx }}
                  >
                    <FeatureCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
