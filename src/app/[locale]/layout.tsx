import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ogImage from "@/app/opengraph-image.png";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import { env } from "~/env";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const requestedLocale = (await params).locale;

  if (!hasLocale(routing.locales, requestedLocale)) {
    notFound();
  }

  const locale = requestedLocale;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");

  return {
    description,
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    openGraph: {
      description,
      images: [
        {
          alt: title,
          url: ogImage.src,
        },
      ],
      siteName: t("siteName"),
      title,
      type: "website",
      url: locale === routing.defaultLocale ? "/" : `/${locale}`,
    },
    title,
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const requestedLocale = (await params).locale;

  if (!hasLocale(routing.locales, requestedLocale)) {
    notFound();
  }

  const locale = requestedLocale;

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="mx-auto min-h-dvh antialiased">
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
