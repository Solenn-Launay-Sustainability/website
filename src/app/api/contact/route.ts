import { type NextRequest, NextResponse } from "next/server";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/email/contact-email-template";
import { createContactFormSchema } from "@/lib/validations/contact-schema";
import { env } from "~/env";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { locale, ...formData } = body;

    const t = await getTranslations({
      locale: locale || "en-GB",
      namespace: "ContactSection",
    });

    const schema = createContactFormSchema(t);
    const validation = schema.safeParse(formData);

    if (!validation.success) {
      return NextResponse.json(
        { details: validation.error.issues, error: "Invalid form data" },
        { status: 400 },
      );
    }

    const validatedData = validation.data;

    // @ts-expect-error - Dynamic translation keys with next-intl
    const whoTranslated = t(`whoOptions.${validatedData.who}`);
    // @ts-expect-error - Dynamic translation keys with next-intl
    const reasonTranslated = t(`reasonOptions.${validatedData.reason}`);

    const emailLabels = {
      email: t("email.email"),
      message: t("email.message"),
      name: t("email.name"),
      reason: t("email.reason"),
      title: t("email.title"),
      who: t("email.who"),
    };

    const { data, error } = await resend.emails.send({
      from: env.CONTACT_EMAIL_FROM,
      react: ContactEmailTemplate({
        ...validatedData,
        labels: emailLabels,
        reason: reasonTranslated,
        who: whoTranslated,
      }),
      replyTo: validatedData.email,
      subject: t("email.subject"),
      to: env.CONTACT_EMAIL_TO.split(",").map((email) => email.trim()),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ id: data?.id, success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
