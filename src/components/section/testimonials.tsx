import Image from "next/image";
import { getTranslations } from "next-intl/server";
import centreService from "@/assets/images/testimonials/centre-service-scolaire.png";
import edf from "@/assets/images/testimonials/edf.webp";
import edhec from "@/assets/images/testimonials/edhec.png";
import fondsSolidarite from "@/assets/images/testimonials/fonds-solidarite.png";
import mobility from "@/assets/images/testimonials/mobility.webp";
import om from "@/assets/images/testimonials/om.png";
import parapluie from "@/assets/images/testimonials/parapluie.webp";
import southEast from "@/assets/images/testimonials/south-east.webp";
import { Card, CardContent } from "@/components/ui/card";
import { Text, Title } from "@/components/ui/typography";
import { Separator } from "../ui/separator";

async function Testimonials() {
  const t = await getTranslations("TestimonialsSection");

  const testimonials = [
    {
      author: t("testimonials.testimonial1.author"),
      id: "testimonial-1",
      quote: t("testimonials.testimonial1.quote"),
    },
    {
      author: t("testimonials.testimonial2.author"),
      id: "testimonial-2",
      position: t("testimonials.testimonial2.position"),
      quote: t("testimonials.testimonial2.quote"),
    },
    {
      author: t("testimonials.testimonial3.author"),
      id: "testimonial-3",
      position: t("testimonials.testimonial3.position"),
      quote: t("testimonials.testimonial3.quote"),
    },
    {
      id: "testimonial-4",
      quote: t("testimonials.testimonial4.quote"),
    },
  ];

  const clients = [
    {
      image: southEast,
      name: t("clients.client2"),
    },
    {
      image: om,
      name: t("clients.client3"),
    },
    {
      image: edf,
      name: t("clients.client4"),
    },
    {
      image: mobility,
      name: t("clients.client5"),
    },
    { image: edhec, name: t("clients.client7") },
    {
      image: fondsSolidarite,
      name: t("clients.client6"),
    },
    {
      image: centreService,
      name: t("clients.client8"),
    },
    {
      image: parapluie,
      name: t("clients.client1"),
    },
  ];

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto space-y-12 px-4" id="testimonials">
        <Title className="text-center" size="xl">
          {t("title")}
        </Title>

        <div className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-6">
          {clients.map(({ name, image }) => (
            <Image
              alt={name}
              className="max-h-12 overflow-hidden rounded-lg object-contain"
              key={name}
              src={image}
            />
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              className="border-none bg-transparent py-0 shadow-none"
              key={testimonial.id}
            >
              <CardContent className="space-y-4 pt-6">
                <Text className="italic" size="lg">
                  “{testimonial.quote}”
                </Text>
                <Separator />
                {testimonial.author || testimonial.position ? (
                  <>
                    {testimonial.author && (
                      <Text className="font-semibold">
                        {testimonial.author}
                      </Text>
                    )}
                    {testimonial.position && (
                      <Text size="sm" variant="muted">
                        {testimonial.position}
                      </Text>
                    )}
                  </>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Testimonials };
