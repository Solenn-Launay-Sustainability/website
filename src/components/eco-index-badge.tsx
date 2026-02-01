"use client";

import Script from "next/script";
import { useTranslations } from "next-intl";

export function EcoIndexBadge() {
  const t = useTranslations("Hero");

  return (
    <div className="flex w-full flex-col items-center gap-2 text-center text-sm">
      {t("ecoDesigned")}
      <span data-theme="light" id="ecoindex-badge" />
      <Script
        src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
