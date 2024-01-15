import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
