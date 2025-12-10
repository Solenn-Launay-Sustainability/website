import Script from "next/script";
import { getTranslations } from "next-intl/server";

export async function EcoIndexBadge() {
  const t = await getTranslations("Hero");
  return (
    <div className="flex w-full flex-col items-center gap-2 text-center text-sm">
      {t("ecoDesigned")}
      {/** biome-ignore lint/correctness/useUniqueElementIds: need to keep this id for the ecoindex badge */}
      <span data-theme="light" id="ecoindex-badge" />
      <Script
        src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
