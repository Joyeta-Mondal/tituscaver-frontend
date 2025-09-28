"use client";

import Image from "next/image";
import React from "react";

export default function CustomerSupport() {
  return (
    <section className="relative h-full w-full lg:h-[762px]">
      {/* Background Image */}
      <Image
        src="/images/landingPage/CustomerSupport/customerSupport.png"
        alt="Customer Support"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay content goes here */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="items-cenetr flex justify-center gap-8">
          <div>
            <Image width={130} height={130} alt="clock" src="/images/landingPage/hourClock.png" />
          </div>
          <h2 className="text-5xl font-bold lg:text-5xl">
            24/7 Customer
            <br /> Support
          </h2>
        </div>
        <p className="mt-4 max-w-xl text-lg lg:text-xl">
          Our team is available around the clock to assist you with any inquiries or issues.
        </p>
      </div>
    </section>
  );
}
