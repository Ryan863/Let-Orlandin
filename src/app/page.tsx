import Navbar from "@/components/Navbar";
import MotionRoot from "@/components/MotionRoot";
import Hero from "@/components/Hero";
import Reflection from "@/components/Reflection";
import Specialties from "@/components/Specialties";
import Space from "@/components/Space";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <MotionRoot>
        <Hero />
        <Reflection />
        <Specialties />
        <Space />
        <Reviews />
        <Faq />
        <Location />
        <Footer />
      </MotionRoot>
      <FloatingWhatsApp />
    </div>
  );
}
