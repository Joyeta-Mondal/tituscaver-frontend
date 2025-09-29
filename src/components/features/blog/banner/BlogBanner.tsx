"use client";

import Image from "next/image";

export default function BlogBanner({ title = "Blog" }) {
  return (
    <section className="relative flex h-screen w-full justify-center text-center md:h-[600px]">
      {/* Image background */}
      <Image
        src="/images/landingPage/Blog/BlogBanner.png"
        alt="about banner"
        width={1600}
        height={1600}
        quality={100}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/80 to-black/65"></div>

      {/* Banner content */}
      <div className="align-item-center relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-8 text-center text-white md:items-start md:text-left lg:px-0">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-7xl">{title}</h1>

        <p className="text-md mx-auto mt-4 max-w-2xl text-center text-gray-200 md:max-w-3xl md:text-lg lg:max-w-4xl lg:text-2xl">
          Home / {title}
        </p>
      </div>
    </section>
  );
}
