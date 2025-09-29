import GetStartedButton from "@/components/reusable/GetStartedButton";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Images Section */}
          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Left Column - Two stacked images */}
              <div className="flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
                <div className="h-32 w-full overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-56 md:h-48 md:w-64 lg:w-64">
                  <Image
                    src="/images/landingPage/aboutUs/aboutUs1.png"
                    alt="Person working on laptop"
                    width={256}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-32 w-full overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-52 md:h-44 md:w-60 lg:w-60">
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
                <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-200 sm:h-80 sm:w-52 md:h-[450px] md:w-[280px] lg:h-[500px] lg:w-[353px]">
                  <Image
                    src="/images/landingPage/aboutUs/aboutUs3.png"
                    alt="Professional man"
                    width={353}
                    height={475}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Star Rating Badge */}
                <div className="absolute -right-4 -bottom-4 flex flex-col items-center gap-1 rounded-lg bg-[#3462bfeb] px-4 py-4 text-white shadow-lg sm:-right-6 sm:-bottom-6 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-6 md:-right-8 md:-bottom-8 md:px-8 md:py-8">
                  <div className="h-6 w-6 sm:h-8 sm:w-8">
                    <Image
                      src="/images/landingPage/aboutUs/star.png"
                      alt="star"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="text-xs font-semibold sm:text-sm md:text-base">
                    4.9 Star Rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 font-medium text-blue-600">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="2"
                  viewBox="0 0 32 2"
                  fill="none"
                  className="sm:w-40 md:w-51"
                >
                  <path d="M0 1H32" stroke="#2F80ED" strokeWidth="2" />
                </svg>
              </span>
              About Us
            </div>

            {/* Main Heading */}
            <h1 className="py-2 text-3xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl">
              About TrustDeliver
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              The secure escrow marketplace platform that revolutionizes online transactions between
              buyers and sellers, providing trusted intermediary services with real-time delivery
              tracking and comprehensive dispute resolution.
            </p>

            {/* Mission Section */}
            <div className="pt-4 pb-6 sm:pt-5 sm:pb-8">
              <h2 className="pb-2 text-xl font-bold text-gray-900 sm:pb-3 sm:text-2xl md:text-3xl lg:text-4xl">
                Our Mission
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                At TrustDeliver, we believe that online marketplace transactions should be secure,
                transparent, and worry-free. Our platform acts as a trusted intermediary, holding
                funds in escrow until delivery is complete, while providing real-time tracking and
                professional dispute resolution. We&apos;re bridging the gap between buyers and
                sellers with technology that builds trust and ensures peace of mind for everyone
                involved.
              </p>
            </div>

            {/* CTA Button */}
            <GetStartedButton
              text="Get Started"
              href="/signup"
              showArrow={true}
              borderClass="border-[#0051C3]"
              bgClass="bg-[#2d6ef0] hover:bg-[#245cc1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
