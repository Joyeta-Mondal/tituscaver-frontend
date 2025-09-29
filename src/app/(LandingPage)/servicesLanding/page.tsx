import Expart from "@/components/features/aboutUs/expart/Expart";
import Transactions from "@/components/features/landingPage/transactions/Transactions";
import WhatWeDo from "@/components/features/landingPage/whatWeDo/WhatWeDo";
import ServicesBanner from "@/components/features/Services/banner/ServicesBanner";

export default function ServiceLandingPage() {
  return (
    <div>
      <main>
        <ServicesBanner />
        <WhatWeDo />
        <Transactions />
        <Expart />
      </main>
    </div>
  );
}
