import { getTranslations } from "next-intl/server";
import { SITE_NAME } from "@/lib/constants";
import { Text } from "../ui/typography";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="container mx-auto mt-20 mb-4 flex justify-center">
      <Text size="sm" variant="muted">
        &copy; {SITE_NAME} {new Date().getFullYear()}. {t("rights")}
      </Text>
    </footer>
  );
}
