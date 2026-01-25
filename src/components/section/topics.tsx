import { Cloud, Globe, Leaf, Recycle, Shield } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Text, Title } from "@/components/ui/typography";

async function Topics() {
  const t = await getTranslations("TopicsSection");

  const topics = [
    { Icon: Cloud, name: t("topic.climate") },
    { Icon: Recycle, name: t("topic.circularEconomy") },
    { Icon: Leaf, name: t("topic.biodiversity") },
    { Icon: Globe, name: t("topic.planetaryBoundaries") },
    { Icon: Shield, name: t("topic.adaptation") },
  ];

  const sectors = [
    t("sector.constructionEnergy"),
    t("sector.digitalTextilesPlastics"),
    t("sector.agriFood"),
  ];

  return (
    <section className="bg-muted/30 py-20 md:py-32" id="topics">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <Title size="xl">{t("title")}</Title>
            <Text className="mx-auto max-w-3xl" size="lg" variant="muted">
              {t("description")}
            </Text>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Title as="h3" className="font-semibold" size="2xl">
                {t("topic.title")}
              </Title>
              <div className="space-y-3">
                {topics.map((topic) => (
                  <div
                    className="flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-muted/50"
                    key={topic.name}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <topic.Icon className="size-5 text-primary" />
                    </div>
                    <span className="font-medium">{topic.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Title as="h3" className="font-semibold" size="2xl">
                {t("sector.title")}
              </Title>
              <div className="space-y-3">
                {sectors.map((sector) => (
                  <Text
                    className="rounded-md border border-border/50 bg-background/50 p-3 font-medium"
                    key={sector}
                  >
                    {sector}
                  </Text>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <Text variant="muted">{t("bottomNote")}</Text>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Topics };
