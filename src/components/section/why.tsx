import { ZoomIn } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import risksOpportunities from "@/assets/images/risks-opportunities.png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Text, Title } from "@/components/ui/typography";

export async function Why() {
  const t = await getTranslations("WhySection");

  return (
    <section
      className="bg-muted/30 px-4 py-20 md:py-32"
      id={Why.name.toLowerCase()}
    >
      <div className="container mx-auto space-y-12">
        <div className="space-y-6">
          <Title size="xl">{t("why")}</Title>
          <div className="space-y-4 text-foreground/80 text-lg">
            <Text>{t("climate")}</Text>
            <Text>{t("however")}</Text>
          </div>
        </div>

        <Dialog>
          <DialogTrigger className="group relative block w-full">
            <figure className="relative overflow-hidden rounded-lg border p-2 shadow-lg transition-transform hover:scale-[1.01]">
              <Image
                alt={t("altFigure")}
                className="h-auto w-full"
                src={risksOpportunities}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors group-hover:bg-primary/10">
                <div className="rounded-full bg-primary p-3 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="size-6" />
                </div>
              </div>
              <figcaption className="p-4 text-center text-muted-foreground text-sm">
                {t("figcaption")}
              </figcaption>
            </figure>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] w-[98%] max-w-6xl overflow-auto rounded-md p-2">
            <DialogTitle className="sr-only">{t("altFigure")}</DialogTitle>
            <Image
              alt={t("altFigure")}
              className="h-auto w-full"
              src={risksOpportunities}
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
