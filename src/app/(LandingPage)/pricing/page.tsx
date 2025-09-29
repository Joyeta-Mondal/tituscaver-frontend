import ChooseOffer from "@/components/features/landingPage/chooseOffer/ChooseOffer";
import HowItWorks from "@/components/features/landingPage/howItWorks/HowItWorks";
import Transactions from "@/components/features/landingPage/transactions/Transactions";
import PricingBanner from "@/components/features/Pricing/banner/PricingBanner";

export default function PricingPage() {
  return (
    <div>
      <main>
        <PricingBanner />
        <ChooseOffer />
        <Transactions />
        <HowItWorks />
      </main>
    </div>
  );
}
