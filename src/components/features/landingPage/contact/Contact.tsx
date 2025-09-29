"use client";

import Image from "next/image";
import type React from "react";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-[#FFFFFF] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-0.5 w-12 bg-gray-900"></div>
            <span className="text-sm font-medium tracking-wide text-black uppercase">
              Contact Us
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-blue-500 md:text-4xl lg:text-5xl">
            Feel free to Contact With Us
          </h2>
        </div>

        {/* Contact Form and Image */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={5}
                  className="flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              {/* Submit Button - Always Blue Background */}
              <div className="block">
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-full bg-blue-600 bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Submit now
                </button>
              </div>
            </form>
          </div>

          {/* Contact Image */}
          <div className="order-1 lg:order-2">
            <div className="relative z-10 h-full w-full">
              <Image
                src="/images/landingPage/Shared/contactBoy.png"
                alt="Professional businessman working at desk"
                width={600}
                height={600}
                quality={100}
                className="h-auto w-full rounded-lg border border-gray-300 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
