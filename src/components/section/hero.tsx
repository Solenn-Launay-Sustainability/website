import { Mail, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import heroBg from "@/assets/images/hero-bg.webp";
import { Linkedin } from "@/components/icons/linkedin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

async function Hero() {
  const t = await getTranslations("Hero");

  const contactInfo = {
    email: "launaysolenn@yahoo.fr",
    linkedin: "https://www.linkedin.com/in/solenn-launay/",
    phone: "+44(0) 749.334.3282",
  };

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
      <div className="container z-10 flex gap-12 py-20 max-lg:flex-col md:py-32">
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
        <div className="max-h-fit space-y-4 rounded-lg border bg-card/80 p-6 shadow-lg backdrop-blur-sm sm:max-w-fit">
          <Badge className="w-full justify-center py-2" variant="secondary">
            {t("ecoDesigned")}
          </Badge>

          <div className="space-y-3 pt-2">
            <a
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
              href={`tel:${contactInfo.phone
                .replace(/\(0\)/, "")
                .replace(/[^+\d]/g, "")}`}
            >
              <Phone className="size-4" />
              <span>{contactInfo.phone}</span>
            </a>

            <a
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
              href={`mailto:${contactInfo.email}`}
            >
              <Mail className="size-4" />
              <span>{contactInfo.email}</span>
            </a>

            <a
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
              href={contactInfo.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="size-4" />
              <span>{t("linkedinProfile")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
