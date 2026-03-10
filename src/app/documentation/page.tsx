import React from "react";
import type { Metadata } from "next";
import DocumentationClient from "./DocumentationClient";

export const metadata: Metadata = {
  title: "Documentation | BuildPCBs.com",
  description: "High-performance hardware manufacturing powered by AI. Design, simulate, validate, and ship production-ready PCBs in record time.",
  openGraph: {
    title: "Documentation | BuildPCBs.com",
    description: "High-performance hardware manufacturing powered by AI. Design, simulate, validate, and ship production-ready PCBs in record time.",
    url: "https://buildpcbs.com/documentation",
    siteName: "BuildPCBs.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildPCBs.com Documentation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation | BuildPCBs.com",
    description: "High-performance hardware manufacturing powered by AI. Design, simulate, validate, and ship production-ready PCBs in record time.",
    images: ["/og-image.png"],
  },
};

const DocumentationPage = () => {
  return <DocumentationClient />;
};

export default DocumentationPage;
