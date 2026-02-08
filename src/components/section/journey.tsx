import { Lightbulb, MapIcon, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Text, Title } from "@/components/ui/typography";

const journeyStepItems = [
  {
    formatTarget: "conference",
    icon: Lightbulb,
    key: "raiseAwareness",
  },
  {
    formatTarget: "bespoke",
    icon: Search,
    key: "identifyIro",
  },
  {
    formatTarget: null,
    icon: MapIcon,
    key: "establishRoadmap",
  },
] as const;

async function Journey() {
  const t = await getTranslations("JourneySection");
  const journeySteps = journeyStepItems.map((step) => ({
    description: t(`journeySteps.${step.key}.description`),
    formatTarget: step.formatTarget,
    icon: step.icon,
    key: step.key,
    title: t(`journeySteps.${step.key}.title`),
  }));

  return (
    <section className="container mx-auto space-y-12 px-4 py-20 md:py-32">
      <div className="space-y-4 text-center" id="journey">
        <Title size="xl">{t("title")}</Title>
        <Text size="lg" variant="muted">
          {t("description")}
        </Text>
      </div>
      <div className="mx-auto w-full md:hidden">
        <Carousel>
          <CarouselContent>
            {journeySteps.map((step) => (
              <CarouselItem key={step.key}>
                {step.formatTarget ? (
                  <a
                    className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    data-format-link={step.formatTarget}
                    href={`#format-${step.formatTarget}`}
                  >
                    <Card className="cursor-pointer border-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg">
                      <CardContent className="space-y-4 pt-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Title className="font-semibold text-xl">
                          {step.title}
                        </Title>
                        <Text variant="muted">{step.description}</Text>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="border-2">
                    <CardContent className="space-y-4 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Title className="font-semibold text-xl">
                        {step.title}
                      </Title>
                      <Text variant="muted">{step.description}</Text>
                    </CardContent>
                  </Card>
                )}
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
      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {journeySteps.map((step) => (
          <div key={step.key}>
            {step.formatTarget ? (
              <a
                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                data-format-link={step.formatTarget}
                href={`#format-${step.formatTarget}`}
              >
                <Card className="cursor-pointer border-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg">
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Title className="font-semibold" size="lg">
                      {step.title}
                    </Title>
                    <Text variant="muted">{step.description}</Text>
                  </CardContent>
                </Card>
              </a>
            ) : (
              <Card className="border-2">
                <CardContent className="space-y-4 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Title className="font-semibold" size="lg">
                    {step.title}
                  </Title>
                  <Text variant="muted">{step.description}</Text>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>
      {/* Roadmap & Implementation Details */}
      <div className="mt-16 space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-card/50">
            <CardHeader>
              <Title className="font-semibold text-xl">{t("step1Title")}</Title>
            </CardHeader>
            <CardContent>
              <Text variant="muted">{t("step1Description")}</Text>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardHeader>
              <Title className="font-semibold text-xl">{t("step2Title")}</Title>
            </CardHeader>
            <CardContent>
              <Text variant="muted">{t("step2Description")}</Text>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export { Journey };
