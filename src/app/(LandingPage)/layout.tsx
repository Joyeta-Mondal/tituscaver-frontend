import Banner from "@/components/features/landingPage/banner/Banner";
import Footer from "@/components/layout/Footer";

import Navbar from "@/components/layout/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Banner />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
