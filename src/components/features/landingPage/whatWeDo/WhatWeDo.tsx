"use client";

import { services, stats } from "@/app/data/whatWeDo";
import GetStartedButton from "@/components/reusable/GetStartedButton";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-0">
        {/* Services Section */}
        <div className="relative mb-12 pt-18 text-center">
          {/* Stats Card */}
          <div className="absolute -top-50 left-90 z-10 mx-auto mb-16 max-w-4xl rounded-2xl bg-white p-6 shadow-lg lg:p-8">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Trusted by Thousands
            </h3>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span className="text-5xl font-bold text-blue-600">{stat.value}</span>
                    <div className="h-9 w-9">
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
                  <p className="text-md font-medium text-gray-600">{stat.label}</p>

                  {/* Vertical divider except last item in row */}
                  {index !== stats.length - 1 && (
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
          <div className="mb-4 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="2"
                viewBox="0 0 51 2"
                fill="none"
              >
                <path d="M0 1H51" stroke="black" stroke-width="2" />
              </svg>
            </div>
            <span className="px-4 font-medium text-gray-600">Services</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-[#2D6EF0] lg:text-6xl">What We Do</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover how we create value through trust, innovation, and seamless solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#2F80ED] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md lg:p-8"
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
                  {typeof service.icon === "string" ? (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
                <GetStartedButton
                  text="Learn More"
                  href="#"
                  showArrow={true}
                  borderClass="border-[#0051C3]"
                  bgClass="bg-[#2F80ED] hover:bg-[#245cc1]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
