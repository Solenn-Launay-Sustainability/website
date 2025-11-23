import { getTranslations } from "next-intl/server";
export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <h1>{t("title")}</h1>
      <p className="">{t("welcomeMessage")}</p>
      <p className="">Welcome Solenn !</p>
      <p>Your new website is under construction.</p>
      <p>By the best developer you can imagine.</p>
    </div>
  );
}
