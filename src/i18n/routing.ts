import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  defaultLocale: "en-GB",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      "en-GB": "/en",
      fr: "/fr",
    },
  },
  locales: ["en-GB", "fr"],
});
