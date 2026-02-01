import { merge } from "lodash";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const defaultLocale = routing.defaultLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  const fallbackMessages =
    locale !== defaultLocale
      ? (await import(`../../messages/${defaultLocale}.json`)).default
      : {};

  return {
    locale,
    messages: merge({}, fallbackMessages, messages),
  };
});
