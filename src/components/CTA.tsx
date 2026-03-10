import React from "react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-12 md:py-20">
      {/* Decorative shapes will be added here as images */}

      {/* CTA Content */}
      <h2 className="font-medium text-white text-[32px] w-[367px] md:text-[40px] md:w-[700px] leading-none max-w-full z-10">
        Earn $BUILDp & USDC.
      </h2>
      <p
        className="font-normal text-[17px] leading-[150%] tracking-[-0.005em] mt-6 w-[341px] md:w-[500px] max-w-full z-10"
        style={{ color: "#9FADFF" }}
      >
        Follow socials, check in daily, climb the leaderboard, and win a share of the weekly prize pool — up to $500 USDC every Sunday.
      </p>
      <a
        href="#"
        className="flex items-center justify-center w-[200px] h-[50px] md:w-[240px] rounded-full bg-white mt-8 text-[#777777] font-medium text-base hover:opacity-90 transition-opacity z-10"
      >
        Complete quests.
      </a>
    </section>
  );
};

export default CTA;