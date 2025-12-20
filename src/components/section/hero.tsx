import Image from "next/image";
import { getTranslations } from "next-intl/server";
import heroBg from "@/assets/images/hero-bg.webp";
import profile from "@/assets/images/profile.webp";
import { EcoIndexBadge } from "@/components/eco-index-badge";
import { Button } from "@/components/ui/button";
import { ContactInfo } from "../contact-info";

async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4"
      id={Hero.name}
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

      {/* Content */}
      <div className="container z-10 grid items-start gap-12 py-20 md:py-32 lg:grid-cols-[1fr_auto]">
        {/* Main Content */}
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">
              {t.rich("title", {
                strong: (chunks: React.ReactNode) => (
                  <span className="text-primary">{chunks}</span>
                ),
              })}
            </h1>
            <p className="font-light text-muted-foreground text-xl md:text-2xl">
              {t("subtitle")}
            </p>
          </div>

          <p className="max-w-2xl text-foreground/90 text-lg leading-relaxed md:text-xl">
            {t("description")}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">{t("getInTouch")}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#journey">{t("discoverMyApproach")}</a>
            </Button>
          </div>
        </div>

        {/* Contact Card */}
        <div className="grid place-items-center space-y-4 lg:sticky lg:top-24">
          <Image
            alt="Profile"
            className="rounded-lg border bg-card/80 shadow-lg backdrop-blur-sm"
            height={300}
            src={profile}
            width={300}
          />
          <ContactInfo />
          <EcoIndexBadge />
        </div>
      </div>
    </section>
  );
}

export { Hero };
