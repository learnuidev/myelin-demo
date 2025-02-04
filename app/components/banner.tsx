"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Banner = () => {
  const { t } = useTranslation("banner");
  return (
    <section className="flex flex-col justify-center items-center mt-32">
      <h1 className="text-5xl font-bold">{t("title")}</h1>

      <p className="mt-4 text-xl font-mono">{t("description")}</p>
    </section>
  );
};
