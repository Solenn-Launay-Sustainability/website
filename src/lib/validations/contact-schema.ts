import * as z from "zod";
import type { TTranslationFunction } from "@/lib/utils";

export function createContactFormSchema(t: TTranslationFunction) {
  return z.object({
    email: z.string().email(t("validation.emailInvalid")),
    firstName: z
      .string()
      .min(2, t("validation.firstNameMin"))
      .max(50, t("validation.firstNameMax")),
    lastName: z
      .string()
      .min(2, t("validation.lastNameMin"))
      .max(50, t("validation.lastNameMax")),
    message: z
      .string()
      .min(20, t("validation.messageMin"))
      .max(1000, t("validation.messageMax")),
    reason: z.string().min(1, t("validation.reasonRequired")),
    who: z.string().min(1, t("validation.whoRequired")),
  });
}

export type ContactFormData = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
