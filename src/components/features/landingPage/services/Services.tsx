"use client";

import { stats } from "@/app/data/whatWeDo";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Services Section */}
        <div className="relative mb-12 pt-16 text-center sm:pt-18">
          {/* Stats Card */}
          <div className="absolute -top-29 left-1/2 z-10 mx-auto mb-16 w-[90%] max-w-4xl -translate-x-1/2 rounded-2xl bg-white p-4 shadow-lg sm:p-6 md:p-6 lg:p-8">
            <h3 className="mb-6 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Trusted by Thousands
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="mb-2 flex items-center justify-center gap-1 sm:gap-2">
                    <span className="text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">
                      {stat.value}
                    </span>
                    <div className="h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9">
                      {stat.hasIcon && (
                        <Image
                          width={36}
                          height={36}
                          src="/images/landingPage/aboutUs/star.png"
                          alt="star"
                          className="h-full w-full"
                        />
                      )}
                    </div>
                  </div>
                  <p className="md:text-md text-xs font-medium text-gray-600 sm:text-sm">
                    {stat.label}
                  </p>

                  {/* Vertical divider except last item in row */}
                  {index !== 1 && index !== 3 && (
                    <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 lg:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="85"
                        viewBox="0 0 2 85"
                        fill="none"
                      >
                        <path d="M1 0L0.999996 85" stroke="#2F80ED" strokeWidth="0.5" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
