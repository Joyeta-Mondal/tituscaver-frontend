import AboutUs from "@/components/features/landingPage/aboutUs/AboutUs";
import Banner from "@/components/features/landingPage/banner/Banner";
import ChooseOffer from "@/components/features/landingPage/chooseOffer/ChooseOffer";
import ClientsReview from "@/components/features/landingPage/clientsReview/ClientsReview";
import Contact from "@/components/features/landingPage/contact/Contact";
import CustomerSupport from "@/components/features/landingPage/customerSupport/CustomerSupport";
import FAQ from "@/components/features/landingPage/faq/FAQ";
import HowItWorks from "@/components/features/landingPage/howItWorks/HowItWorks";
import Latest from "@/components/features/landingPage/latest/Latest";
import Transactions from "@/components/features/landingPage/transactions/Transactions";
import WhatWeDo from "@/components/features/landingPage/whatWeDo/WhatWeDo";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner />
        <AboutUs />
        <CustomerSupport pageType="landing" />
        <WhatWeDo />
        <HowItWorks />
        <FAQ />
        <ChooseOffer />
        <ClientsReview pageType="landing" />
        <Transactions />
        <Contact />
        <Latest />
      </main>
    </div>
  );
}
