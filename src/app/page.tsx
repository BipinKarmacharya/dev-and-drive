import Hero from "../components/Hero";
import ReviewSection from "../components/ReviewSection";
import VehicleFinder from "../components/VehicleFinder";
import TechAndGuides from "../components/TechAndGuides";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ReviewSection />
      <VehicleFinder />
      <TechAndGuides />
      <Footer />
    </main>
  );
}