import GetStartedButton from "@/components/reusable/GetStartedButton";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-8 py-12 lg:px-0 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Images Section */}
          <div className="relative">
            <div className="flex gap-4">
              {/* Left Column - Two stacked images */}
              <div className="flex flex-1 flex-col items-center justify-center gap-10">
                <div className="h-48 w-64 overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src="/images/landingPage/aboutUs/aboutUs1.png"
                    alt="Person working on laptop"
                    width={256}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-44 w-60 overflow-hidden rounded-lg bg-gray-200 md:h-48 md:w-64">
                  <Image
                    src="/images/landingPage/aboutUs/aboutUs2.png"
                    alt="Professional woman"
                    width={256}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Single tall image */}
              <div className="relative flex-1">
                <div className="h-[450px] w-[280px] overflow-hidden rounded-lg bg-gray-200 md:h-[500px] md:w-[353px]">
                  <Image
                    src="/images/landingPage/aboutUs/aboutUs3.png"
                    alt="Professional man"
                    width={353}
                    height={475}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Star Rating Badge */}
                <div className="absolute top-42 -left-30 flex flex-col items-center gap-2 rounded-xl bg-[#3462bfeb] px-12 py-12 text-white shadow-lg">
                  <div className="h-8 w-8">
                    <Image
                      src="/images/landingPage/aboutUs/star.png"
                      alt="start"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="text-sm font-semibold">4.9 Star Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="">
            {/* Breadcrumb */}
            <div className="flex gap-2 items-center font-medium text-blue-600">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="2"
                  viewBox="0 0 51 2"
                  fill="none"
                >
                  <path d="M0 1H51" stroke="#2F80ED" strokeWidth="2" />
                </svg>
              </span>{" "}
              About Us
            </div>

            {/* Main Heading */}
            <h1 className="py-2 text-4xl leading-tight font-bold text-gray-900">
              About TrustDeliver
            </h1>

            {/* Description */}
            <p className="text-lg leading-relaxed text-gray-600">
              The secure escrow marketplace platform that revolutionizes online transactions between
              buyers and sellers, providing trusted intermediary services with real-time delivery
              tracking and comprehensive dispute resolution.
            </p>

            {/* Mission Section */}
            <div className="pt-5 pb-8">
              <h2 className="pb-3 text-xl font-bold text-gray-900 lg:text-4xl">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                At TrustDeliver, we believe that online marketplace transactions should be secure,
                transparent, and worry-free. Our platform acts as a trusted intermediary, holding
                funds in escrow until delivery is complete, while providing real-time tracking and
                professional dispute resolution. We're bridging the gap between buyers and sellers
                with technology that builds trust and ensures peace of mind for everyone involved.
              </p>
            </div>

            {/* CTA Button */}
            <GetStartedButton
              text="Get Started"
              href="/signup"
              showArrow={true} // show the arrow
              borderClass="border-[#0051C3]"
              bgClass="bg-[#2d6ef0] hover:bg-[#245cc1]" // custom bg and hover color
            />
          </div>
        </div>
      </div>
    </div>
  );
}
