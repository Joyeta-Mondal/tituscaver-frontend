"use client";

import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="relative h-screen md:h-[400px] w-full flex justify-center text-center">
      {/* Image background */}
      <Image
        src="/images/landingPage/aboutUs/aboutBanner.png"
        alt="about banner"
        width={1600}
        height={1600}
        quality={100}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/80 to-black/65"></div>

      {/* Banner content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center align-item-center px-8 text-center text-white md:items-start md:text-left lg:px-0">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-7xl">About Us</h1>

        <p className="text-md mt-4 max-w-2xl mx-auto  text-center text-gray-200 md:max-w-3xl md:text-lg lg:max-w-4xl lg:text-2xl">
          Home / About Us
        </p>
      </div>
    </section>
  );
}
