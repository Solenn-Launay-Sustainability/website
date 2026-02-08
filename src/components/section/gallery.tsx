import Image from "next/image";
import { getTranslations } from "next-intl/server";
import image001 from "@/assets/images/gallery/image001.webp";
import image014 from "@/assets/images/gallery/image014.webp";
import image015 from "@/assets/images/gallery/image015.webp";
import image016 from "@/assets/images/gallery/image016.webp";
import image017 from "@/assets/images/gallery/image017.webp";
import image018 from "@/assets/images/gallery/image018.webp";
import image019 from "@/assets/images/gallery/image019.webp";
import { cn } from "@/lib/utils";
import { Text, Title } from "../ui/typography";

const galleryPhotos = [
  { image: image001, layout: "md:col-span-7 md:row-span-2", position: null },
  { image: image014, layout: "md:col-span-5 md:row-span-2", position: null },
  { image: image015, layout: "md:col-span-4 md:row-span-2", position: null },
  { image: image016, layout: "md:col-span-8 md:row-span-2", position: null },
  { image: image017, layout: "md:col-span-6 md:row-span-2", position: null },
  {
    image: image018,
    layout: "md:col-span-6 md:row-span-1",
    position: "md:object-[22%_24%]",
  },
  {
    image: image019,
    layout: "md:col-span-6 md:row-span-1",
    position: "md:object-[78%_24%]",
  },
] as const;

async function Gallery() {
  const t = await getTranslations("GallerySection");

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl space-y-10" id="gallery">
        <div className="space-y-4 text-center">
          <Title as="h2" size="xl">
            {t("title")}
          </Title>
          <Text className="mx-auto max-w-2xl" size="lg" variant="muted">
            {t("description")}
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[170px] md:grid-cols-12">
          {galleryPhotos.map((photo, index) => (
            <figure
              className={cn(
                "group relative min-h-60 overflow-hidden rounded-2xl border bg-card/30 shadow-sm",
                "transition-all duration-300 hover:border-primary/50 hover:shadow-lg",
                "sm:min-h-52 md:min-h-0",
                photo.layout,
              )}
              key={photo.image.src}
            >
              <Image
                alt={t("photoAlt", { index: String(index + 1) })}
                className={cn(
                  "object-cover transition-transform duration-500 group-hover:scale-105",
                  photo.position,
                )}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                src={photo.image}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Gallery };
