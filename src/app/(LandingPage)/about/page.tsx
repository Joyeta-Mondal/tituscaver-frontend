import AboutBanner from "@/components/features/aboutUs/banner/AboutBanner";
import AboutUs from "@/components/features/landingPage/aboutUs/AboutUs";
import CustomerSupport from "@/components/features/landingPage/customerSupport/CustomerSupport";
import WhatWeDo from "@/components/features/landingPage/whatWeDo/WhatWeDo";
export default function About() {
  return (
    <div>
      <main>
        <AboutBanner />
        <AboutUs />
        <CustomerSupport />
        <WhatWeDo />
      </main>
    </div>
  );
}
