import { Hero } from "@/components/section/hero";
import { Why } from "@/components/section/why";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Why />
    </main>
  );
}
