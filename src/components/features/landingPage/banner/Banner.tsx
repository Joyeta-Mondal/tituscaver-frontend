"use client";

import GetStartedButton from "@/components/reusable/GetStartedButton";

export default function Banner() {
  return (
    <section className="relative h-screen w-full">
      {/* Video background */}
      <video
        src="/images/landingPage/bannerVideo.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/80 to-black/65"></div>

      {/* Banner content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-8 text-center text-white md:items-start md:text-left lg:px-0">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-7xl">
          Secure, Transparent, and
          <br /> Worry-free Online Transactions
        </h1>

        <p className="text-md mt-4 max-w-2xl text-gray-200 md:max-w-3xl md:text-lg lg:max-w-4xl lg:text-2xl">
          TrustDeliver safeguards your online marketplace transactions with escrow protection,
          real-time tracking, and professional dispute resolution.
        </p>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
          <GetStartedButton
            text="Get Started"
            href="/signup"
            showArrow={true}
            bgClass="bg-[#2d6ef0] hover:bg-[#245cc1]"
            borderClass="border-white"
          />

          <GetStartedButton
            text="Download App"
            href="/signup"
            showArrow={true}
            bgClass="hover:bg-[#245cc1]"
            borderClass="border-white"
          />
        </div>
      </div>
    </section>
  );
}
