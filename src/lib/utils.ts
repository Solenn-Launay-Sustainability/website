import { type ClassValue, clsx } from "clsx";
import type { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TTranslationFunction = ReturnType<typeof useTranslations>;
