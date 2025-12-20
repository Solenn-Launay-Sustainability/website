import { Mail, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Linkedin } from "@/components/icons/linkedin";

async function ContactInfo() {
  const t = await getTranslations("Hero");

  const contactInfo = {
    email: "launaysolenn@yahoo.fr",
    linkedin: "https://www.linkedin.com/in/solenn-launay/",
    phone: "+44(0) 749.334.3282",
  };

  return (
    <div className="space-y-3 rounded-lg border bg-card/80 p-6 shadow-lg backdrop-blur-sm max-lg:w-fit">
      <a
        className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
        href={`tel:${contactInfo.phone
          .replace(/\(0\)/, "")
          .replace(/[^+\d]/g, "")}`}
      >
        <Phone className="size-4" />
        <span>{contactInfo.phone}</span>
      </a>

      <a
        className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
        href={`mailto:${contactInfo.email}`}
      >
        <Mail className="size-4" />
        <span>{contactInfo.email}</span>
      </a>

      <a
        className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
        href={contactInfo.linkedin}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Linkedin className="size-4" />
        <span>{t("linkedinProfile")}</span>
      </a>
    </div>
  );
}

export { ContactInfo };
