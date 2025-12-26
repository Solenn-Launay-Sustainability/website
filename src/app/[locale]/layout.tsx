import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

export const metadata: Metadata = {
  description:
    "Sustainability advisory, workshops and roadmaps to help organisations reduce their environmental impacts and strengthen their business models.",
  title: "Solenn Launay - Sustainability advisor",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className="mx-auto min-h-dvh antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
