"use client";

import Image from "next/image";
import React from "react";

interface HeroButtonProps {
  text?: string;
  href?: string;
  className?: string;
  showArrow?: boolean;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  text = "Get Started",
  href = "#",
  className = "",
  showArrow = true,
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-full border border-blue-600 bg-white px-7 py-2 font-medium text-blue-600 transition-colors hover:bg-gray-100 ${className}`}
    >
      {text}
      {showArrow && (
        <Image
          width={36}
          height={36}
          className="h-9 w-9"
          src="/images/landingPage/arrowButton.png"
          alt="arrow"
        />
      )}
    </a>
  );
};

export default HeroButton;
