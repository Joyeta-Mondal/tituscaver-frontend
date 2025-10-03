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
            <div className="flex items-center gap-2 font-medium text-blue-600">
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

// import GetStartedButton from "@/components/reusable/GetStartedButton";
// import Image from "next/image";
// import React from "react";

// export default function AboutUs() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-16 lg:px-0 lg:py-24">
//         <div className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
//           {/* Images Section */}
//           <div className="relative">
//             <div className="flex flex-col gap-8 md:flex-row md:gap-6">
//               {/* Left Column - Two stacked images */}
//               <div className="flex flex-1 flex-row items-center justify-center gap-6 md:flex-col md:gap-10">
//                 <div className="h-40 w-48 overflow-hidden rounded-lg bg-gray-200 sm:h-44 sm:w-56 md:h-48 md:w-64">
//                   <Image
//                     src="/images/landingPage/aboutUs/aboutUs1.png"
//                     alt="Person working on laptop"
//                     width={256}
//                     height={192}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//                 <div className="h-36 w-44 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-52 md:h-48 md:w-64">
//                   <Image
//                     src="/images/landingPage/aboutUs/aboutUs2.png"
//                     alt="Professional woman"
//                     width={256}
//                     height={192}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Right Column - Single tall image */}
//               <div className="relative flex flex-1 justify-center md:justify-start">
//                 <div className="h-[320px] w-[220px] overflow-hidden rounded-lg bg-gray-200 sm:h-[400px] sm:w-[260px] md:h-[500px] md:w-[353px]">
//                   <Image
//                     src="/images/landingPage/aboutUs/aboutUs3.png"
//                     alt="Professional man"
//                     width={353}
//                     height={475}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-42 -left-30 flex flex-col items-center gap-2 rounded-xl bg-[#3462bfeb] px-12 py-12 text-white shadow-lg md:top-40 md:-left-28 md:translate-x-0 md:px-12 md:py-12">
//                   <div className="h-6 w-6 sm:h-8 sm:w-8">
//                     <Image
//                       src="/images/landingPage/aboutUs/star.png"
//                       alt="star"
//                       width={32}
//                       height={32}
//                     />
//                   </div>
//                   <span className="text-xs font-semibold sm:text-sm md:text-base">
//                     4.9 Star Rating
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="text-center md:text-left">
//             {/* Breadcrumb */}
//             <div className="flex items-center justify-center gap-2 font-medium text-blue-600 md:justify-start">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="40"
//                   height="2"
//                   viewBox="0 0 51 2"
//                   fill="none"
//                 >
//                   <path d="M0 1H51" stroke="#2F80ED" strokeWidth="2" />
//                 </svg>
//               </span>
//               About Us
//             </div>

//             {/* Main Heading */}
//             <h1 className="py-2 text-2xl leading-snug font-bold text-gray-900 sm:text-3xl md:text-4xl">
//               About TrustDeliver
//             </h1>

//             {/* Description */}
//             <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
//               The secure escrow marketplace platform that revolutionizes online transactions between
//               buyers and sellers, providing trusted intermediary services with real-time delivery
//               tracking and comprehensive dispute resolution.
//             </p>

//             {/* Mission Section */}
//             <div className="pt-5 pb-8">
//               <h2 className="pb-3 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl lg:text-4xl">
//                 Our Mission
//               </h2>
//               <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
//                 At TrustDeliver, we believe that online marketplace transactions should be secure,
//                 transparent, and worry-free. Our platform acts as a trusted intermediary, holding
//                 funds in escrow until delivery is complete, while providing real-time tracking and
//                 professional dispute resolution. We're bridging the gap between buyers and sellers
//                 with technology that builds trust and ensures peace of mind for everyone involved.
//               </p>
//             </div>

//             {/* CTA Button */}
//             <div className="flex justify-center md:justify-start">
//               <GetStartedButton
//                 text="Get Started"
//                 href="/signup"
//                 showArrow={true}
//                 borderClass="border-[#0051C3]"
//                 bgClass="bg-[#2d6ef0] hover:bg-[#245cc1]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
