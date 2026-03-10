import React from "react";
import type { Metadata } from "next";
import HowToDesignClient from "./HowToDesignClient";

export const metadata: Metadata = {
    title: "How to Design a PCB | BuildPCBs.com Blog",
    description: "A highly structured, step-by-step roadmap to designing Printed Circuit Boards. From raw schematics to production-ready manufacturing files.",
    openGraph: {
        title: "How to Design a PCB | BuildPCBs.com Blog",
        description: "A highly structured, step-by-step roadmap to designing Printed Circuit Boards. From raw schematics to production-ready manufacturing files.",
        url: "https://buildpcbs.com/blog/how-to-design-a-pcb",
        siteName: "BuildPCBs.com",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "BuildPCBs.com PCB Design Guide",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Design a PCB | BuildPCBs.com Blog",
        description: "A highly structured, step-by-step roadmap to designing Printed Circuit Boards.",
        images: ["/og-image.png"],
    },
};

const HowToDesignPage = () => {
    return <HowToDesignClient />;
};

export default HowToDesignPage;
