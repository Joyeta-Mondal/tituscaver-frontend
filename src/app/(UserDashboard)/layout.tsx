import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default UserDashboardLayout;
