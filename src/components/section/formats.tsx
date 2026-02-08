"use client";

import { PlusCircle, Presentation, Users, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import biodiversityCollage from "@/assets/images/biodiversity-collage.webp";
import circularEconomy from "@/assets/images/circular-economy.webp";
import circularEconomyChallenge from "@/assets/images/circular-economy-challenge.webp";
import climateFresk from "@/assets/images/climate-fresk.webp";
import climatePitch from "@/assets/images/climate-pitch.svg";
import foodFresk from "@/assets/images/food-fresk.webp";
import { FormatsHighlighter } from "@/components/section/formats-highlighter";
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
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Logo } from "../logo";
import { Text, Title } from "../ui/typography";

function Formats() {
  const t = useTranslations("FormatsSection");
  const isMobile = useIsMobile();

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
          img: circularEconomyChallenge,
          name: t("formats.conference.example2"),
          url: "https://www.lafresquedeleconomiecirculaire.com/en/participate#section-defi",
        },
      ],
      formatId: "conference",
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
          url: "https://fresquealimentation.org/",
        },
      ],
      formatId: "card-based",
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
      formatId: "bespoke",
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
      formatId: "add-on",
      Icon: PlusCircle,
      title: t("formats.addOn.title"),
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl space-y-12" id="formats">
        <FormatsHighlighter />
        {/* Header */}
        <div className="space-y-4 text-center">
          <Title as="h2" size="xl">
            {t("header.title")}
          </Title>
          <Text className="mx-auto max-w-2xl" size="lg" variant="muted">
            {t("header.description")}
          </Text>
        </div>

        {isMobile ? (
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {formats.map((format) => (
                  <CarouselItem key={format.title}>
                    <Card
                      className="scroll-mt-24 border-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg data-[highlighted=true]:border-primary data-[highlighted=true]:shadow-xl data-[highlighted=true]:ring-2 data-[highlighted=true]:ring-primary/35"
                      data-format-card={format.formatId}
                      data-highlighted="false"
                      id={`format-${format.formatId}`}
                    >
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
              <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <CarouselPrevious />
                <CarouselDots />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {formats.map((format) => (
              <Card
                className="scroll-mt-24 border-2 transition-all duration-300 hover:border-primary/60 hover:shadow-lg data-[highlighted=true]:border-primary data-[highlighted=true]:shadow-xl data-[highlighted=true]:ring-2 data-[highlighted=true]:ring-primary/35"
                data-format-card={format.formatId}
                data-highlighted="false"
                id={`format-${format.formatId}`}
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
                      <p className="font-medium text-sm">
                        {t("examplesLabel")}
                      </p>
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
        )}
      </div>
    </section>
  );
}

export { Formats };
