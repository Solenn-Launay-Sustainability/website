import { z } from "zod";

const emailWithNameRegex =
  /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|.+<[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}>)$/;

const envSchema = z.object({
  CONTACT_EMAIL_FROM: z
    .string()
    .min(1, "CONTACT_EMAIL_FROM is required")
    .regex(
      emailWithNameRegex,
      "CONTACT_EMAIL_FROM must be a valid email or format 'Name <email@example.com>'",
    ),
  CONTACT_EMAIL_TO: z
    .string()
    .min(1, "CONTACT_EMAIL_TO is required")
    .refine(
      (val) => {
        const emails = val.split(",").map((e) => e.trim());
        return emails.every(
          (email) => z.string().email().safeParse(email).success,
        );
      },
      {
        message:
          "CONTACT_EMAIL_TO must be a valid email or comma-separated list of emails",
      },
    ),
  NEXT_PUBLIC_SANITY_API_VERSION: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .default("2025-11-20"),
  NEXT_PUBLIC_SANITY_DATASET: z
    .enum(["production", "test"])
    .default("production"),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z
    .string()
    .min(1, "NEXT_PUBLIC_SANITY_PROJECT_ID is required"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  RESEND_API_KEY: z
    .string()
    .min(1, "RESEND_API_KEY is required")
    .startsWith("re_", "RESEND_API_KEY must start with 're_'"),
});

function validateEnv() {
  const result = envSchema.safeParse({
    CONTACT_EMAIL_FROM: process.env.CONTACT_EMAIL_FROM,
    CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  });

  if (!result.success) {
    console.error("❌ Invalid environment variables:");
    console.error(JSON.stringify(result.error.format(), null, 2));
    throw new Error("Invalid environment variables");
  }

  return result.data;
}

export const env = validateEnv();
