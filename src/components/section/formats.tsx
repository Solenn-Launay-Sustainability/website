import { PlusCircle, Presentation, Users, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";
import biodiversityCollage from "@/assets/images/biodiversity-collage.webp";
import circularEconomy from "@/assets/images/circular-economy.webp";
import climateFresk from "@/assets/images/climate-fresk.webp";
import climatePitch from "@/assets/images/climate-pitch.svg";
import foodFresk from "@/assets/images/food-fresk.svg";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Logo } from "../logo";

async function Formats() {
  const t = await getTranslations("FormatsSection");

  const formats = [
    {
      bullets: [
        t("formats.conference.bullet1"),
        t("formats.conference.bullet2"),
        t("formats.conference.bullet3"),
      ],
      description: t("formats.conference.description"),
      duration: t("formats.conference.duration"),
      examples: [
        {
          img: climatePitch,
          name: t("formats.conference.example1"),
          url: "https://planetonstage.org/en/pitches/climate-pitch",
        },
        {
          img: circularEconomy,
          name: t("formats.conference.example2"),
          url: "https://www.lafresquedeleconomiecirculaire.com/en/home",
        },
      ],
      Icon: Presentation,
      title: t("formats.conference.title"),
    },
    {
      bullets: [
        t("formats.cardBased.bullet1"),
        t("formats.cardBased.bullet2"),
        t("formats.cardBased.bullet3"),
      ],
      description: t("formats.cardBased.description"),
      duration: t("formats.cardBased.duration"),
      examples: [
        {
          img: climateFresk,
          name: t("formats.cardBased.example1"),
          url: "https://climatefresk.org/world/",
        },
        {
          img: biodiversityCollage,
          name: t("formats.cardBased.example2"),
          url: "https://www.fresquedelabiodiversite.org/en.html",
        },
        {
          img: circularEconomy,
          name: t("formats.cardBased.example3"),
          url: "https://www.lafresquedeleconomiecirculaire.com/en/home",
        },
        {
          img: foodFresk,
          name: t("formats.cardBased.example4"),
          url: "https://www.lafresquedeleconomiecirculaire.com/en/home",
        },
      ],
      Icon: Users,
      title: t("formats.cardBased.title"),
    },
    {
      bullets: [
        t("formats.bespoke.bullet1"),
        t("formats.bespoke.bullet2"),
        t("formats.bespoke.bullet3"),
      ],
      description: t("formats.bespoke.description"),
      duration: t("formats.bespoke.duration"),
      Icon: Wrench,
      title: t("formats.bespoke.title"),
    },
    {
      bullets: [
        t("formats.addOn.bullet1"),
        t("formats.addOn.bullet2"),
        t("formats.addOn.bullet3"),
      ],
      description: t("formats.addOn.description"),
      duration: t("formats.addOn.duration"),
      Icon: PlusCircle,
      title: t("formats.addOn.title"),
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl space-y-12" id="formats">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            {t("header.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("header.description")}
          </p>
        </div>

        {/* Format Cards - Desktop Grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2">
          {formats.map((format) => (
            <Card
              className="border-2 transition-colors hover:border-primary/50"
              key={format.title}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <format.Icon className="size-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl">{format.title}</CardTitle>
                    <Badge variant="secondary">{format.duration}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {format.description}
                </CardDescription>

                <ul className="space-y-2">
                  {format.bullets.map((bullet) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                      key={bullet}
                    >
                      <span className="mt-1 text-primary">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {format.examples && (
                  <div className="space-y-2 border-t pt-4">
                    <p className="font-medium text-sm">{t("examplesLabel")}</p>
                    <div className="flex flex-wrap gap-2">
                      {format.examples.map((example) => (
                        <Logo
                          alt={example.name}
                          key={example.name}
                          name={example.name}
                          src={example.img}
                          url={example.url}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Format Cards - Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {formats.map((format) => (
                <CarouselItem key={format.title}>
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <format.Icon className="size-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <CardTitle className="text-xl">
                            {format.title}
                          </CardTitle>
                          <Badge variant="secondary">{format.duration}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base">
                        {format.description}
                      </CardDescription>

                      <ul className="space-y-2">
                        {format.bullets.map((bullet) => (
                          <li
                            className="flex items-start gap-2 text-muted-foreground text-sm"
                            key={bullet}
                          >
                            <span className="mt-1 text-primary">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {format.examples && (
                        <div className="space-y-2 border-t pt-4">
                          <p className="font-medium text-sm">
                            {t("examplesLabel")}
                          </p>
                          <div className="flex flex-wrap gap-4">
                            {format.examples.map((example) => (
                              <Logo
                                alt={example.name}
                                key={example.name}
                                name={example.name}
                                src={example.img}
                                url={example.url}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-3 flex gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export { Formats };
