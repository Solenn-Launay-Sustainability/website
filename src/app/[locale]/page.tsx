import { Hero } from "@/components/section/hero";
import { Journey } from "@/components/section/journey";
import { Topics } from "@/components/section/topics";
import { Why } from "@/components/section/why";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Why />
      <Journey />
      <Topics />
    </main>
  );
}
