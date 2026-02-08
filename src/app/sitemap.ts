import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { env } from "~/env";

function getLocalePath(locale: (typeof routing.locales)[number]): string {
  return locale === routing.defaultLocale ? "/" : `/${locale}`;
}

function getAbsoluteUrl(path: string): string {
  return new URL(path, env.NEXT_PUBLIC_SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((locale) => [
            locale,
            getAbsoluteUrl(getLocalePath(locale)),
          ]),
        ),
      },
      lastModified: new Date(),
      priority: 1,
      url: getAbsoluteUrl(getLocalePath(routing.defaultLocale)),
    },
  ];
}
