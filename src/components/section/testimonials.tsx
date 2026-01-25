import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { Text, Title } from "@/components/ui/typography";

async function Testimonials() {
  const t = await getTranslations("TestimonialsSection");

  const testimonials = [
    {
      author: t("testimonials.testimonial1.author"),
      quote: t("testimonials.testimonial1.quote"),
      role: t("testimonials.testimonial1.role"),
    },
    {
      author: t("testimonials.testimonial2.author"),
      quote: t("testimonials.testimonial2.quote"),
      role: t("testimonials.testimonial2.role"),
    },
  ];

  const clients = [
    t("clients.client1"),
    t("clients.client2"),
    t("clients.client3"),
    t("clients.client4"),
    t("clients.client5"),
    t("clients.client6"),
  ];

  return (
    <section className="bg-muted/30 py-20 md:py-32" id="testimonials">
      <div className="container mx-auto space-y-12 px-4">
        {/* Header */}
        <div className="text-center">
          <Title size="xl">{t("title")}</Title>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              className="flex items-center justify-center rounded-lg border bg-card p-6 transition-colors hover:border-primary/50"
              key={client}
            >
              <Text
                className="text-center font-medium"
                size="sm"
                variant="muted"
              >
                {client}
              </Text>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              className="border-none bg-transparent shadow-none"
              key={testimonial.author}
            >
              <CardContent className="space-y-4 pt-6">
                <Text className="italic" size="lg">
                  "{testimonial.quote}"
                </Text>
                <div className="border-t pt-4">
                  <Text className="font-semibold">{testimonial.author}</Text>
                  <Text size="sm" variant="muted">
                    {testimonial.role}
                  </Text>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Testimonials };
