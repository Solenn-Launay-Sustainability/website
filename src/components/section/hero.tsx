import Image from "next/image";
import { getTranslations } from "next-intl/server";
import heroBg from "@/assets/images/hero-bg.webp";
import profile from "@/assets/images/profile.webp";
import { EcoIndexBadge } from "@/components/eco-index-badge";
import { Button } from "@/components/ui/button";
import { Text, Title } from "@/components/ui/typography";
import { ContactInfo } from "../contact-info";
import { Bold } from "../ui/typography/bold";

async function Hero() {
  const [t, whoAmI] = await Promise.all([
    getTranslations("Hero"),
    getTranslations("WhoAmISection"),
  ]);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4"
      id="hero"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container z-10 grid items-start gap-12 py-20 md:py-32 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <Title as="h1" className="tracking-tight" size="xxl">
              {t.rich("title", {
                strong: (chunks: React.ReactNode) => (
                  <span className="text-primary">{chunks}</span>
                ),
              })}
            </Title>
            <Text className="font-light" size="xxl" variant="muted">
              {t("subtitle")}
            </Text>
          </div>

          <Text className="max-w-2xl leading-relaxed" size="lg">
            {t("description")}
          </Text>

          <div className="max-w-2xl space-y-4">
            <Title as="h2" size="lg">
              {whoAmI("title")}
            </Title>
            <Text>
              {whoAmI.rich("paragraph1", {
                strong: (chunks: React.ReactNode) => <Bold>{chunks}</Bold>,
              })}
            </Text>
            <Text>
              {whoAmI.rich("paragraph2", {
                strong: (chunks: React.ReactNode) => <Bold>{chunks}</Bold>,
              })}
            </Text>
            <Text>
              {whoAmI.rich("paragraph3", {
                strong: (chunks: React.ReactNode) => <Bold>{chunks}</Bold>,
              })}
            </Text>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">{t("getInTouch")}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#journey">{t("discoverMyApproach")}</a>
            </Button>
          </div>
        </div>

        <div className="grid place-items-center space-y-4 lg:sticky lg:top-24">
          <Image
            alt="Profile"
            className="rounded-lg border bg-card/80 shadow-lg backdrop-blur-sm"
            height={250}
            src={profile}
            width={250}
          />
          <ContactInfo />
          <EcoIndexBadge />
        </div>
      </div>
    </section>
  );
}

export { Hero };
