import Hero from "../components/Hero";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center">
      <Hero />
      <ReviewSection />
    </main>
  );
}
