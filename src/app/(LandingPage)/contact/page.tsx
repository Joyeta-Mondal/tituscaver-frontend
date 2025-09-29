import ContactBanner from "@/components/features/contactPage/banner/ContactPageBanner";
import MapSection from "@/components/features/contactPage/map/MapSection";
import Contact from "@/components/features/landingPage/contact/Contact";

export default function ContactPage() {
  return (
    <div>
      <main>
        <ContactBanner />
        <MapSection />
        <Contact />
      </main>
    </div>
  );
}
