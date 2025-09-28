"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // 👈 hamburger/close icons
import GetStartedButton from "../reusable/GetStartedButton";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/servicesLanding" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full py-6 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 lg:px-0">
        {/* Logo */}
        <div className="h-9 w-30">
          <Image
            className="h-full w-full"
            width={120}
            height={36}
            src="/images/icon.jpg"
            alt="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-lg font-medium transition-colors ${
                  isActive ? "text-white" : "text-[#919EAB] hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left transform bg-white transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <GetStartedButton
            text="Login"
            href="/signup"
            showArrow={false}
            borderClass="border-[#0051C3]"
            bgClass="hover:bg-[#245cc1]"
          />
          <GetStartedButton
            text="Contact"
            href="/signup"
            showArrow={false}
            borderClass="border-[#0051C3]"
            bgClass="bg-[#0051C3] hover:bg-[#245cc1]"
          />
        </div>

        {/* Mobile Hamburger */}
        <button className="cursor-pointer text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 px-6 py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium ${
                    isActive ? "text-[#2d6ef0]" : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)} // close on click
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <GetStartedButton
              text="Login"
              href="/signup"
              showArrow={false}
              borderClass="border-[#0051C3]"
              bgClass="hover:bg-[#245cc1]"
              className="w-full"
            />
            <GetStartedButton
              text="Contact"
              href="/signup"
              showArrow={false}
              borderClass="border-[#0051C3]"
              bgClass="bg-[#0051C3] hover:bg-[#245cc1]"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
