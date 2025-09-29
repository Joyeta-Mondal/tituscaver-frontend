import AboutBanner from "@/components/features/aboutUs/banner/AboutBanner";
import Expart from "@/components/features/aboutUs/expart/Expart";
import AboutUs from "@/components/features/landingPage/aboutUs/AboutUs";
import ClientsReview from "@/components/features/landingPage/clientsReview/ClientsReview";
import CustomerSupport from "@/components/features/landingPage/customerSupport/CustomerSupport";
import FAQ from "@/components/features/landingPage/faq/FAQ";
import HowItWorks from "@/components/features/landingPage/howItWorks/HowItWorks";
import Services from "@/components/features/landingPage/services/Services";
import Transactions from "@/components/features/landingPage/transactions/Transactions";

export default function About() {
  return (
    <div>
      <main>
        <AboutBanner />
        <AboutUs />
        <CustomerSupport />
        <Services />
        <HowItWorks />
        <FAQ />
        <ClientsReview pageType="about" />
        <Transactions />
        <Expart />
      </main>
    </div>
  );
}
