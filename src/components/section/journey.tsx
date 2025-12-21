import { Lightbulb, MapIcon, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Text, Title } from "@/components/ui/typography";

const journeySteps = [
  {
    description:
      "Engage & level up knowledge of your staff, management, stakeholders…",
    icon: Lightbulb,
    title: "Raise awareness",
  },
  {
    description:
      "Assess your main environmental impacts & risks, identify key opportunities.",
    icon: Search,
    title: "Identify Impacts, Risks & Opportunities (I.R.O.)",
  },
  {
    description:
      "Define priority targets, build a roadmap and support implementation.",
    icon: MapIcon,
    title: "Establish & deliver roadmap",
  },
];

async function Journey() {
  const t = await getTranslations("JourneySection");
  return (
    <section
      className="container mx-auto space-y-12 px-4 py-20 md:py-32"
      id={Journey.name.toLowerCase()}
    >
      <div className="space-y-4 text-center">
        <Title size="xl">{t("title")}</Title>
        <Text size="lg" variant="muted">
          {t("description")}
        </Text>
      </div>

      <div className="mx-auto w-full md:hidden">
        <Carousel>
          <CarouselContent>
            {journeySteps.map((step) => (
              <CarouselItem key={step.title}>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-3 flex gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {journeySteps.map((step) => (
          <Card className="border-2" key={step.title}>
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
