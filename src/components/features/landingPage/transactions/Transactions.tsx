import GetStartedButton from "@/components/reusable/GetStartedButton";
import Image from "next/image";

export default function Transactions() {
  return (
    <section className="relative w-full px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Image */}
      <Image
        src="/images/landingPage/Shared/Cover.png"
        alt="Transactions Background"
        width={1600}
        height={1600}
        quality={100}
        className="absolute inset-0 z-10 h-full w-full object-cover"
      />

      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 bg-gradient-to-r from-slate-900 to-slate-800"></div>

      <div className="relative z-100 mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
          Ready to Experience Secure Transactions?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-pretty text-gray-200 sm:text-xl">
          Join thousands of businesses who trust our platform for safe, reliable, and efficient
          transaction processing.
        </p>

        {/* Using GetStartedButton with custom styling */}
        <GetStartedButton
          href="/signup"
          showArrow={true}
          bgClass="bg-[#2d6ef0] hover:bg-[#245cc1] focus:bg-[#245cc1]"
          className=""
          borderClass="border-white"
        />
      </div>
    </section>
  );
}
