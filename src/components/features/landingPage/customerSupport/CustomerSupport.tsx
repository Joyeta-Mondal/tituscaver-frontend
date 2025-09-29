"use client";

import Image from "next/image";

interface CustomerSupportProps {
  pageType?: "landing" | "about";
}

export default function CustomerSupport({ pageType = "landing" }: CustomerSupportProps) {
  return (
    <section className="relative h-full min-h-[400px] w-full sm:min-h-[500px] md:min-h-[600px] lg:h-[762px]">
      {/* Background Image */}
      <Image
        src="/images/landingPage/CustomerSupport/customerSupport.png"
        alt="Customer Support"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay content goes here */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:gap-8">
          <div className="flex-shrink-0">
            <Image
              width={60}
              height={60}
              alt="clock"
              src="/images/landingPage/hourClock.png"
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-[130px] md:w-[130px]"
            />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            24/7 Customer
            <br /> Support
          </h2>
        </div>
        <p className="mt-4 max-w-xs text-sm sm:max-w-sm sm:text-base md:max-w-md md:text-lg lg:max-w-xl lg:text-xl">
          Our team is available around the clock to assist you with any inquiries or issues.
        </p>
      </div>
    </section>
  );
}
