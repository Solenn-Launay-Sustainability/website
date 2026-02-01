"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { ContactInfo } from "@/components/contact-info";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { Text, Title } from "@/components/ui/typography";
import {
  type ContactFormData,
  createContactFormSchema,
} from "@/lib/validations/contact-schema";

function Contact() {
  const t = useTranslations("ContactSection");
  const locale = useLocale();

  const formSchema = useMemo(() => createContactFormSchema(t), [t]);

  const form = useForm<ContactFormData>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      reason: "",
      who: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { isSubmitting, isSubmitSuccessful } = form.formState;

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          ...data,
          locale,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API error:", errorData);
        throw new Error("Failed to send message");
      }

      toast.success(t("form.successMessage"));
      form.reset();
    } catch (error) {
      console.error("Submit error:", error);
      toast.error(t("form.errorMessage"));
    }
  }

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="mb-12 space-y-4 text-center" id="contact">
        <Title size="xl">{t("title")}</Title>
        <Text className="mx-auto max-w-2xl" size="lg" variant="muted">
          {t("description")}
        </Text>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_300px]">
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <div className="grid gap-4 md:grid-cols-2">
                  <Controller
                    control={form.control}
                    name="firstName"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="contact-firstName">
                          {t("form.firstName")} *
                        </FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          autoComplete="given-name"
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="lastName"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="contact-lastName">
                          {t("form.lastName")} *
                        </FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          autoComplete="family-name"
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />
                </div>

                <Controller
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-email">
                        {t("form.email")} *
                      </FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        autoComplete="email"
                        type="email"
                      />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <Controller
                  control={form.control}
                  name="who"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-who">
                        {t("form.who")} *
                      </FieldLabel>
                      <Select
                        name={field.name}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger aria-invalid={fieldState.invalid}>
                          <SelectValue
                            placeholder={t("form.selectPlaceholder")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">
                            {t("whoOptions.private")}
                          </SelectItem>
                          <SelectItem value="public">
                            {t("whoOptions.public")}
                          </SelectItem>
                          <SelectItem value="individual">
                            {t("whoOptions.individual")}
                          </SelectItem>
                          <SelectItem value="other">
                            {t("whoOptions.other")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <Controller
                  control={form.control}
                  name="reason"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-reason">
                        {t("form.reason")} *
                      </FieldLabel>
                      <Select
                        name={field.name}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger aria-invalid={fieldState.invalid}>
                          <SelectValue
                            placeholder={t("form.selectPlaceholder")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="question">
                            {t("reasonOptions.question")}
                          </SelectItem>
                          <SelectItem value="info">
                            {t("reasonOptions.info")}
                          </SelectItem>
                          <SelectItem value="workshop">
                            {t("reasonOptions.workshop")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <Controller
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="contact-message">
                        {t("form.message")} *
                      </FieldLabel>
                      <Textarea
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder={t("form.messagePlaceholder")}
                        rows={6}
                      />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <Button
                  className="w-full"
                  disabled={isSubmitting || isSubmitSuccessful}
                  size="lg"
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner className="mr-2" />
                      {t("form.submitting")}
                    </>
                  ) : isSubmitSuccessful ? (
                    t("form.submitted")
                  ) : (
                    t("form.submit")
                  )}
                </Button>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <div className="max-lg:mx-auto">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export { Contact };
