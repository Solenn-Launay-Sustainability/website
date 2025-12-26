import { Contact } from "@/components/section/contact";
import { Formats } from "@/components/section/formats";
import { Hero } from "@/components/section/hero";
import { Journey } from "@/components/section/journey";
import { Testimonials } from "@/components/section/testimonials";
import { Topics } from "@/components/section/topics";
import { Why } from "@/components/section/why";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Why />
      <Journey />
      <Topics />
      <Formats />
      <Testimonials />
      <Contact />
    </main>
  );
}
